import React from "react";

function SearchBar(props) {
  return (
    <form>
      <div className="input-wrapper">
        <input
          type="text"
          onChange={props.onInputSearchData}
          value={props.searchData}
          className="search"
          name="search"
          placeholder="Search by name, email or company"
        />
        {props.children}
      </div>
    </form>
  );
}

export default SearchBar;
