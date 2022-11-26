const express = require("express");
const app = express();
const cors = require("cors");
const UserModel = require("./user.model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Hieu1412:Hieu1412@figure-web.gb0coeu.mongodb.net/test"
);

app.post("/api/register", async (req, res) => {
  const newPassword = await bcrypt.hash(req.body.password, 10);
  console.log(req.body);
  try {
    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });
    user.save(function (err, cat) {
      if (err) {
        console.log("something Wrong");
      } else {
        console.log("we had done it!");
        console.log(cat);
      }
    });
    console.log("create succ");
    res.json({ status: "200", message: "ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "Duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  const { name, password } = req.body;

  const check = await UserModel.findOne({
    name: req.body.name,
  });
  let result = await bcrypt.compare(password, check.password);

  if (result) {
    res.json({ status: "ok", message: "Log in Succesfull !" });
    console.log("true");
  } else {
    res.json({ status: "Wrong Name or Password" });
    console.log("wrong");
  }
});
app.get("/api/get", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.listen("2000", () => console.log("Server started at port 2000"));
