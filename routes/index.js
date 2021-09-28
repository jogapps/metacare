const express = require("express");
const moment = require("moment");
const router = express.Router();

const movieRoute = require("./movies");
const commentRoute = require("./comments");

// console log every visited route
router.use((req, res, next) => {
    console.log(`${moment()}: ${req.originalUrl}`);
    next();
});

router.use("/", movieRoute);
router.use("/comments", commentRoute);

module.exports = router; 