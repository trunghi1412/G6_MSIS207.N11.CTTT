const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    allProduct: [{ id: { type: mongoose.Schema.Types.ObjectId, ref: "products"}, quantity: Number}],
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    amount: { type: Number, required: true},
    address: { type: String, required: true},
    phone: { type: Number, required: true},
    status: { type: String, default: "Pending", enum: ["Pending", "shipping", "Shipped"]},
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
