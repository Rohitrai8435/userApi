const express = require("express");
const {
  allcompanies,
  addcompany,
  updatecompany,
  singlecompany,
  deletesinglecompany,
} = require("../controllers/companyControllers");
const router = express.Router();

router.get("/companies", allcompanies);
router.post("/company/add", addcompany);
router.put("/company/edite/:id", updatecompany);
router.get("/company/:id", singlecompany);
router.delete("/company/:id", deletesinglecompany);

module.exports = router;
