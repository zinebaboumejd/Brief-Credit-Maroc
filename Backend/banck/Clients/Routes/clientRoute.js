const express = require("express");
const router = express.Router();
const {createTransaction,
    getClientById,
    getTransactions,
    getTransactionById
}=require("../controllers/clientController")
const {protect,role,active}=require("../../../middlewares/authMiddlewre")

router.route("/getClientById/:id").get(getClientById);

router.route("/createTransaction").post(
    protect,
    role("client"),
    active("active"),
    createTransaction);

router.route("/getTransactions").get(
    protect,
    role("client"),
    active("active"),
    getTransactions);

router.route("/getTransactionById/:id").get(
    protect,
    role("client"),
    active("active"),
    getTransactionById);

    module.exports = router;