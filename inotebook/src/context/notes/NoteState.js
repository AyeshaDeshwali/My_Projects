import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  console.log("adding a new note");

  const notesInitial = [
    {
      _id: "6724f8c2f22d4d06bb5b8be80",
      user: "671cdbd370f134d341d30c29",
      title: "Hello",
      description: "I am Learning MERN",
      tag: "good person",
      date: "2024-11-01T15:50:26.516Z",
      __v: 0,
    },
    {
      _id: "672592244f117ce39c8e5968b",
      user: "671cdbd370f134d341d30c29",
      title: "Learn English",
      description: "English is a good language",
      tag: "happy",
      date: "2024-11-02T02:44:52.672Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial); // add note ==================================

  const addNote = (title, description, tag) => {
    // TODO : API call
    const note = {
      _id: "6724f8c2f224d106bb5b8be80",
      user: "671cdbd370f134d341d30c29",
      title: title,
      description: description,
      tag: "good..",
      date: "2024-11-01T15:50:26.516Z",
      __v: 0,
    };

    setNotes([...notes, note]);
  };

  // delete note ==========================================================
  const deleteNote = (id) => {
    console.log("deleteed............." + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  // edit note ================================================================

  const editNote = () => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
