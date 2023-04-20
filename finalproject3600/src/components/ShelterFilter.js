import React, { useState } from "react";
import "../App.css";

function ShelterFilter({ setFilter }) {
  const [searchText, setSearchText] = useState(""); //variable(state) searchText, function setSearchText modifies the state. Initial state is ""

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleFilter = () => {
    setFilter(searchText);
  };

  const resetFilter = () => {
    setSearchText("");
    setFilter("");
  };

  //when user inputs is handleInputChange is called
  //when user clicks Search handleFilter is called
  return (
    <div className="shleter-filter">
      <input
        className="form-control" id="search"
        type="text"
        placeholder="Looking for something in particular?"
        onChange={handleInputChange}
        value={searchText}
        onKeyDown={(e) => {
          if (e.key === "Enter") {handleFilter()}
        }}
      />
      <button id="btn"className="btn btn-light" onClick={handleFilter}>
        Search
      </button>
      <button id="btn-reset"className="btn btn-light" onClick={resetFilter}>
        Reset
      </button>
    </div>
  );
}

export default ShelterFilter;
