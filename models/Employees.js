const { default: mongoose } = require("mongoose");

//schema
let empData = new mongoose.Schema(
  {
    empId: { type: Number, unique: true, trim: true },
    name: {
      type: String,
      required: [true, "please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      unique: true,
      trim: true,
    },
    password: { type: String, required: [true, "please Enter your password"] },
    creationTime: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

//creating model
const emp = mongoose.model("empTable", empData);

module.exports = emp;
