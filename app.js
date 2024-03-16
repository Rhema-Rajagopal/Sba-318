const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log request information
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware function
};

app.use(requestLogger);

// Routes for users
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

// Routes for posts
const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

// Routes for comments
const commentsRouter = require("./routes/comments");
app.use("/comments", commentsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
