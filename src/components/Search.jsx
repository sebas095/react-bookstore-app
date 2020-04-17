import React from "react";

const Search = ({ onSearch }) => {
  const onChangeEvent = (ev) => {
    const query = ev.target.value.toString().toLowerCase().trim();
    onSearch(query);
  };

  return <input type="text" onChange={onChangeEvent} />;
};

export default Search;
