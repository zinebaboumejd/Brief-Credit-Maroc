const express = require("express"); 
const User=require('../../Auth/models/authModel');
const asyncHandler = require("express-async-handler");

// get admin
// @desc    Fetch all users
// @route   GET /api/users
// @access  Private/Admin
const GetAdmin= asyncHandler(async (req, res) => {
    const users = await User.find({role:"admin"});
    res.json(users);
    });


// get client 
// @desc    Fetch all users
// @route   GET /api/users
// @access  Private/Admin
const GetClient= asyncHandler(async (req, res) => {
    const users = await User.find({role:"client"});
    res.json(users);
    });

        
// accepter user
const acceptecomptclient=asyncHandler(async (req, res) => {
    // update user
    const userId=req.params.id;
    const user=await User.findById(userId)
    if(user){
        user.status="active"
        const updatedUser=await user.save()
        res.json(updatedUser)
    }else{
        res.status(404)
        throw new Error('User not found')
    }
    });
// desactiver user
const desactivercomptclient=asyncHandler(async (req, res) => {
    // update user
    const userId=req.params.id;
    const user=await User.findById (userId)
    if(user){
        user.status="desactiver"
        const updatedUser=await user.save()
        res.json(updatedUser)
    }else{
        res.status(404)
        throw new Error('User not found')
    }
    });



    module.exports={
        GetAdmin,
        GetClient,
        acceptecomptclient,
        desactivercomptclient
    }

