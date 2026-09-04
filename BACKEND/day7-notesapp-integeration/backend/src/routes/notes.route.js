const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getSingleNotesController,
  updatedNotesController,
  deleteNoteController,
  singleEntityUpdateController,
} = require("../controllers/notes.controllers");

const router = express.Router();

//CREATE
router.post("/create", createNotesController);

//READ 
router.get("/allNotes", getAllNotesController);

//READ ONE
router.get("/:id",getSingleNotesController);

//UPDATED VIA PUT
router.put("/:id",updatedNotesController)

//UPDATED VIA PATCH
router.patch("/:id/single",singleEntityUpdateController)

//DELETE 
router.delete("/:id", deleteNoteController);



module.exports = router;
