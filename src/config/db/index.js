const mongoose = require("mongoose");
require("dotenv").config();
const db_url = process.env.DB_URL || "mongodb://localhost:27017/dashboard";

async function connect() {
  try {
    await mongoose.connect(db_url);
    console.log("Connected to MongoDB successfully!!!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
  }
}

module.exports = { connect };
