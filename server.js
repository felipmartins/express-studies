import app from "./src/app.js";
// import http from "http";

const PORT = 3000;

// const routes = {
//     "/": "Curso de Node.js",
//     "/books": "Books routes"
// };

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.end(routes[req.url]);
// });

app.listen(PORT, () => {
    console.log("servidor escutando!")
});