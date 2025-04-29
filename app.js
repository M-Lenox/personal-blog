import express from "express";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const articles = [
    {
      id: 234,
      title: "test title",
      date: new Date(),
    },
  ];
  res.render("home", { articles });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
