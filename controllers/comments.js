const Burgers = require("../models/comment");

async function getBurgers(req, res) {
  const burgers = await Burgers.find({});
  res.json(burgers);
}
async function getBurger(req, res) {
  const burger = await Burgers.findById(req.params.id);
  res.json(burger);
}

async function getComments(req, res, next) {
  const _id = req.params.id;

  const { comment } = await Burgers.findById(_id);
  res.status(201).json(comment);
}

async function addComent(req, res, next) {
  const _id = req.params.id;

  const result = await Burgers.findByIdAndUpdate(
    _id,
    { $push: { comment: req.body } },
    { new: true }
  );
  res.status(201).json(result);
}

module.exports = {
  getBurgers,
  getBurger,
  getComments,
  addComent,
};
