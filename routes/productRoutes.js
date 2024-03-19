const express = require("express");
const {
  allproducts,
  addproduct,
  updateproduct,
  singleproduct,
  deletesingleproduct,
  singleproductpopulate,
} = require("../controllers/productControllers");
const router = express.Router();

router.get("/products", allproducts);
router.post("/product/add", addproduct);
router.put("/product/edite/:id", updateproduct);
router.get("/product/:id", singleproduct);
router.get("/product/populateuser/:id", singleproductpopulate);
router.delete("/product/:id", deletesingleproduct);

module.exports = router;
