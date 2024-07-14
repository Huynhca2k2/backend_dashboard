const express = require("express");
const router = express.Router();

const userController = require("../app/controllers/UserController");

//dieu huong qua ham index cua controler

router.post("/create", userController.createUser);

router.patch("/update/:id", userController.updateUser);

router.delete("/delete/:id", userController.deleteUser);

router.get("/search/:id", userController.getUserById);

//goi ham get user
router.get("/", userController.getUsers);

module.exports = router;
