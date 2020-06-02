import React from "react";
import { Component, useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const News = () => {
  //state
  const [news, setNews] = useState([]);
  const [searchQ, setSearchQ] = useState("react");
  const [url, setUrl] = useState(
    "http://hn.algolia.com/api/v1/search?query=react"
  );
  const [load, setLoad] = useState(false);
  //from here our functions begin
  const fetchNews = () => {
    setLoad(true);
    fetch(url)
      .then((result) => result.json())
      .then((data) => (setNews(data.hits), setLoad(false)))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchNews();
  }, [url]);
  const searchQuery = (e) => {
    e.preventDefault();
    setSearchQ(e.target.value);
  };
  const submitF = (e) => {
    e.preventDefault(); //prevents from reloading onchnage
    setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQ}`);
  };
  const loading = () => {
    return load ? <h2>Loading.....</h2> : "";
  };
  const newsForm = () => {
    return (
      <div id="center">
        <form onSubmit={submitF}>
          <input type="text" value={searchQ} onChange={searchQuery}></input>
          <br />
          <br />
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    );
  };
  const newsList = () => {
    return news.map((n, i) => (
      <div key={i}>
        <Link to={{ pathname: `/News/${n.objectID}`, state: n }}>
          <p>{n.title}</p>
        </Link>
      </div>
    ));
  };
  const check = () => {
    const l = news.length;
    let msg = "";
    if (l <= 0 && load === false) {
      msg = <h2>Could not find anything</h2>;
    } else {
      msg = (
        <div>
          <h3>Take a look at what people saying:</h3>
          {newsList()}
        </div>
      );
    }
    return msg;
  };
  //finally the rendering section
  return (
    <div className="container-fluid">
      <h1>Trending News</h1>
      <br></br>
      {loading()}
      {newsForm()}
      {check()}
    </div>
  );
};

export default News;