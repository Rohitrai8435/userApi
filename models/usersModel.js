const mongoose=require("mongoose");
 const productSchema=new mongoose.Schema({
    name:String,
    email:String,
    mobile:Number,
    age:Number

 });
 module.exports=mongoose.model("Product",productSchema)