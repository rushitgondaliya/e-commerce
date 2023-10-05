const {blog} = require("../models");

// create blog
const createBlog = async(reqBody) =>{
    return blog.create(reqBody);
};

// get blog list
const getBlogList = async(req,res) =>{
    return blog.find();
};

// delete blog
const deleteBlog = async(blogId) =>{
    return blog.findByIdAndDelete(blogId)
};

// get blog details by id
const getBlogById = async(blogId) =>{
    return blog.findById(blogId);
};

// update blog details
const updateBlog = async(blogId , updateBody) =>{
    return blog.findByIdAndUpdate(blogId , {$set : updateBody});
};


module.exports={
    createBlog,
    getBlogList,
    deleteBlog,
    getBlogById,
    updateBlog
}