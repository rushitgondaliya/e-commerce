const express = require("express");
const {blogValidation} = require("../../validations");
const {blogController} = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

// create blog
router.post(
    "create-blog",
    auth(),
    validate(blogValidation.createBlog),
    blogController.createBlog
);

//get blog list
router.get(
    "/list",
    blogController.getBlogList
);

// delete blog
router.delete(
    "/delete-blog/:blogId",
    auth(),
    blogController.deleteBlog
)

// get blog details by id
router.get(
    "get-blog/:blogId",
    blogController.getBlogById
)

//update blog details
router.put(
    "update-blog/:blogId",
    auth(),
    blogController.updateBlog
)

module.exports = router
