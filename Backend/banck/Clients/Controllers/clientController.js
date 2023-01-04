const express = require("express");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const errorHandler = require("../../../middlewares/errorMiddleware");
const Transaction = require("../Models/transactionModel");
const User = require("../../Auth/models/authModel");

// get all transactions
// @desc    Fetch all transactions
// @route   GET /api/transactions
// @access  Private/Admin
const getTransactions = asyncHandler(async (req, res) => {
    const transactions = await Transaction.find({ user: req.user
    ._id }).sort({ createdAt: -1 });
    res.json(transactions);
    
});

// get user by id
// @desc    Fetch single transaction
// @route   GET /api/transactions/:id
// @access  Private/Admin
const getTransactionById = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);
  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404);
    throw new Error("Transaction not found");
  }
});

// create transaction
// @desc    Create a transaction
// @route   POST /api/transactions
// @access  Private/Admin
const createTransaction = asyncHandler(async (req, res) => {
  const { montant, receveur, type } = req.body;
  // tester si le type est retrait
  if (type === "envoi") {
    // tester si le montant est inferieur au solde
    const user = await User.findById(req.user._id);
            if (user.solde < montant) {
            res.status(400);
            throw new Error("solde insuffisant");
            }
            // sinon on fait la transaction
            else {
            const transaction = new Transaction({
                montant,
                receveur,
                type,
                user: req.user._id,
            });
            // update solde
            user.solde = user.solde - montant;
            await user.save();
            // update solde de receveur
            const receiverUser = await User.findById(receveur);
                if (receiverUser) {
                    receiverUser.solde += Number(montant);
                    await receiverUser.save();
                }
            const createdTransaction = await transaction.save();
            res.status(201).json(createdTransaction);
            }
  }
  // sinon on fait la transaction
  else if (type === "retrait") {
    const transaction = new Transaction({
      montant,
      type,
      user: req.user._id,
    });
    // update solde
    const user = await User.findById(req.user._id);
    user.solde -= Number(montant);
    await user.save();
    const createdTransaction = await transaction.save();
    res.status(201).json(createdTransaction);
  }
  // sinon on fait la transaction
  else if (type === "depot") {
    const transaction = new Transaction({
      montant,
      type,
      user: req.user._id,
    });
    // update solde
    const user = await User.findById(req.user._id);
    user.solde +=Number(montant);
    await user.save();

    const createdTransaction = await transaction.save();
    res.status(201).json(createdTransaction);
  }

});

module.exports = {
  getTransactions,
  getTransactionById,
  createTransaction,
};
