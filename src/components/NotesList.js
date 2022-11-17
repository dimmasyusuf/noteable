import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onArchive, onDelete }) {
  if (notes.length === 0) {
    return <p className="notes-empty">No notes to show</p>;
  } else {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NotesItem
            key={note.id}
            id={note.id}
            onArchive={onArchive}
            onDelete={onDelete}
            {...note}
          />
        ))}
      </div>
    );
  }
}

export default NotesList;
