const userModel = require("../Models/UserModel");

exports.PostUser = async (req, res) => {
  userModel.create(req.body, (err, data) => {
    if (err) {
      res.staus(400).json({
        error: true,
        message: err,
      });
    } else {
      res.staus(200).json({
        error: false,
        data: data,
        message: "create successfully",
      });
    }
  });
};
exports.GetUser = async (req, res) => {
  userModel.findOne(
    { id: req.body._id, email: req.body.email },
    (err, data) => {
      if (err) {
        res.staus(400).json({
          error: true,
          message: err,
        });
      } else {
        res.staus(200).json({
          error: false,
          data: data,
          message: "data fetch successfully",
        });
      }
    }
  );
};
