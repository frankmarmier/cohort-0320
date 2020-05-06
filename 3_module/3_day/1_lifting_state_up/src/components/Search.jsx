import React from "react";

function Search({ clbk }) {
  return <input className="style-input" type="text" onChange={clbk} placeholder="Search..."/>;
}

export default Search;
