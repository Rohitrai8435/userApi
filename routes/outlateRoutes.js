const express = require("express");
const {
  alloutlates,
  addoutlate,
  updateoutlate,
  singleoutlate,
  deletesingleoutlate,
  singleoutlatepopulate,
} = require("../controllers/outlatesControllers");
const router = express.Router();

router.get("/outlates", alloutlates);
router.post("/outlate/add", addoutlate);
router.put("/outlate/edite/:id", updateoutlate);
router.get("/outlate/:id", singleoutlate);
router.get("/outlate/populatecompany/:id", singleoutlatepopulate);
router.delete("/outlate/:id", deletesingleoutlate);

module.exports = router;
