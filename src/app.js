import express from "express";

const app = express();
app.use(express.json())

const books = [{
    "id": 1,
    "title": "LOTR"
},
{
    "id": 2,
    "title": "HP"
},];

function searchBook(id) {
    return books.findIndex(book => {
        return book.id === Number(id);
    });
};

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
    const index = searchBook(req.params.id);
    res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).json(books[books.length - 1]);
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