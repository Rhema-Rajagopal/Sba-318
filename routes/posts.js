const express = require("express");
const router = express.Router();

let posts = [
  { id: 1, userId: 1, title: "Post 1", body: "Body of post 1" },
  { id: 2, userId: 2, title: "Post 2", body: "Body of post 2" },
];

// Get all posts or filter by userId if provided in query parameters
router.get("/", (req, res) => {
  const { userId } = req.query;
  if (userId) {
    const filteredPosts = posts.filter(
      (post) => post.userId === parseInt(userId)
    );
    res.json(filteredPosts);
  } else {
    res.json(posts);
  }
});

// Create a new post
router.post("/", (req, res) => {
  const newPost = req.body;
  // Generate a new unique ID (You can use libraries like 'uuid' for production)
  newPost.id = posts.length + 1;
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Get a post by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

module.exports = router;
