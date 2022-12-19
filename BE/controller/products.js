const productModel = require("../models/product.model");
const fs = require("fs");
const path = require("path");

class Product {
  // Delete Image from uploads -> products folder
  static deleteImages(image, mode) {
    var basePath =
      path.resolve(__dirname + "../../") + "/public/uploads/products/";
    console.log(basePath);
    for (var i = 0; i < image.length; i++) {
      let filePath = "";
      if (mode == "file") {
        filePath = basePath + `${image[i].filename}`;
      } else {
        filePath = basePath + `${image[i]}`;
      }
      console.log(filePath);
      if (fs.existsSync(filePath)) {
        console.log("Exists image");
      }
      fs.unlink(filePath, (err) => {
        if (err) {
          return err;
        }
      });
    }
  }

  async getAllProduct(req, res) {
    try {
      let Products = await productModel
        .find({})
        .populate("category", "_id name")
        .sort({ _id: -1 });
      if (Products) {
        return res.json({ Products });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async postAddProduct(req, res) {
    let { name, category, price, Quantity, status } =
      req.body;
    let image = req.files;
    // Validation
    if (
      !name |
      !category |
      !price |
      !Quantity |
      !status
    ) {
      Product.deleteImages(image, "file");
      return res.json({ error: "All filled must be required" });
    }
    // Validate Name
    else if (name.length > 255) {
      Product.deleteImages(image, "file");
      return res.json({
        error: "Name 255 must not be 3000 charecter long",
      });
    }
    // Validate Image
    else if (image.length !== 2) {
      Product.deleteImages(image, "file");
      return res.json({ error: "Must need to provide 2 images" });
    } else {
      try {
        let allImages = [];
        for (const img of image) {
          allImages.push(img.filename);
        }
        let newProduct = new productModel({
          image: allImages,
          name,
          category,
          price,
          Quantity,
          status,
        });
        let save = await newProduct.save();
        if (save) {
          return res.json({ success: "Product created successfully" });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  async postEditProduct(req, res) {
    let {
      Id,
      name,
      image,
      category,
      price,
      Quantity,
      status,
    } = req.body;
    let editImages = req.files;

    // Validate other fileds
    if (
      !Id |
      !name |
      !image |
      !category |
      !price |
      !Quantity |
      !status
    ) {
      return res.json({ error: "All filled must be required" });
    }
    // Validate Name
    else if (name.length > 255) {
      return res.json({
        error: "Name 255 must not be 3000 charecter long",
      });
    }
    // Validate Update Images
    else if (editImages && editImages.length == 1) {
      Product.deleteImages(editImages, "file");
      return res.json({ error: "Must need to provide 2 images" });
    } else {
      let editData = {
        name,
        category,
        price,
        Quantity,
        status,
      };
      if (editImages.length == 2) {
        let allEditImages = [];
        for (const img of editImages) {
          allEditImages.push(img.filename);
        }
        editData = { ...editData, image: allEditImages };
        Product.deleteImages(image.split(","), "string");
      }
      try {
        let editProduct = productModel.findByIdAndUpdate(Id, editData);
        editProduct.exec((err) => {
          if (err) console.log(err);
          return res.json({ success: "Product edit successfully" });
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  async getDeleteProduct(req, res) {
    let { Id } = req.body;
    if (!Id) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let deleteProductObj = await productModel.findById(Id);
        let deleteProduct = await productModel.findByIdAndDelete(Id);
        if (deleteProduct) {
          // Delete Image from uploads -> products folder
          Product.deleteImages(deleteProductObj.pImages, "string");
          return res.json({ success: "Product deleted successfully" });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  async getSingleProduct(req, res) {
    let { Id } = req.body;
    if (!Id) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let singleProduct = await productModel
          .findById(Id)
          .populate("category", "name")
        if (singleProduct) {
          return res.json({ Product: singleProduct });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  /* async getProductByCategory(req, res) {
    let { catId } = req.body;
    if (!catId) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let products = await productModel
          .find({ pCategory: catId })
          .populate("pCategory", "cName");
        if (products) {
          return res.json({ Products: products });
        }
      } catch (err) {
        return res.json({ error: "Search product wrong" });
      }
    }
  } */

  async getProductByPrice(req, res) {
    let { price } = req.body;
    if (!price) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let products = await productModel
          .find({ price: { $lt: price } })
          .populate("category", "name")
          .sort({ price: -1 });
        if (products) {
          return res.json({ Products: products });
        }
      } catch (err) {
        return res.json({ error: "Filter product wrong" });
      }
    }
  }

  async getCartProduct(req, res) {
    let { productArray } = req.body;
    if (!productArray) {
      return res.json({ error: "All filled must be required" });
    } else {
      try {
        let cartProducts = await productModel.find({
          _id: { $in: productArray },
        });
        if (cartProducts) {
          return res.json({ Products: cartProducts });
        }
      } catch (err) {
        return res.json({ error: "Cart product wrong" });
      }
    }
  }
}

const productController = new Product();
module.exports = productController;
