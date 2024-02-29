const { default: mongoose } = require("mongoose");
require("dotenv").config();

// let db = "mongodb://0.0.0.0:27017/dbEmp";
//chnage your own url

let db = process.env.db;

mongoose
  .connect(db)
  .then(() => console.log("mongo db connected to 'dbEmp' Database"))
  .catch((err) => console.log(err));
