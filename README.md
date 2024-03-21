"# Sba-318"

This is a server application with Node and Express.

Created a RESTful Api using Express and used middleware for error handling. Added a template engine to render views with Express.

Users: Allows you to create new users, retrieve a list of users, get a user by ID, update a user, or delete a user.

GET /users: Retrieve a list of all users.
POST /users: Create a new user.
GET /users/:id: Get a user by ID.
PUT /users/:id: Update a user by ID.
DELETE /users/:id: Delete a user by ID.
Posts: Manages posts, including creating new posts and retrieving a list of posts.

GET /posts: Retrieve a list of all posts.
POST /posts: Create a new post.
Comments: Allows you to manage comments on posts, including creating new comments.

GET /comments: Retrieve a list of all comments.
POST /comments: Create a new comment.

Dependencies
Express.js: Minimalist web framework for Node.js.
EJS: Embedded JavaScript templates for rendering views.
Body-parser: Middleware to parse incoming request bodies.
Nodemon (development dependency): Automatically restarts the server when changes are detected.

Thanks!
