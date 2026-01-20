import userModel from "../models/userModel.js";

export const getUsersData = async (req, res) => {

    try {
        const {userId} = req.body;

        const user = await userModel.findById(userId);

        if(!user){
            return res.status(400).json({success:false,message:"User not found"});
        }

        return res.status(200).json({success:true,data:{
            name:user.name,
            email:user.email,
            isAccountVerified:user.isAccountVerified,
        }});

    }catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }
}