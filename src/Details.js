import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { modeContext } from "./Context";

const Details = (props) => {
  const [link, setLink] = useState(
    props.location.state.n.story_url != null
      ? props.location.state.n.story_url
      : props.location.state.n.url
  );

  const [mode, setMode] = useContext(modeContext);

  return (
    <div className={mode}>
      <div className="container-fluid">
        <div className="nav">
          <Link
            to={{
              pathname: `/News`,
              state: props.location.state.searchQ,
            }}
          >
            <h6 className="prev">Go Back</h6>
          </Link>
        </div>
        <div className="content">
          <br />
          <h2 className="text-center">
            {props.location.state.n.title}
            {props.location.state.n.story_title}
          </h2>
          <br></br>
          <hr />
          <br />
          <div className="opac">
            <h3 className="text-center">
              The ID of this news is: {props.match.params.id}
            </h3>
            <p className="text-center container-fluid">
              Written by <b>{props.location.state.n.author}</b> created at{" "}
              {props.location.state.n.created_at}. With the ID{" "}
              {props.location.state.n.created_at_i}.
            </p>
            <br></br>
            <p className="text-center container-fluid">
              The number of comments in it are{" "}
              {props.location.state.n.num_comments} with the scored points{" "}
              {props.location.state.n.points}
              <br />
              <br />
              <br />
              You can find the entire article over here:
              <br />
              <a href={`${link}`} target="_blank" className="link">
                Check Here <span className="glyphicon glyphicon-link"></span>
              </a>
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Details;
