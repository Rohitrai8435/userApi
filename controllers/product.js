const userModel=require("../models/usersModel")


const getAllProducts=async(req,res,next)=>{
    const queryObject={};
    const {eamil,name,sort}=req.query;
    const userData=await userModel.find(req.query).sort("-age")
    
    res.status(200).json({userData})
}
const getAllProductstesting=async(req,res,next)=>{
    res.status(200).json({message:"getAllproductestesting"})
}

module.exports={getAllProducts,getAllProductstesting};