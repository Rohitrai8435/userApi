const mongoose=require("mongoose");
require("dotenv").config();
const userModel=require("../models/usersModel")


exports.connectDatabase=async ()=>{
    try {
      
        await mongoose.connect(process.env.MONGODB_URL);
        
        console.log("data base connected successfully")
       
    } catch (error) {
        console.log(error.message)
    }
}