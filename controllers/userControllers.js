const userModel = require("../models/usersModel");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const alluser = async (req, res, next) => {
  const users = await userModel.find();
  res.json(users);
};
const adduser = async (req, res, next) => {
  const { username, email, password, type } = req.body;
  console.log(req.body);
  const user = await userModel.findOne({ email });
  if (!user) {
    const hashpassword = await bcrypt.hash(password, 10);
    const createduser = await userModel.create({
      username,
      email,
      password: hashpassword,
      type,
      outlets,
    });
    await createduser.save();
    return res.json({
      status: true,
      message: "user registed succesfully",
      createduser,
    });
  }
  return res.json({ message: "user already existe" });
};
const deletesingleuser = async (req, res, next) => {
  const user = await userModel.findOneAndDelete(req.params.id);
  res.send({
    message: "user deleted successfully",
    user,
  });
};
const updateuser = async (req, res, next) => {
  const userdata = req.body;
  const user = await userModel.findByIdAndUpdate(req.params.id, userdata);
  res.send({
    message: "user updated successfully",
  });
};
const loginuser = async (req, res, next) => {
  const { email, password } = req.body;
  const createduser = await userModel.findOne({ email });
  if (!createduser) {
    return res.send({ message: "User Note exists" });
  }
  const validPassword = await bcrypt.compare(password, createduser.password);
  if (!validPassword) {
    return res.send({ message: "wrong password " });
  }
  const token = jwt.sign(
    { username: createduser.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
  return res.send({ status: true, message: "login succesfully" });
};
const logoutuser = async (req, res, next) => {
  res.clearCookie("token");
  res.send({ status: true, message: "user logout succesfully" });
};
const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.send({ message: "User Does not exists with email" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5m",
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rohit8435rai@gmail.com",
        pass: "zvxp slxn zxjj gjyk",
      },
    });

    const mailOptions = {
      from: "rohit8435rai@gmail.com",
      to: email,
      subject: "Reset Password",
      text: `http://localhost:4000/api/user/reset-password/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.send({ message: "error sending email" });
      } else {
        return res.send({ status: true, message: "email sent" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};
const resetPassword = async (req, res, next) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const id = decoded.id;
    const hashpassword = await bcrypt.hash(password, 10);
    const user = await userModel.findByIdAndUpdate(
      { _id: id },
      { password: hashpassword }
    );
    await user.save();
    return res.send({ status: true, message: "password Reset Successfully" });
  } catch (error) {
    return res.send({ message: "Link Has Expired" });
  }
};

module.exports = {
  adduser,
  updateuser,
  deletesingleuser,
  alluser,
  loginuser,
  logoutuser,
  forgotPassword,
  resetPassword,
};
