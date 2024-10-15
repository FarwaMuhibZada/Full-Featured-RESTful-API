# Full-Featured-RESTful-API🎡
# Books API 🧧

A **RESTful API** built with **Express.js** and **MongoDB** for managing a library of books. The API supports **CRUD** operations, **pagination**, **sorting**, **filtering**, and **error handling**. It also includes security features and can be easily extended with authentication and authorization.

## Features 🏆

- **Create, Read, Update, Delete** books in the database.
- **Advanced query options**: pagination, sorting, filtering.
- **Error handling**: Custom error classes and centralized error handling.
- **Security**: Basic security headers with `helmet` and CORS enabled.
- **Logging**: Request logging using `morgan`.
- **Database**: MongoDB integration via Mongoose.

## Technologies 📢

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express**: A fast and minimalist web framework for Node.js.
- **MongoDB Atlas**: A NoSQL database used to store the user data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## DEMO 📺
[Deployment Link](https://basic-nodejs-server-9nqsu5y09-farwamuhibzadas-projects.vercel.app/)

## Installation and Setup 🔌

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Full-Featured-RESTful-API.git
2. Install dependencies:

```bash
Copy code
cd Full-Featured-RESTful-API
npm install
```

Here’s the raw code for the README.md file:

markdown
Copy code
# Books API

A **RESTful API** built with **Express.js** and **MongoDB** for managing a library of books. The API supports **CRUD** operations, **pagination**, **sorting**, **filtering**, and **error handling**. It also includes security features and can be easily extended with authentication and authorization.

## Features

- **Create, Read, Update, Delete** books in the database.
- **Advanced query options**: pagination, sorting, filtering.
- **Error handling**: Custom error classes and centralized error handling.
- **Security**: Basic security headers with `helmet` and CORS enabled.
- **Logging**: Request logging using `morgan`.
- **Database**: MongoDB integration via Mongoose.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the API](#running-the-api)
- [API Endpoints](#api-endpoints)
- [Advanced Features](#advanced-features)
- [Error Handling](#error-handling)


## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
2. Install Dependencies
bash
Copy code
npm install
3. Set Up MongoDB
You need a MongoDB database connection. You can set up a local MongoDB instance or use MongoDB Atlas for a cloud-based solution.

4. Create a .env File
Create a .env file in the root directory to store sensitive information like your MongoDB URI.

Example .env file:

```bash
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
PORT=3000
NODE_ENV=development
Copy code
npm start
```
The server will run at http://localhost:3000.


## API Endpoints
### Book Resource
- GET /api/books - Fetch all books with pagination, sorting, and filtering.
- GET /api/books/:id - Fetch a single book by ID.
- POST /api/books - Add a new book.
- PUT /api/books/:id - Update a book by ID.
- DELETE /api/books/:id - Delete a book by ID.
Example Book Object
```bash
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedYear": 1925,
  "genre": "Fiction",
  "rating": 4.5
}

```
## Advanced Features
### 1. Pagination
Paginate through the book collection by adding page and limit query parameters:

Example: /api/books?page=1&limit=10
### 2. Sorting
Sort books by any field (e.g., publishedYear or rating). Use the sort query parameter:

Example: /api/books?sort=publishedYear
### 3. Filtering
Filter books by various fields like genre and rating. Use query parameters for filtering:

Example: /api/books?genre=Fiction&rating[gte]=4

The following comparison operators are supported in the query:

- gte: greater than or equal
- gt: greater than
- lte: less than or equal
- lt: less than
## 4. Error Handling
The API uses custom error handling with proper status codes and messages.

404 Not Found: Returned when a resource (e.g., book) is not found.
400 Bad Request: Returned for validation errors or malformed requests.
500 Internal Server Error: Returned for unexpected server errors.

## Security
- CORS: Enabled by default using the cors middleware.
- Helmet: Adds basic security headers.
- Sanitization: Ensures no malicious data is stored in the database.
## Logging
- Morgan: Logs all incoming requests in the console.

## Structure of project
```bash
Full-Featured-RESTful-API/
│
├── controllers/
│   └── bookController.js      # Contains all the book-related request handling logic
│
├── models/
│   └── bookModel.js           # Mongoose schema and model for the Book resource
│
├── routes/
│   └── bookRoutes.js          # Defines the routes for book-related operations
│
├── utils/
│   └── appError.js            # Custom error class for handling application-specific errors
│   └── catchAsync.js          # Utility function for handling async route errors
│
├── middlewares/
│   └── errorHandler.js        # Centralized error handling middleware
│
├── config/
│   └── db.js                  # MongoDB connection setup
│
├── .gitignore                 # Specifies files/folders to be ignored by Git
├── .env                       # Environment variables file (not included in Git)
├── package.json               # NPM dependencies and scripts
├── server.js                  # Main entry point for the Express app
├── README.md                  # Documentation for the project
└── LICENSE                    # License information (if applicable)
```

## Author

- **Farwa Muhibzada** - 

[GitHub Profile](https://github.com/FarwaMuhibZada)

[Linkdin](https://www.linkedin.com/in/farwamohibzada/)


### Contributing 🧑

Feel free to open issues or submit pull requests. Make sure to follow the project's code style and include tests for new features.
