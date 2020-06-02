import React from "react";
import { Component, useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const News = (props) => {
  //state
  console.log(props);
  const [news, setNews] = useState([]);
  const [searchQ, setSearchQ] = useState(props.location.state);
  const [url, setUrl] = useState(
    `http://hn.algolia.com/api/v1/search?query=${searchQ}`
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

  const loading = () => {
    return load ? <h2>Loading.....</h2> : "";
  };

  const newsList = () => {
    return news.map((n, i) => (
      <div key={i}>
        <Link to={{ pathname: `/News/${n.objectID}`, state: n }}>
          <p id="links">{n.title}</p>
        </Link>
      </div>
    ));
  };

  const check = () => {
    const l = news.length;
    let msg = "";
    if (l <= 0 && load === false) {
      msg = (
        <h2 id="centre" className="text-center">
          OOPS! Could not find anything
        </h2>
      );
    } else {
      msg = (
        <div className="text-center">
          <h3>Take a look at what people are saying:</h3>
          <br />
          <hr />
          <br />

          {newsList()}
        </div>
      );
    }
    return msg;
  };
  //finally the rendering section
  return (
    <div className="container-fluid">
      <h1 className="text-center">About {searchQ}</h1>
      <br></br>
      {loading()}
      {check()}
    </div>
  );
};

export default News;
