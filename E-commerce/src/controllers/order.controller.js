const { orderService } = require("../services");

const createOrder = async (req, res) => {
  try {
    const reqBody = req.body;
    const order = await orderService.createOrder(reqBody);
    if (!order) {
      throw new Error("Error creating order");
    }
    res.status(200).json({
      success: true,
      message: "order created successfully",
      data: { order },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getOrderlist = async (req, res) => {
  try {
    const getlist = await orderService.getOrderlist(req, res);
    if (!getlist) {
      throw new Error("order list found");
    }
    res.status(200).json({
      success: true,
      message: "get order list successfully",
      data: { getlist },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const getDetails = await orderService.getOrderById(req.params.orderId);
    if (!getDetails) {
      throw new Error("order not found!");
    }

    res.status(200).json({
      success: true,
      message: "order details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateDetails = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderExists = await orderService.getOrderById(orderId);
    if (!orderExists) {
      throw new Error("order not found!");
    }

    await orderService.updateDetails(orderId, req.body);

    res
      .status(200)
      .json({ success: true, message: "order details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteOrderById = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    if (!orderId) {
      throw new Error("order not found !");
    }
    await orderService.deleteOrderById(orderId);
    res.status(200).json({
      success: true,
      message: "order delete successfuly !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getOrderlist,
  getOrderDetails,
  updateDetails,
  deleteOrderById,
};
