const { cartService } = require("../services");

const createCart = async (req, res) => {
  try {
    const reqBody = req.body;
    const cart = await cartService.createCart(reqBody);
    if (!cart) {
      throw new Error("Error creating cart");
    }
    res.status(200).json({
      success: true,
      message: "cart created successfully",
      data: { cart },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getCartlist = async (req, res) => {
  try {
    const getlist = await cartService.getCartlist(req, res);
    if (!getlist) {
      throw new Error("cart list found");
    }
    res.status(200).json({
      success: true,
      message: "get cart list successfully",
      data: { getlist },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getCartDetails = async (req, res) => {
  try {
    const getDetails = await cartService.getCartById(req.params.cartId);
    if (!getDetails) {
      throw new Error("cart not found!");
    }

    res.status(200).json({
      success: true,
      message: "cart details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateDetails = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    const cartExists = await cartService.getCartById(cartId);
    if (!cartExists) {
      throw new Error("cart not found!");
    }

    await cartService.updateDetails(cartId, req.body);

    res
      .status(200)
      .json({ success: true, message: "cart details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteCartById = async (req, res) => {
  try {
    const cartId = req.params.cartId;
    if (!cartId) {
      throw new Error("cart not found !");
    }
    await cartService.deleteCartById(cartId);
    res.status(200).json({
      success: true,
      message: "cart delete successfuly !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createCart,
  getCartlist,
  getCartDetails,
  updateDetails,
  deleteCartById,
};
