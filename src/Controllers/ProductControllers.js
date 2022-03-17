const ProductModel = require("../Models/ProductsModel");

exports.getProducts = async (req, res) => {
  ProductModel.find((err, data) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      res
        .status(200)
        .json({ error: false, data: data, message: "data fetch success" });
    }
  });
};
