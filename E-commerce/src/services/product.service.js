const { Product } = require("../models");

//Create product
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

// Get product list
const getProductList = async (req, res) => {
  return Product.find().populate( "category");
};

// Get product details
const getProductById = async (productId) => {
  return Product.findOne(productId);
};

// Update product details
const updateProduct = async (productId, reqBody) => {
  return Product.findOneAndUpdate(productId, { $set: reqBody });
};

// Manage product status
const manageProductStatus = async (productId) => {
  const productExists = await getProductById(productId);
  if (!productExists) {
    throw new Error("Product not found!");
  }

  return Product.findOneAndUpdate(
    { _id: productId },
    {
      $set: {
        is_active: !productExists.is_active,
      },
    },
    { new: true }
  );
};

// Delete product
const deleteProduct = async (productId) => {
  return Product.findOneAndDelete(productId);
};

module.exports = {
  getProductById,
  getProductList,
  createProduct,
  updateProduct,
  manageProductStatus,
  deleteProduct,
};
