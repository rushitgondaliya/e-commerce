const { SubCategory} = require("../models");

const createSubCategory = async (reqBody) => {
  return SubCategory.create(reqBody);
};

const subCategoryList = async (req, res) => {
  return SubCategory.find().populate("category");
};

const deleteCategory = async (categoryId) => {
  return SubCategory.findByIdAndDelete(categoryId);
};

const getCategoryById = async (categoryId) => {
  return SubCategory.findById(categoryId);
};

const getCategoryByName = async (subCategory_name) => {
  return SubCategory.findOne({ subCategory_name });
};

const updateDetails = async (categoryId, updateBody) => {
  return SubCategory.findByIdAndUpdate(categoryId, { $set: updateBody });
};

module.exports = {
  createSubCategory,
  subCategoryList,
  deleteCategory,
  getCategoryById,
  updateDetails,
  getCategoryByName,
};