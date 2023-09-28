const { User } = require("../models");

// create user
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

//  Get user list
const getUserList = async (req, res) => {
  return User.find({$or:[{is_active:true}]})
};

const getUserById = async (userId) => {
  return User.findById(userId);
};

const updateDetails = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

// delete user
const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserList,
  getUserById,
  updateDetails,
  deleteUser
};