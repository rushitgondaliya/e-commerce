const mongoose=require("mongoose");

const cartSchema= new mongoose.Schema({
    total:{
        type:Number,
        trim:true
    },
    quantity:{
        type: Number,
        default:1
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"users"
    },
    product:{
        type:mongoose.Types.ObjectId,
        ref:'products'
    },
    order:{
        type:mongoose.Types.ObjectId,
        ref:"Order"
    },
    is_active: {
        type: Boolean,
         default: true,
      },
},
{
    timeseries:true,
    versionKey:false
}
);

const Cart = mongoose.model("cart",cartSchema)

module.exports=Cart;