const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create category */
router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
  categoryController.createCategory
);

/** category list */
router.get(
  "/list",
  categoryController.categoryList
)
/** Get category details by id */
router.get(
  "/get-details/:categoryId",
  categoryController.getCategoryDetails
);

//category update
router.put(
  "/update-details/:categoryId",
  categoryController.updateCategory
)

//category delete
router.delete(
  "/delete-category/:categoryId",
  categoryController.deleteRecord
)

module.exports = router;