import React, { forwardRef } from "react";

const Search = forwardRef(({ onSearch }, ref) => {
  const onChangeEvent = (ev) => {
    const query = ev.target.value.toString().toLowerCase().trim();
    onSearch(query);
  };

  return <input type="text" ref={ref} onChange={onChangeEvent} />;
});

export default Search;
