import React from "react";

const Details = (props) => {
  return (
    <div className="container-fluid">
      <br />
      <br />
      <h2 className="text-center">{props.location.state.title}</h2>
      <br></br>
      <br />
      <h3 className="text-center">
        The ID of this news is: {props.match.params.id}
      </h3>
      <p className="text-center">
        Written by <b>{props.location.state.author}</b> created at{" "}
        {props.location.state.created_at}. With the ID{" "}
        {props.location.state.created_at_i}.
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
    </div>
  );
};
export default Details;
