import React from "react";
import "./SearchBar.css";
const SearchBar = (props) => {
  const updateSearch = props.handleSearch;

  return (
    <div className="searchbox">
      <input
        className="search-txt"
        type="text"
        placeholder="Search here..."
        onBlur={updateSearch}
      />
      <div>
        <select className="button">
          <option value="filter">Filter</option>
          <option value="malt">Malt</option>
          <option value="content">Alcohol Content</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
