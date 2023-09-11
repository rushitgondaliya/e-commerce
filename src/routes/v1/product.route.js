const express = require("express");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");
const { productValidation } = require("../../validations");
const { productController } = require("../../controllers");

const router = express.Router();

/** Create product */
router.post(
  "/create-product",
  upload.single("product_image"),
  validate(productValidation.createProduct),
  productController.createProduct
);

/** Get product details */
router.get(
  "/details/:productId",
  productController.getDetails
);

/** Get production list */
router.get(
  "/list",
  productController.getProductList
);

/** Update product details */
router.put(
  "/update/:productId",
  upload.single("product_image"),
  productController.updateProduct
);

/** Manage product status */
router.put(
  "/manage-status/:productId",
  productController.manageProductStatus
);

/** Delete product */
router.delete(
  "/delete/:productId",
  productController.deleteProduct
);

module.exports = router;