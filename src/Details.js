import React from "react";

const Details = (props) => {
  return <h2>Details of {props.match.params.id}</h2>;
};
export default Details;
