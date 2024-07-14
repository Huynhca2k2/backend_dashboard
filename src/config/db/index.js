const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://huynhca2k2:0947079663Aa@cluster0.nya944o.mongodb.net/dashboard",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("connect db successfully!!!");
  } catch (error) {
    console.log("connect db fail: ");
  }
}

module.exports = { connect };
