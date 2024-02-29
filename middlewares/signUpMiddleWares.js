const emp = require("../models/Employees");

//signup middleware to check if email already exists send back
const signupMiddleWare = async (req, res, next) => {
  try {
    let mydata = req.body;
    let emailExists = await emp.find({ email: mydata.email });
    if (emailExists.length == 0) {
      next();
    } else {
      res.send(`User ${mydata.email} already exists try to sign in...`);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("internal Error....");
  }
};

module.exports = { signupMiddleWare };
