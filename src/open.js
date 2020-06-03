import React from "react";
import { Link } from "react-router-dom";
import { Component, useState, useEffect } from "react";
import "./style.css";
import Footer from "./footer";

const Open = () => {
  const [searchQ, setSearchQ] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQ(e.target.value);
  };

  const check = () => {
    if (searchQ.length > 0) {
      return (
        <Link to={{ pathname: "/News", state: searchQ }}>
          <h4 className="text-center search">Search</h4>
        </Link>
      );
    } else {
      return (
        <Link>
          <h4 className="text-center search">Tell Us</h4>
        </Link>
      );
    }
  };

  const newsForm = () => {
    return (
      <div>
        <form>
          <input
            type="text"
            value={searchQ}
            onChange={handleChange}
            placeholder="Want to know something?"
            required="true"
          ></input>
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

      {newsForm()}
      {check()}
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
};
export default Open;
