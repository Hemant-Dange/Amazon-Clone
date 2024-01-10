const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  fname: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email Address not Valid");
      }
    },
  },
  mobile: { type: String, required: true, unique: true, maxLength: 10 },
  password: { type: String, required: true, minLength: 6 },
  cpassword: { type: String, required: true, minLength: 6 },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
