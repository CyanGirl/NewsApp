import React from "react";
import { Component, useState, useEffect, useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { modeContext } from "./Context";

const News = (props) => {
  //state
  const [news, setNews] = useState([]);
  const [searchQ, setSearchQ] = useState(props.location.state);
  const [url, setUrl] = useState(
    `https://hn.algolia.com/api/v1/search?query=${searchQ}`
  );
  const [load, setLoad] = useState(false);

  const [mode, setMode] = useContext(modeContext);
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
      <div key={i} className="news">
        <Link to={{ pathname: `/News/${n.objectID}`, state: { n, searchQ } }}>
          <p id="links">
            <span class="glyphicon glyphicon-link"></span>
            <u>
              {n.title}
              {n.story_title}
            </u>
          </p>
        </Link>
        <p>Wriiten By {n.author}</p>
        <br />
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
          <br />
          <br />

          {newsList()}
        </div>
      );
    }
    return msg;
  };
  //finally the rendering section
  return (
    <div className={mode}>
      <div className="container-fluid">
        <div className="nav">
          <Link to={{ pathname: "/" }}>
            <h6 className="prev">
              <span class="glyphicon glyphicon-search"></span> Search Again
            </h6>
          </Link>
        </div>
        <div className="content">
          <br />
          <h1 className="text-center text-uppercase">About {searchQ}</h1>
          <br></br>
          {loading()}
          <div className="opac">{check()}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default News;
