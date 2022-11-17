import React from "react";
import { showFormattedDate } from "../utils/data";

function NotesItem({
  title,
  createdAt,
  body,
  id,
  archived,
  onArchive,
  onDelete,
}) {
  if (archived === true) {
    return (
      <div className="notes-item">
        <h3 className="notes-title">{title}</h3>
        <p className="notes-date">{showFormattedDate(createdAt)}</p>
        <p className="notes-body">{body}</p>
        <div className="notes-button">
          <button className="unarchive-button" onClick={() => onArchive(id)}>
            <i class="fa-solid fa-rotate-left"></i>
          </button>
          <button className="delete-button" onClick={() => onDelete(id)}>
            <i class="fa-solid fa-delete-left"></i>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="notes-item">
        <h3 className="notes-title">{title}</h3>
        <p className="notes-date">{showFormattedDate(createdAt)}</p>
        <p className="notes-body">{body}</p>
        <div className="notes-button">
          <button className="archive-button" onClick={() => onArchive(id)}>
            <i class="fa-solid fa-box-archive"></i>
          </button>
          <button className="delete-button" onClick={() => onDelete(id)}>
            <i class="fa-solid fa-delete-left"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default NotesItem;
