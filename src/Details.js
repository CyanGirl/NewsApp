import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Details = (props) => {
  return (
    <div className="container-fluid">
      <br />
      <br />
      <Link
        to={{
          pathname: `/News`,
          state: props.location.state.searchQ,
        }}
      >
        <h4 className="prev">Go Back</h4>
      </Link>
      <br />
      <h2 className="text-center">{props.location.state.n.title}</h2>
      <br></br>
      <br />

      <h3 className="text-center">
        The ID of this news is: {props.match.params.id}
      </h3>
      <p className="text-center">
        Written by <b>{props.location.state.n.author}</b> created at{" "}
        {props.location.state.n.created_at}. With the ID{" "}
        {props.location.state.n.created_at_i}.
      </p>
      <br></br>
      <p className="text-center">
        The number of comments in it are {props.location.state.num_comments}{" "}
        with the scored points {props.location.state.points}
        <br />
        <br />
        <br />
        You can find the entire article over here:
        <br />
        {props.location.state.url}
      </p>
      <Footer />
    </div>
  );
};
export default Details;
