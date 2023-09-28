const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    total: {
      type: Number,
      trim: true,
    },
    orderStatus: {
      type: String,
      trim: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Create the Order model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
