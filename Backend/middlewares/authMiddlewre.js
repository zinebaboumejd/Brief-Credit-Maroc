const jwt=require('jsonwebtoken');
const asyncHandler=require('express-async-handler');
const User=require('.././bank/Auth/models/authModel');

const protect=asyncHandler(async(req,res,next)=>{
    let token;
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(' ')[1];
            const decoded=jwt.verify(token,process.env.JWT_SECRET);
            req.user=await User.findById(decoded.id).select('-password');
            next();
        }catch(error){
            console.error(error);
            res.status(401);
            throw new Error('Not authorized,token failed');
        }
    }
    if(!token){
        res.status(401);
        throw new Error('Not authorized,no token');
    }
}
);

const role=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            res.status(401);
            throw new Error(`User role ${req.user.role} is not authorized to access this route`);
        }
        next();
    }
    

}
module.exports={protect,role};