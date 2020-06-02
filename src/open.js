import React from "react";
import { Link } from "react-router-dom";
import { Component, useState, useEffect } from "react";
import "./style.css";

const Open = () => {
  const [searchQ, setSearchQ] = useState("React");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQ(e.target.value);
  };

  const newsForm = () => {
    return (
      <div>
        <form>
          <input type="text" value={searchQ} onChange={handleChange}></input>
          <br />
          <br />
        </form>
      </div>
    );
  };
  return (
    <div className="first">
      <br />
      <br />
      <h2 className="text-center heading">News in Trend!</h2>
      <br />
      <br />
      {newsForm()}
      <Link to={{ pathname: "/News", state: searchQ }}>
        <h3 className="text-center search">Search</h3>
      </Link>
    </div>
  );
};
export default Open;
