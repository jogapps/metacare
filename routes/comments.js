const express = require("express");
const { addComment, getMovieComments } = require("../controllers/CommentController");

const router = express.Router();

router.post("/add", addComment);
router.get('/:id', getMovieComments);

module.exports = router; 