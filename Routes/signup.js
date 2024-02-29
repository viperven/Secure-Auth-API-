const express = require("express");
const router = express.Router();
const { signupMiddleWare } = require("../middlewares/signUpMiddleWares");
const { createNewUser } = require("../controllers/employee.controller");

//create a account with name,email,password
router.post("/", signupMiddleWare, createNewUser);

module.exports = router;
