const express = require("express");
const { signInMiddleWare } = require("../middlewares/signInMiddleWare");
const {
  signInUser,
  forgotPassword,
  updatePassword,
  deleteUser,
} = require("../controllers/employee.controller");
const router = express.Router();

//signin email,password
router.post("/", signInMiddleWare, signInUser);

//forgot psd take email,empid
router.patch("/forgotPsd", signInMiddleWare, forgotPassword);

//update psd take email and old psd
router.patch("/updatePsd", signInMiddleWare, updatePassword);

//delete by taking email,psd
router.delete("/delete", signInMiddleWare, deleteUser);

module.exports = router;
