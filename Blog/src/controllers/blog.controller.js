const fs = require("fs");
const { blogService } = require("../services");

// create blog
const createBlog = async (req, res) => {
    try {
        const reqBody = req.body;

        if (req.file) {
            reqBody.blog_image = req.file.filename;
        } else {
            throw new Error("blog image is required!");
        }

        const createBlog = await blogService.createBlog(reqBody);

        res.status(200).json({
            success: true,
            message: "blog created successfully.",
            data: createBlog,
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error?.message || "Something went wrong, please try again or later!",
        });
    }
};

// get blog list
const getBlogList = async(req,res) =>{
    try {
        const blogList= await blogService.getBlogList(req,res);

        res.status(200).json({
            success:true,
            message:"get blog list successfully.",
            data:blogList
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

// delete blog
const deleteBlog = async (req, res) => {
    try {
        const blogId = req.params.blogId;
        const blogExists = await blogService.getBlogById(blogId);
        if (!blogExists) {
            throw new Error("blog not found!");
        }

        const deletedBlog = await blogService.deleteBlog(blogId);
        if (deletedBlog) {
            const filePath = `./public/blog_images/${blogExists.blog_image}`;
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        } else {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "blog deleted successfully!",
            data: deletedBlog,
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error?.message || "Something went wrong, please try again or later!",
        });
    }
};

// find blog by id
const getBlogById = async(req,res) =>{
    try {
        const blogDetails = await blogService.getBlogById(req.params.blogId);

        if(!blogDetails){
            throw new Error("blog not found");
        }

        res.status(200).json({
            success:true,
            message:"blog details got successfully.",
            data:blogDetails
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
};

const updateBlog = async (req, res) => {
    try {
        const reqBody = req.body;
        const blogId = req.params.blogId;
        const blogExists = await galleryService.getBlogById(blogId);
        if (!blogExists) {
            throw new Error("blog not found!");
        }

        if (req.file) {
            reqBody.blog_image = req.file.filename;
        }

        const updatedBlog = await blogService.updateImage(
            imageId,
            reqBody
        );
        if (updatedImage) {
            if (req.file) {
                const filePath = `./public/blog_images/${blogExists.blog_image}`;
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }
        } else {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "blog details updated successfully!",
            data: updatedBlog,
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error?.message || "Something went wrong, please try again or later!",
        });
    }
};

module.exports = {
    createBlog,
    getBlogList,
    deleteBlog,
    getBlogById,
    updateBlog
}