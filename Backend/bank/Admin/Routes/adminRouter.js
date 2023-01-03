const express = require("express");
const router = express.Router();
const {GetClient}=require("../controller/adminController")
const {protect,role}=require("../../../middlewares/authMiddlewre")

router.route("/getclient").get(protect,role("admin"),GetClient);

module.exports = router;