const productModel = require("../models/productModel");

const allproducts = async (req, res, next) => {
  const products = await productModel.find();
  res.json(products);
};
const addproduct = async (req, res, next) => {
  const product = req.body;
  const products = await productModel.create(product);
  res.send({
    message: "product added successfully",
  });
};
const singleproduct = async (req, res, next) => {
  const product = await productModel.findById(req.params.id);
  res.json({ product });
};
const deletesingleproduct = async (req, res, next) => {
  const product = await productModel.findOneAndDelete(req.params.id);
  res.send({
    message: "product deleted successfully",
  });
};
const singleproductpopulate = async (req, res, next) => {
  const product = await productModel.findById(req.params.id).populate({
    path: "users",
    populate: {
      path: "outlets",
      model: "Outlet", // The name of the Outlet model
    },
  });
  res.json({ product });
};
const updateproduct = async (req, res, next) => {
  const productdata = req.body;
  const user = await productModel.findByIdAndUpdate(req.params.id, productdata);

  res.send({
    message: "product updated successfully",
  });
};

module.exports = {
  allproducts,
  addproduct,
  updateproduct,
  singleproduct,
  deletesingleproduct,
  singleproductpopulate,
};
