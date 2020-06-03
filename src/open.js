import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Component, useState, useEffect } from "react";
import "./style.css";
import Footer from "./footer";

const Open = () => {
  const [searchQ, setSearchQ] = useState("");
  let history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQ(e.target.value);
  };

  const location = { pathname: "/News", state: searchQ };

  const check = (e) => {
    e.preventDefault();
    if (searchQ.length > 0) {
      history.replace(location);
    }
  };

  const newsForm = () => {
    return (
      <div>
        <form onSubmit={check}>
          <input
            type="text"
            value={searchQ}
            onChange={handleChange}
            placeholder="Topic?"
            required
          ></input>
          <br />
          <br />
          <button onClick={check} className="text-center search">
            Search
          </button>
        </form>
      </div>
    );
  };
  return (
    <div className="first text-center">
      <br />
      <br />
      <h2 className="text-center heading">News in Trend!</h2>
      {newsForm()}
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
};
export default Open;
