import React from "react";
import { getInitialData } from "../utils/data";
import NavBar from "./NavBar";
import NotesInput from "./NotesInput";
import Main from "./Main";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      unfilteredNotes: getInitialData(),
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: +new Date(),
            body,
            archived: false,
          },
        ],

        unfilteredNotes: [
          ...prevState.unfilteredNotes,
          {
            id: +new Date(),
            title,
            createdAt: +new Date(),
            body,
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      return {
        notes: prevState.notes.map((note) => {
          if (note.id === id) {
            return {
              ...note,
              archived: !note.archived,
            };
          } else {
            return note;
          }
        }),

        unfilteredNotes: prevState.unfilteredNotes.map((note) => {
          if (note.id === id) {
            return {
              ...note,
              archived: !note.archived,
            };
          } else {
            return note;
          }
        }),
      };
    });
  }

  onDeleteHandler(id) {
    const confirm = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (confirm) {
      this.setState((prevState) => {
        return {
          notes: prevState.notes.filter((note) => note.id !== id),
          unfilteredNotes: prevState.unfilteredNotes.filter(
            (note) => note.id !== id
          ),
        };
      });
    } else {
      return;
    }
  }

  onSearchHandler(keyword) {
    if (keyword.length > 0) {
      const undisplayedInput = document.getElementsByClassName("notes-input");
      undisplayedInput[0].style.display = "none";
      this.setState({
        notes: this.state.unfilteredNotes.filter((note) =>
          note.title.toLowerCase().includes(keyword.toLowerCase())
        ),
      });
    } else {
      const displayedInput = document.getElementsByClassName("notes-input");
      displayedInput[0].style.display = "flex";
      this.setState({
        notes: this.state.unfilteredNotes,
      });
    }
  }

  render() {
    return (
      <div className="notes-app">
        <NavBar onSearch={(searchText) => this.onSearchHandler(searchText)} />
        <NotesInput addNotes={this.onAddNotesHandler} />
        <Main
          notes={this.state.notes}
          onArchive={this.onArchiveHandler}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
