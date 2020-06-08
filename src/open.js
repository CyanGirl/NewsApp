import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Component, useState, useEffect, useContext } from "react";
import "./style.css";
import Footer from "./footer";
import { modeContext } from "./Context";
import Theme from "./Mode";

const Open = () => {
  const [searchQ, setSearchQ] = useState("");
  const [mode, setMode] = useContext(modeContext);
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
            <span className="glyphicon glyphicon-search"></span> Search
          </button>
        </form>
      </div>
    );
  };
  return (
    <div className={mode}>
      <div className=" text-center">
        <br />
        <div className="point">
          <Theme />
        </div>

        <br />
        <div className="first">
          <h2 className="text-center heading">News in Trend!</h2>
          <div className="imp">{newsForm()}</div>

          <br />
          <br />
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};
export default Open;
