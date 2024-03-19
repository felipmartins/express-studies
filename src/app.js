import express from "express";
import databaseConnection from "./config/db.js";
import book from "./models/books.js";


const connection = await databaseConnection();

connection.on("error", (err) => {
    console.error("Connection error", err);
});

connection.once("open", () => {
    console.log("Connection to database stablished");
});

const app = express();
app.use(express.json())

// const books = [{
//     "id": 1,
//     "title": "LOTR"
// },
// {
//     "id": 2,
//     "title": "HP"
// },];

// function searchBook(id) {
//     return books.findIndex(book => {
//         return book.id === Number(id);
//     });
// };

async function findByName(name) {
    return await book.find({title: name});
};

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/books", async (req, res) => {
    const books = await book.find({});
    res.status(200).json(books);
});

app.get("/books/:id", async (req, res) => {
    const book = await book.find({id: req.params.id});
    res.status(200).json(book);
});

app.post("/books", (req, res) => {
    book.create(req.body).then((book) => {
        res.status(201).json(book);
    }).catch((err) => {
        res.status(500).send("Error: " + err);
    });
});

app.put("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books[index].title = req.body.title;
    res.status(200).send(books[index])
});

app.delete("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    books.splice(index, 1);
    res.status(204).send("Deleted");
});

export default app;