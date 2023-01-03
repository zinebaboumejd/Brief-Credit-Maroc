const express = require("express"); 
const User=require('../../Auth/models/authModel');
const asyncHandler = require("express-async-handler");


// get client 
// @desc    Fetch all users
// @route   GET /api/users
// @access  Private/Admin
const GetClient= asyncHandler(async (req, res) => {
    const users = await User.find({role:"client"});
    res.json(users);
    });
    module.exports={
        GetClient
    }
    
