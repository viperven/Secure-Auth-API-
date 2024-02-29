const emp = require("../models/Employees");

//middleware to check if account not exist send back
const signInMiddleWare = async (req, res, next) => {
  try {
    let mydata = req.body;
    let emailExists = await emp.find({ email: mydata.email });
    if (emailExists.length != 0) {
      next();
    } else {
      res.send(
        `User : ${mydata.email} does not exist create a account first..`
      );
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { signInMiddleWare };
