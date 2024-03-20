import mongoose from "mongoose";
import { authorSchema } from "./authors.js";

const bookSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    title: { type: String, required: true },
    editorial: { type: String },
    price: { type: Number },
    numberOfPages: { type: Number },
    author: authorSchema,
  },
  { versionKey: false }
);

const book = mongoose.model("books", bookSchema);

export default book;
