const {Order}=require("../models")

const createOrder=async(reqBody)=>{
    return Order.create(reqBody);
}

const getOrderlist=async(req,res)=>{
    return Order.find({$or:[{is_active:true}]}).populate("user").populate("product");
}

const getOrderById = async (orderId) => {
    return Order.findById(orderId);
  };

const updateDetails = async (orderId, updateBody) => {
    return Order.findByIdAndUpdate(orderId, { $set: updateBody });
  };

const deleteOrderById=async(orderId)=>{
    return Order.findByIdAndDelete(orderId)
}
module.exports={
    createOrder,
    getOrderlist,
    getOrderById,
    updateDetails,
    deleteOrderById
}