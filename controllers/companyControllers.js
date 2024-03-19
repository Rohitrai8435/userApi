const companyModel = require("../models/companyModel");

const allcompanies = async (req, res, next) => {
  const companies = await companyModel.find();
  res.json(companies);
};
const addcompany = async (req, res, next) => {
  const company = req.body;
  const createdcompanies = await companyModel.create(company);
  res.send({
    message: "company added successfully",
  });
};
const singlecompany = async (req, res, next) => {
  const company = await companyModel.findById(req.params.id);
  res.json({ company });
};
const deletesinglecompany = async (req, res, next) => {
  const deletedcompany = await companyModel.findOneAndDelete(req.params.id);
  res.send({
    message: "company deleted successfully",
  });
};
const updatecompany = async (req, res, next) => {
  const companydata = req.body;
  const updatedcompany = await companyModel.findByIdAndUpdate(
    req.params.id,
    companydata
  );

  res.send({
    message: "company updated successfully",
  });
};

module.exports = {
  allcompanies,
  addcompany,
  updatecompany,
  singlecompany,
  deletesinglecompany,
};
