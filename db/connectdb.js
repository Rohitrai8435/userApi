const mongoose=require("mongoose");
require("dotenv").config();
const userModel=require("../models/usersModel")
const users=require("../users.json")

exports.connectDatabase=async ()=>{
    try {
      
        await mongoose.connect(process.env.MONGODB_URL);
        await userModel.create(users);
        console.log("data base connected successfully")
        console.log("data uploaded successfully")
    } catch (error) {
        console.log(error.message)
    }
}