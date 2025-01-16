import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const jokes = [
  {
    id: 1,
    joke: "Why don’t skeletons fight each other? They don’t have the guts.",
  },
  {
    id: 2,
    joke: "What do you call cheese that isn't yours? Nacho cheese!",
  },
  {
    id: 3,
    joke: "Why couldn't the bicycle stand up by itself? It was two tired.",
  },
  {
    id: 4,
    joke: "Why do seagulls fly over the ocean? Because if they flew over the bay, they’d be bagels!",
  },
  {
    id: 5,
    joke: "What do you call fake spaghetti? An impasta!",
  },
];

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
