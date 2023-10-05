const {user} = require("../models");

// create user
const createUser = async(reqBody) =>{
    return user.create(reqBody);
};

// get user list
const getUserList = async(req,res) =>{
    return user.find();
};

// delete user
const deleteUser = async(userId) =>{
    return user.findByIdAndDelete(userId)
};

// get user details by id
const getUserById = async(userId) =>{
    return user.findById(userId);
};

// update user details
const updateUser = async(userId , updateBody) =>{
    return user.findByIdAndUpdate(userId , {$set : updateBody});
};


module.exports={
    createUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUser
}