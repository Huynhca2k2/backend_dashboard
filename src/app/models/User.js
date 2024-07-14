const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const User = new Schema({
  image: { type: String, maxLength: 255, default: "" },
  email: { type: String, maxLength: 100 },
  phoneNumber: { type: String, maxLength: 20 },
  firstName: { type: String, maxLength: 255 },
  lastName: { type: String, maxLength: 255 },
  role: { type: String, enum: ["Admin", "Editor", "User"], default: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", User);
