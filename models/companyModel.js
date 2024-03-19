const mongoose = require("mongoose");

// Define the schema for the company
const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    postal_code: String,
  },
  contact: {
    phone: String,
    email: String,
  },
  category: String,
});

// Create a model using the schema
const Company = mongoose.model("Company", companySchema);

module.exports = Company;
