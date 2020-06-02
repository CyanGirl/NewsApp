import React from "react";
import { Link } from "react-router-dom";
import { Component, useState, useEffect } from "react";

const Open = ({ history }) => {
  const [searchQ, setSearchQ] = useState("React");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQ(e.target.value);
  };

  const HandleSubmit = () => {
    history.push("/News");
  };

  const newsForm = () => {
    return (
      <div id="center">
        <form onSubmit={HandleSubmit}>
          <input type="text" value={searchQ} onChange={handleChange}></input>
          <br />
          <br />
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    );
  };
  return (
    <div>
      <h2>News in Trend!</h2>
      {newsForm()}
    </div>
  );
};
export default Open;
