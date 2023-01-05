const express = require("express");
const router = express.Router();
const {GetClient,
    acceptecomptclient,
    desactivercomptclient
}=require("../controller/adminController")
const {protect,role}=require("../../../middlewares/authMiddlewre")
// protect,role("admin"),
router.route("/getclient").get(GetClient);
router.route("/acceptecomptclient/:id").put(protect,role("admin"),acceptecomptclient);
router.route("/desactivercomptclient/:id").put(protect,role("admin"),desactivercomptclient);

module.exports = router;