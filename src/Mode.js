import React from "react";
import { Component, useState, useEffect, useContext } from "react";
import "./style.css";
import { modeContext } from "./Context";

const Theme = () => {
  const [mode, setMode] = useContext(modeContext);
  const handleBox = (e) => {
    if (e.target.checked == false) {
      setMode(() => "light");
    } else {
      setMode(() => "dark");
    }
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={handleBox} check={mode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Theme;
