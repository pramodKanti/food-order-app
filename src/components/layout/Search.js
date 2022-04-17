import React, { useRef, useState, useEffect } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {

  const serachChangeHandler = (e) => {
    console.log(e.target.value)
  }

  return (
    <section className="search">
      <div className="search-input">
        <input type="text" onChange={serachChangeHandler} />
        <button>Search</button>
      </div>
    </section>
  );
});

export default Search;
