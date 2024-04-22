const express = require("express");
const {
  alluser,
  adduser,
  updateuser,
  deletesingleuser,
  loginuser,
  logoutuser,
  forgotPassword,
  resetPassword,
} = require("../controllers/userControllers");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/auth");

router.get("/users", alluser);
router.post("/user/register", adduser);
router.post("/user/login", loginuser);
router.post("/user/logout", isAuthenticated, logoutuser);
router.post("/user/forgot-password", forgotPassword);
router.post("/user/reset-password/:token", resetPassword);
router.put("/user/edite/:id", isAuthenticated, updateuser);
router.delete("/delete/:id", isAuthenticated, deletesingleuser);

module.exports = router;
