import React, { useContext } from "react";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import noteContext from "../context/notes/noteContext";

const Notes = () => {
  const { notes } = useContext(noteContext);

  return (
    <>
      <AddNote />
      <div className="container mt-4">
        <h2>Your Notes</h2>
        <div className="row">
          {notes.map((note) => (
            <Noteitem key={note._id} note={note} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
