// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes?title=

import React from 'react';
import './Searchbar.css';

function Searchbar({setCafeDatas}) {
    
    const getCafes = (event) => {
    console.log("Getting cafes...");
    const keyword = event.currentTarget.value;
    const url = `https://rails-cafe-api-2025-3ad0102200c5.herokuapp.com/api/v1/cafes?title=${keyword}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        // cafeDatas = data;
        setCafeDatas(data);
      });
  };

  return (
    <div className="searchbar input-group">
      <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input onChange={getCafes} placeholder="Starbucks" type="text" className="form-control" />
    </div>
  );
}

export default Searchbar;