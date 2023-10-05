const express = require("express");
const {userValidation} = require("../../validations");
const {userController} = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create user
router.post(
    "create-user",
    validate(userValidation.createUser),
    userController.createUser
);

//get user list
router.get(
    "/list",
    userController.getUserList
);

// delete user
router.delete(
    "/delete-user/:userId",
    userController.deleteUser
)

// get user details by id
router.get(
    "get-user/:userId",
    userController.getUserById
)

//update user details
router.put(
    "update-user/:userId",
    userController.updateUser
)

module.exports = router
