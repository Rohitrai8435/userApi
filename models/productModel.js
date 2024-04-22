const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  companies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company", // Reference to the Company model
    },
  ],
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
