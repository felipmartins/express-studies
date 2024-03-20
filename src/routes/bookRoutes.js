import express from 'express';
import bookController from '../controllers/bookController.js';

const router = express.Router();

router.get('/books', bookController.getBooks);
router.get('/books/search', bookController.getBooksByEditorial);
router.get('/books/:id', bookController.getBookByID);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);


export default router;