const express = require("express");
const router = express.Router();
const {
  getFoo,
  addFoo,
  updateFoo,
  deleteFoo,
} = require("../controllers/fooController.js");

router.route("/").get(getFoo).post(addFoo);

router.route("/:id").put(updateFoo).delete(deleteFoo);
module.exports = router;
