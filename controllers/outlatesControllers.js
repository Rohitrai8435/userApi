const outlateModel = require("../models/outlateModel");

const alloutlates = async (req, res, next) => {
  const outlates = await outlateModel.find();
  res.json(outlates);
};
const addoutlate = async (req, res, next) => {
  const outlate = req.body;
  const createdoutlates = await outlateModel.create(outlate);
  res.send({
    message: "outlate added successfully",
  });
};
const singleoutlate = async (req, res, next) => {
  const outlate = await outlateModel.findById(req.params.id);
  res.json({ outlate });
};
const deletesingleoutlate = async (req, res, next) => {
  const deletedoutlate = await outlateModel.findOneAndDelete(req.params.id);
  res.send({
    message: "outlate deleted successfully",
  });
};
const updateoutlate = async (req, res, next) => {
  const outlatedata = req.body;
  const updatedoutlate = await outlateModel.findByIdAndUpdate(
    req.params.id,
    outlatedata
  );

  res.send({
    message: "outlate updated successfully",
  });
};
const singleoutlatepopulate=async(req,res,next)=>{
  const outlate = await outlateModel
    .findById(req.params.id)
    .populate("companies");
    res.send(outlate);
}

module.exports = {
  alloutlates,
  addoutlate,
  updateoutlate,
  singleoutlate,
  deletesingleoutlate,
  singleoutlatepopulate,
};
