const { Schema, model } = require("mongoose");

const burgersSchema = Schema(
  {
    title: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    descr: {
      type: String,
    },
    rating: {
      type: String,
    },
    price: {
      type: String,
    },
    weight: {
      type: String,
    },
    comment: {
      type: Array,
    },
  },
  {
    versionKay: false,
    timestamps: true,
  }
);

const Burgers = model("burgers", burgersSchema);

module.exports = Burgers;
