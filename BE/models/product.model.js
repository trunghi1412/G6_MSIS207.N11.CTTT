const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    image: { type: Array, required: true },
    
    category: {
      type: ObjectId,
      ref: "categories",
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    Quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
