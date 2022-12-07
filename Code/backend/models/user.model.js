const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: false, unique: true },

    password: { type: String, required: true },

    userRole: { type: Number, required: true },

    phone: { type: Number },

    secretKey: { type: String, default: null },

    isAdmin: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("UserModel", userSchema);
module.exports = UserModel;
