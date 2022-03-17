const express = require("express");
const { getProducts } = require("../Controllers/ProductControllers");

const router = express.Router();

router.get("/getProduct", getProducts);

module.exports = router;
