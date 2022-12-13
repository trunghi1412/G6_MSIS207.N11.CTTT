const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
  rating: {
      type: Number,
      required: true,
      default: 0,
  },
  comment: {
      type: String,
      required: true,
  },
  user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
  },
});

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    image: { type: String, required: true },

    price: {
      type: Number,
      required: true,
      default: 0,
    },
    quantity: {
      type: Number,
    },

    countInStock: {
      type: Number,
      required: true,
      default: 0,
  },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports =Product;
