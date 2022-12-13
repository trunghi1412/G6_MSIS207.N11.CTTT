import express from "express";
import products from "./data/Products";
import users from "./data/users";
import Product from "./models/product.model";
import User from "./models/user.model";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

ImportData.post(
    "/user",
    asyncHandler(async (req, res) => {
        await User.remove({});
        const importUser = await User.insertMany(users);
        res.send({ importUser });
    })
);

ImportData.post(
    "/products",
    asyncHandler(async (req, res) => {
        await Product.remove({});
        const importProducts = await Product.insertMany(products);
        res.send({ importProducts });
    })
);

export default ImportData;
