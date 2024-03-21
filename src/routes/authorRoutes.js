import express from "express";
import authorController from "../controllers/authorController.js";

const router = express.Router();

router.get("/authors", authorController.getAuthors);
router.post("/authors", authorController.createAuthor);
router.get("/authors/:id", authorController.getAuthorByID);
router.put("/authors/:id", authorController.updateAuthor);
router.delete("/authors/:id", authorController.deleteAuthor);


export default router;
