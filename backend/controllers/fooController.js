const asyncHandler = require("express-async-handler");

const Foo = require("../models/fooModel.js");

// get
const getFoo = asyncHandler(async (req, res) => {
  const foo = await Foo.find();
  res.status(200).json({ message: "je suis dans le controllers" });
});

// add
const addFoo = asyncHandler(async (req, res) => {
  if (!req.body.text && !req.body.text2) {
    res.status(400);
    throw new Error("please add text field");
  }

  const foo = await Foo.create({
    text: req.body.text,
    text2: req.body.text2,
  });

  res.status(200).json(foo);
});

// update

const updateFoo = asyncHandler(async (req, res) => {
  //trouver le foo par ID
  const foo = await Foo.findById(req.params.id);

  // si je ne trouve pas de foo
  if (!foo) {
    res.status(404);
    throw new Error("foo not found");
  }

  const upFoo = await Foo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(upFoo);
});

//delete

const deleteFoo = asyncHandler(async (req, res) => {
  //trouver le foo par ID
  const foo = await Foo.findById(req.params.id);

  // si je ne trouve pas de foo
  if (!foo) {
    res.status(404);
    throw new Error("foo not found");
  }

  //suppression du foo
  await foo.remove();

  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getFoo,
  addFoo,
  updateFoo,
  deleteFoo,
};
