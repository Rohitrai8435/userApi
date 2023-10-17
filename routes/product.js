const express=require("express");
const { getAllProducts, getAllProductstesting } = require("../controllers/product");
const router =express.Router();
router.get('/',getAllProducts);
router.get('/allusers',getAllProductstesting);

module.exports= router;