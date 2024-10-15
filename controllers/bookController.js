const Book = require('../models/bookModel');
const AppError = require('../utils/appError');

// Get all books with pagination, sorting, and filtering
exports.getAllBooks = async (req, res, next) => {
  try {
    // Filtering
    const queryObject = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObject[el]);

    let queryStr = JSON.stringify(queryObject);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    // Building query
    let query = Book.find(JSON.parse(queryStr));

    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('createdAt'); // Default sorting by creation date
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    // Execute query
    const books = await query;

    res.status(200).json({
      status: 'success',
      results: books.length,
      data: {
        books,
      },
    });
  } catch (err) {
    next(new AppError('Error fetching books', 500));
  }
};

// Get a single book by ID
exports.getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return next(new AppError('Book not found', 404));
    res.status(200).json(book);
  } catch (err) {
    next(new AppError('Error fetching book', 500));
  }
};

// Create a new book
exports.createBook = async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json(newBook);
  } catch (err) {
    next(new AppError('Error creating book', 400));
  }
};

// Update a book by ID
exports.updateBook = async (req, res, next) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedBook) return next(new AppError('Book not found', 404));
    res.status(200).json(updatedBook);
  } catch (err) {
    next(new AppError('Error updating book', 400));
  }
};

// Delete a book by ID
exports.deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return next(new AppError('Book not found', 404));
    res.status(204).json({ message: 'Book deleted' });
  } catch (err) {
    next(new AppError('Error deleting book', 500));
  }
};
