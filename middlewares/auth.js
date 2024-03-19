const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.send({ status: false, message: "Please Login" });
  }
  const { id } = await jwt.verify(token, process.env.JWT_SECRET);
  req.id = id;
  next();
};
