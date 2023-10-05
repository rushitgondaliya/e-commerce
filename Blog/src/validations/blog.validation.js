const joi = require("joi");

// create blog
const createBlog = {
    body: joi.object().keys({
        blog_title : joi.string().trim().required(),
        blog_category : joi.string().trim().required(),
        blog_image : joi.string().allow("").required(),
        blog_content : joi.string().trim().required(),
        blog_author : joi.string().trim().required(),
    })
};

module.exports = {
    createBlog
}
