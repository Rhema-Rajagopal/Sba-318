const express = require("express");
const router = express.Router();

let comments = [
  { id: 1, postId: 1, body: "Comment 1 on post 1" },
  { id: 2, postId: 1, body: "Comment 2 on post 1" },
  { id: 3, postId: 2, body: "Comment 1 on post 2" },
];

// Get all comments
router.get("/", (req, res) => {
  res.json(comments);
});

// Create a new comment
router.post("/", (req, res) => {
  const newComment = req.body;
  // Generate a new unique ID (You can use libraries like 'uuid' for production)
  newComment.id = comments.length + 1;
  comments.push(newComment);
  res.status(201).json(newComment);
});

// Get a comment by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ message: "Comment not found" });
  }
});

module.exports = router;
