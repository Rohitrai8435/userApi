const mongoose = require("mongoose");

// Define the schema for the outlet
const outletSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  companies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company", // Reference to the Company model
    },
  ],
});

// Create a model using the schema
const Outlet = mongoose.model("Outlet", outletSchema);

module.exports = Outlet;
