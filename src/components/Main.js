import React from "react";
import NotesList from "./NotesList";

function Main({ notes, onArchive, onDelete }) {
  return (
    <div className="main">
      <h2>Active Notes</h2>
      <div className="active-notes">
        <NotesList
          notes={notes.filter((note) => !note.archived)}
          onArchive={onArchive}
          onDelete={onDelete}
        />
      </div>
      <h2>Archived Notes</h2>
      <div className="archived-notes">
        <NotesList
          notes={notes.filter((note) => note.archived)}
          onArchive={onArchive}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}

export default Main;
