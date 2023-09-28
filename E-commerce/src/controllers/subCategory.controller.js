const { subCategoryService } = require("../services");

/** create category */
const createSubCategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const categoryEx = await subCategoryService.getCategoryByName(
      reqBody.subCategory_name
    );
    if (categoryEx) {
      throw new Error(
        `please add other Sub-Category this ${categoryEx.subCategory_name} category already created.`
      );
    }

    const Subcategory = await subCategoryService.createSubCategory(reqBody);

    res.status(200).json({
      success: true,
      message: "Sub-Category create successfully!",
      data: {
        Subcategory,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const subCategoryList = async (req, res) => {
  try {
    const getCategory = await subCategoryService.subCategoryList(req,res);

    res.status(200).json({
      success: true,
      message: "Category List!",
      data: {
        getCategory,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteRecord = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const cateExists = await subCategoryService.getCategoryById(categoryId);
    if (!cateExists) {
      throw new Error("Category not found!");
    }

    await subCategoryService.deleteCategory(categoryId);

    res.status(200).json({
      success: true,
      message: "Category delete successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;

    const cateExists = await subCategoryService.getCategoryById(categoryId);
    if (!cateExists) {
      throw new Error("Category not found!");
    }

    await subCategoryService.updateDetails(categoryId, req.body);

    res.status(200).json({
      success: true,
      message: "Category details update successfully!",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/** Get Category details by id */
const getCategoryDetails = async (req, res) => {
  try {
    const getDetails = await subCategoryService.getCategoryById(
      req.params.categoryId
    );
    if (!getDetails) {
      throw new Error("Category not found!");
    }

    res.status(200).json({
      success: true,
      message: "Category details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createSubCategory,
  subCategoryList,
  deleteRecord,
  updateCategory,
  getCategoryDetails,
};