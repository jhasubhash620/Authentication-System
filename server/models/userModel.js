import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    verifyOtp:{
        type:String,
        default:null,
    },
    verifyOtpExpiry:{
        type:Number,
        default:null,
    },
    isAccountVerified:{
        type:Boolean,
        default:false,
    },
    resetotp:{
        type:String,
        default:null,
    },
    resetotpExpiry:{
        type:Number,
        default:null,
    },
});

const userModel = mongoose.models.user ||mongoose.model('user', userSchema);
export default userModel;