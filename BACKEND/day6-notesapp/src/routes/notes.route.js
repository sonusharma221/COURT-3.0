const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNotesController,
  updatedNotesController,
  deleteNoteController,
} = require("../controllers/notes.controllers");

const router = express.Router();

//CREATE
router.post("/create", createNotesController);

//READ 
router.get("/allNotes", getAllNotesController);

//READ ONE
router.get("/:id",getSingleNotesController);

//UPDATED 
router.put("/:id",updatedNotesController)

//DELETE 
router.delete("/:id", deleteNoteController);



module.exports = router;
