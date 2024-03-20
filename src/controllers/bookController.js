import book from "../models/books.js";

class BookController {

  static async getBooks(req, res) {
    try {
      const books = await book.find({});
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createBook(req, res) {
    try {
      const newBook = await book.create(req.body);
      res.status(201).json({
        message: "Created successfully",
        book: newBook,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getBookByID(req, res) {
    try {
      const id = req.params.id;
      const bookFound = await book.findById(id);

      if (bookFound) {
        res.status(200).json(bookFound);
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      const updatedBook = await book.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (updatedBook) {
        res.status(200).json({
          message: "Updated successfully",
          book: updatedBook,
        });
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      const deletedBook = await book.findByIdAndDelete(id);
      if (deletedBook) {
        res.status(204).json({
          message: "Deleted successfully",
          book: deletedBook,
        });
      } else {
        res.status(404).json({ message: "Book not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default BookController;
