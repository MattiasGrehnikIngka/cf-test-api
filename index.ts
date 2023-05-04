import express, { Express } from "express";
import dotenv from "dotenv";
import { entries } from "./src/entries/entries";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/test", entries);
// app.get("", (req, res) => res.send(401));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
