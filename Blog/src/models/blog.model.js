const mongoose = require("mongoose");
const config = require("../config/config");

const blogSchema = new mongoose.Schema(
    {
        blog_title:{
            type:String,
            trim:true
        },
        blog_category:{
            type:String,
            trim:true
        },
        blog_image:{
            type:String,
            trim:true
        },
        blog_content:{
            type:String,
            trim:true
        },
        blog_author:{
            type:String,
            trim:true
        },
        is_active:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true,
        versionKey:false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.blog_image) {
                    data.blog_image = `${config.base_url}blog_images/${data.blog_image}`;
                }
            },
        },
    }
);

const blog = mongoose.model("blog" , blogSchema);
module.exports = blog ;