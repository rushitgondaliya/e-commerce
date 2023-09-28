const express = require("express");
const {orderValidation}=require("../../validations");
const {orderController}=require("../../controllers");
const validate=require("../../middlewares/validate");

const router=express.Router();

router.post(
    "/create-order",
    validate(orderValidation.createOrder),
    orderController.createOrder
)

router.get(
    "/list",
    orderController.getOrderlist
)

router.get(
    "/get-details/:orderId",
    orderController.getOrderDetails
  );

  router.put(
    "/update-details/:orderId",
    orderController.updateDetails
  );

router.delete(
    "/delete-order/:orderId",
    orderController.deleteOrderById,
)

module.exports=router;