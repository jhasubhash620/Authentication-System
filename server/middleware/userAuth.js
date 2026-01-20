import jwt from 'jsonwebtoken';


const userAuth = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({success:false, message: "Unauthorized: Login Again" });
    }

    try {
       const tokenDecode =  jwt.verify(token, process.env.JWT_SECRET);

       if(tokenDecode.userId){
        req.body.userId = tokenDecode.userId
       }
       else{
        return res.json({success:false,message : 'Not Authorized , Login Again'});
       }
       next();


    } catch (error) {
        res.json({success:false, message: "Invalid Token" });
    }
}

export default userAuth;