const User = require("../models/User");
const upload = require("../middleware/upload");
require("dotenv").config();
const api_url = process.env.API_URL || "http://localhost:8080";

class UserController {
  //get all user
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(400).json({ error: "Error fetching users" });
    }
  }

  //create user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  //get user by id
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  //update user by id
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(updatedUser);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  //delete user by id
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Upload file anh va tra ve url file
  async uploadImage(req, res) {
    try {
      res.status(200).json({
        message: "File uploaded successfully!",
        image_url: `${api_url}/public/images/${req.file.filename}`,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
