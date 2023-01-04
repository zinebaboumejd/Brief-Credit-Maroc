const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Transactionschema=new Schema({
    montant:{
        type:Number,
        required:true
    },
    // expediteur:{
    //     type:String,
    //     // required:true
    // },
    receveur:{
        type:String,
       
    },
    type:{
        type:String,
        required:true,
        enum:["envoi","retrait","depot"]
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

},
{
    timestamps:true
    })
    
module.exports=mongoose.model('Transaction',Transactionschema)