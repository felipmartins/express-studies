import express from "express";
import databaseConnection from "./config/db.js";
import routes from "./routes/index.js";

const connection = await databaseConnection();

connection.on("error", (err) => {
  console.error("Connection error", err);
});

connection.once("open", () => {
  console.log("Connection to database stablished");
});

const app = express();
routes(app);

export default app;