const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

// ROUTE 1: Fetch All Data   using GET "/api/auth/fetchallnotes"...................................................................
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }); // Corrected Note to singular
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Create data using : POST "/api/auth/addnotes" ...................................................................

router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        // Changed variable name to 'note'
        title,
        description,
        tag,
        user: req.user.id,
      });

      const savedNote = await note.save(); // This was previously `notes.save()`
      res.json(savedNote);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: Update data using : PUT "/api/auth/updatenote" ...................................................................

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    const note = Note.findById(req.params.id);
    if (!note) {
      res.status(400).send("Note Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Note Allowede");
    }

    note = await Note.findByIdUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 4: Delete data using : DELETE "/api/auth/deletenote" ...................................................................

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
