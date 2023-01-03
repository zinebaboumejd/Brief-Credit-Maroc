const jwt=require('jsonwebtoken');
const asyncHandler=require('express-async-handler');
const Persone=require('../models/authModel');

const protect=asyncHandler(async(req,res,next)=>{
let token;
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') ){
    try{
        //create token
        token=req.headers.authorization.split(' ')[1];
       //verify token
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
       // Get user by id
        req.persone=await Persone.findById(decoded.id).select('-password');
        next();
    }catch(error){
        console.error(error);
        res.status(401);
        throw new Error('Not authorized, token failed');
    }
}
if(!token){
    res.status(401);
    throw new Error('Not authorized, no token');
}

})


const rool = (req, res, next) => {
    try{
        const {rool} = req.persone;
        console.log(req.persone)
        if(!rool) return res.json({message: "forbidden"});
    }
    catch(ex) {
        res.json(ex.message)
    }

    next();
}

module.exports = {protect,rool};