const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");
const orders = require("./routes/orders");
const stripe = require("./routes/stripe");
const productsRoute = require("./routes/products");
const userRoute = require("./routes/user");
const swaggerUi = require("swagger-ui-express")
const swaggerDocument = require("./api.json");

var bodyParser = require('body-parser')

// const products = require("./products");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors({ origin: "*" }));
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/orders", orders);
app.use("/api/stripe", stripe);
app.use("/api/products", productsRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

// app.get("/products", (req, res) => {
//   res.send(products);
// });

const uri = process.env.DB_URI;
const port = process.env.PORT || 5000;
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
