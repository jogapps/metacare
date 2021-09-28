const express = require("express");
const moment = require("moment");
const router = express.Router();

// console log every visited route
router.use((req, res, next) => {
    console.log(`${moment()}: ${req.originalUrl}`);
    next();
});