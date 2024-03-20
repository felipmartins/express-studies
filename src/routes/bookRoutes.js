import express from 'express';
import bookController from '../controllers/bookController.js';
import book from '../models/books.js';

const router = express.Router();

router.get('/books', bookController.getBooks);
router.post('/books', bookController.createBook);
router.get('/books/:id', bookController.getBookByID);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

export default router;