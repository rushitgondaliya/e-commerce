const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    subCategory_name: {
      type: String,
      trim: true,
    },
    subCategory_desc: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const SubCategory = mongoose.model("subCategory", categorySchema);

module.exports = SubCategory;