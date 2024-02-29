const { validateEmail, uni } = require("../validation");
const emp = require("../models/Employees");

//create new user name,email,password
const createNewUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.send("All Feilds Are Mandatory");
    } else {
      if (validateEmail(email)) {
        let data = await emp.create({
          empId: uni(),
          name: name,
          email: email,
          password: password,
        });
        res.send(`user created ! your Empid : ${data.empId}  `);
      } else {
        res.status(400).send("Enter a valid email !");
      }
    }
  } catch (error) {
    res.status(500).send("Internal Error Kindly Try Again..");
  }
};

//signin user already exists
const signInUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let search = await emp.find({ email: email });
    if (email == search[0].email && password == search[0].password) {
      res.send(`Welcome ${search[0].name} Bhaut Din Baad AYE..! :)`);
    } else {
      res.send(`Your Password Or Username Doesn't match try again..`);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("internal Error !");
  }
};

//forgot password
const forgotPassword = async (req, res) => {
  try {
    let { email, empId } = req.body;
    let search = await emp.find({ email: email });
    if (email == search[0].email && empId == search[0].empId) {
      let newPsd = uni();
      await emp.findByIdAndUpdate(search[0]._id, { password: newPsd });
      res.send(`Success..Your New Psd Is ${newPsd}`);
    } else {
      res.send("either your email or empid  miss match try again");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Error..");
  }
};

//update Password
const updatePassword = async (req, res) => {
  try {
    let { email, password } = req.body;
    let search = await emp.find({ email: email });
    if (email == search[0].email && password == search[0].password) {
      let newPsd = uni();
      await emp.findByIdAndUpdate(search[0]._id, { password: newPsd });
      res.send(`Success..Your New Psd Is ${newPsd}`);
    } else {
      res.send("either your email or password  miss match try again");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("internal Error !");
  }
};

//delete Employee
const deleteUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    let search = await emp.find({ email: email });
    if (email == search[0].email && password == search[0].password) {
      // let newPsd = uni();
      await emp.findByIdAndDelete(search[0]._id);
      res.send(`Account ${email} deleted sucessfully...`);
    } else {
      res.send("either your email or password  miss match try again");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("internal Error !");
  }
};

module.exports = {
  createNewUser,
  signInUser,
  forgotPassword,
  updatePassword,
  deleteUser,
};
