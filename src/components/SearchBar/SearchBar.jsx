import React from "react";
import "./SearchBar.css";
const SearchBar = (props) => {
  const updateSearch = props.handleSearch;
  const updateMaltFilter = props.handleMaltFilter;

  return (
    <div className="searchbox">
      <input
        className="search-txt"
        type="text"
        placeholder="Search here..."
        onBlur={(e) => {
          updateSearch(e.target.value);
        }}
      />
      <div>
        <select
          className="button"
          onBlur={(e) => {
            updateMaltFilter(e.target.value);
          }}
        >
          <option value="">Choose Malt Filter</option>
          <option value="Caramalt">Caramalt</option>
          <option value="Dark Crystal">Dark Crystal</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
