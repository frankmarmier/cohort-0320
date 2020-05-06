import React from "react";

function FilterComponent({ clbk }) {
  //   console.log(clbk);

  function handleClick(teamType) {
    // console.log(teamType);
    clbk(teamType);
  }

  return (
    <React.Fragment>
      <button onClick={(event) => handleClick(null)} className="btn-filter">
        All
      </button>
      <button
        onClick={(event) => handleClick("honey-badger")}
        className="btn-filter"
      >
        honey badgers
      </button>
      <button onClick={(event) => handleClick("racoon")} className="btn-filter">
        racoons
      </button>
    </React.Fragment>
  );
}

export default FilterComponent;
