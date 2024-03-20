import author from "../models/authors.js";

class AuthorController {

  static async getAuthors(req, res) {
    try {
      const authors = await author.find({});
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);
      res.status(201).json({
        message: "Created successfully",
        author: newAuthor,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getAuthorByID(req, res) {
    try {
      const id = req.params.id;
      const authorFound = await author.findById(id);

      if (authorFound) {
        res.status(200).json(authorFound);
      } else {
        res.status(404).json({ message: "Author not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      const updatedAuthor = await author.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (updatedAuthor) {
        res.status(200).json({
          message: "Updated successfully",
          author: updatedAuthor,
        });
      } else {
        res.status(404).json({ message: "Author not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      const deletedAuthor = await author.findByIdAndDelete(id);
      if (deletedAuthor) {
        res.status(204).json({
          message: "Deleted successfully",
          author: deletedAuthor,
        });
      } else {
        res.status(404).json({ message: "Author not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default AuthorController;
