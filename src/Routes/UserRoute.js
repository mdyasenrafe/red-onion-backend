const express = require("express");
const { PostUser, GetUser } = require("../Controllers/UserControllers");
const router = express.Router();

router.post("/postUser", PostUser);
router.get("/getUser", GetUser);

module.exports = router;
