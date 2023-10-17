const express=require("express");

const app=express();
const product_routes=require("./routes/product")
const port=process.env.PORT ||3000;
const {connectDatabase}=require("./db/connectdb").connectDatabase();

app.get('/',(req,res,next)=>{
    res.send("hello this home page")
})
app.use('/users',product_routes);


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})