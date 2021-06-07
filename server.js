import express from "express";
import { resolveSoa } from "node:dns";

const app = express();
app.get("/", (req, res) => res.send("hello world"));
//res.render("./index.html"));

const server = app.listen(3000, () => console.log("express running...."));
