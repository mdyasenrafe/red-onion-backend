const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const port = process.env.PORT || 5000;

// fill call
const app = express();
const productRoute = require("./src/Routes/ProductRoute");

// middle wares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

console.log(process.env.DB_USER, process.env.DB_PASSWORD);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6mulb.mongodb.net/restaurent?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Mongodb connected....");
  })
  .catch((err) => console.log(err.message));

// route
app.use("/product", productRoute);

app.get("/", (req, res) => {
  res.send("This is Management server");
});

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Headers : Origin, Content-Type, Accept");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Undefined Route Implement
app.use((req, res, next) => {
  res
    .status(404)
    .json({ status: 404, error: true, message: "Not Found this route" });
});
app.listen(port, () => {
  console.log("sucessfully run by", port);
  ``;
});
