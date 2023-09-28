const { Category } = require("../models");

// create category
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

// category list
const getCategoryList = async (req,res) => {
  return Category.find();
  // return Category.find({$or:[{is_active:true}]});
};

// category details by id
const getCategoryById = async (categoryId) => {
    return Category.findById(categoryId);
  };

// category upadate
const updateDetails = async (categoryId, updateBody) => {
    return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

// category delete
const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

//category details by name
const getCategoryByName = async (category_name) => {
  return Category.findOne({ category_name });
};



module.exports = {
  createCategory,
  getCategoryList,
  getCategoryById,
  updateDetails,
  deleteCategory,
  getCategoryByName,
};