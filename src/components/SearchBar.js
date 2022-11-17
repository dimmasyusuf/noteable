import React from "react";

function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <div className="search-icon">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <input
        className="search-input"
        type="text"
        placeholder="Search notes.."
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
