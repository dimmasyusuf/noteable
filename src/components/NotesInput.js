import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      titleLength: 0,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      if (event.target.value.length <= 50) {
        return {
          title: event.target.value,
          titleLength: event.target.value.length,
        };
      } else {
        alert("Title must be less than 50 characters!");
        return {
          title: event.target.value,
        };
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        titleLength: 0,
      };
    });
  }

  render() {
    return (
      <form className="notes-input" onSubmit={this.onSubmitEventHandler}>
        <p className="character-limit">
          Character Left: {50 - this.state.titleLength}
        </p>
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          type="text"
          placeholder="Content"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type="submit">Add Notes</button>
      </form>
    );
  }
}

export default NotesInput;
