const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: "string",
  },
  email: {
    type: "string",
  },
  phoneNumber: {
    type: "string",
  },
  role: {
    type: "string",
    default: "user",
  },
});

const userModel = mongoose.model("users", UserSchema);
module.exports = userModel;
