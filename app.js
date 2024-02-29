const express = require("express");
const app = express();
const fs = require("fs");
require("./connection");
const cors = require("cors");
const emp = require("./models/Employees");
const signup = require("./Routes/signup");
const signin = require("./Routes/signin");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 4000;

//storing history for every transcation in history.txt
app.use((req, res, next) => {
  let data = `\n ${Date.now()} ${req.ip}: ${req.url}  \n`;
  fs.appendFile("history.text", data, (req, res) => {
    next();
  });
});

//Routes
app.use("/signup", signup);
app.use("/signin", signin);

//get all data by admin credentials
app.get("/", async (req, res) => {
  try {
    if (req) {
      let { id, password } = req.body;
      if (id == "admin" && password == "admin123") {
        let allData = await emp.find({});
        res.status(200).send(allData);
      } else {
        res.status(400).send("Admin Credentials Are Invalid Try Again..");
      }
    } else {
      res.status(400).send("Invalid Admin Credentials !");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error..");
  }
});

app.listen(PORT, () => {
  console.log("server running at port " + PORT);
});
