const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    const { title, description } = req.body;

    let newNote = await NotesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "notes created successfully",
      data: newNote,
    });
  } catch (error) {
    console.log("error in creation", error);
    return res.status(500).json({
      message: "Error creating note",
      error: error.message,
    });
  }
};

const getAllNotesController = async (req, res) => {
  try {
    const allNotes = await NotesModel.find();
    res.status(200).json({
      message: "All notes fetched",
      data: allNotes,
    });
  } catch (error) {
    console.log("error in get notes api", error);
    return res.status(500).json({
      message: "Error fetching notes",
      error: error.message,
    });
  }
};

const getSingleNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let note = await NotesModel.findById(noteId);

    res.status(200).json({
      message: "Note fetched successfully",
      data: note,
    });
  } catch (error) {
    console.log("error in single notes api", error);
  }
};

const updatedNotesController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let body = req.body;

    let updatedNote = await NotesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });
    return res.status(200).json({
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "server internal error",
    });
  }
};

const deleteNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;
    await NotesModel.findByIdAndDelete(noteId);
    return res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const singleEntityUpdateController = async (req, res) => {
  try {
    let noteId = req.params.id
    let body = req.body

    let updatedNote = await NotesModel.findByIdAndUpdate(noteId, body,{new:true})
    return res.status(200).json({
      message:"Note updated successfully",
      data:updatedNote,
    })
  } catch (error) {
    return res.status(500).json({
      message:"Internal server error",
    })
  }
};

module.exports = {
  createNotesController,
  getAllNotesController,
  getSingleNotesController,
  updatedNotesController,
  deleteNoteController,
  singleEntityUpdateController
};
