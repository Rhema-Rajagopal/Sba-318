const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

const userRouter = require("./routes/users");

app.use("/users", userRouter);

const port = 3000;
const bodyParser = require("body-parser");
// app.use(logger);
// app.get("/", logger, (req, res) => {
//   console.log("here");
//   res.send("hi");
//   // res.render("index", { text: "world" });
// });

//BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// app.get("/new", (req, res) => {
//   res.render("users/new");
// });
// app.post("/", (req, res) => {
//   res.send("Create User");
// });

// Middleware to log request information
const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware function
};

app.use(requestLogger);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

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
