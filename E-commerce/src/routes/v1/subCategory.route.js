const express = require("express");
const { subCategoryValidation } = require("../../validations");
const { subCategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create category */
router.post(
  "/create-subCategory",
  validate(subCategoryValidation.createSubCategory),
  subCategoryController.createSubCategory
);

/** category list */
router.get(
    "/list",
    subCategoryController.subCategoryList
    );

router.put(
    "/update-category/:categoryId", 
    subCategoryController.updateCategory);

// /** Get user details by id */
router.get(
    "/get-details/:categoryId", 
    subCategoryController.getCategoryDetails);


router.delete(
    "/delete/:categoryId",
    subCategoryController.deleteRecord
    );
module.exports = router;
