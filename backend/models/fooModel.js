const mongoose = require("mongoose");

const fooSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "text 1 Please add a text value"],
    },
    text2: {
      type: String,
      required: [true, "Text 2 Please add a text value "],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Foo", fooSchema);
