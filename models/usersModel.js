const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
   
  },
  email: {
    type: String,
    required: true,
    
  },
  password: {
    type: String,
    
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
