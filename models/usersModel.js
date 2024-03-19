const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["admin", "customer", "staff"],
    default: "customer",
  },
  outlets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Outlet", // Reference to the Outlet model
    }
],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
