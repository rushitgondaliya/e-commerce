const express = require("express");

const userRoute = require("./user.route.js");
const tokenRoute = require("./token.route.js");
const blogRoute = require("./blog.route.js");

const router = express.Router();

router.use("/user", userRoute);
router.use("/token", tokenRoute);
router.use("/blog", blogRoute);

module.exports = router;
