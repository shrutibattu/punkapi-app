import React from "react";
const SearchBar = (props) => {
  const updateSearch = props.handleSearch;

  return (
    <div>
      <input type="text" placeholder="search here..." onBlur={updateSearch} />
    </div>
  );
};

export default SearchBar;
