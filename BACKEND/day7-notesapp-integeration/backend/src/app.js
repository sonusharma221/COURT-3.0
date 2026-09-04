const express = require("express");
const cors = require("cors");
const NotesModel = require("./models/notes.model");
const connectDB = require("./config/db");
const notesRoute = require("./routes/notes.route");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("okey mai aagya hai");
});

app.use("/notes", notesRoute); //ye notes.controller ko link kar raha hai

module.exports = app;
