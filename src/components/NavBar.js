import React from "react";
import SearchBar from "./SearchBar";

function NavBar({ onSearch }) {
  return (
    <div className="nav-bar">
      <h1 className="logo">Noteable</h1>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default NavBar;
