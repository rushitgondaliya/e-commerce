const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        trim:true
    },
    last_name:{
        type:String,
        trim:true
    },
    email:{
        type: String,
        trim:true
    },
    password:{
        type:String,
    },
    role: {
        type: String,
        enum: ['player', 'coach', 'admin'],
        default: 'player'
      },
    is_active:{
        type:Boolean,
        default:false
    }
},
{
    timestamps: true,
    versionKey:false
}
);

const user = mongoose.model("user", userSchema);
module.exports= user;
