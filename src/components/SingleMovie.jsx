import React from "react";

const SingleMovie = (props) => {
  return <img src={props.img} className="poster" alt="description" style={{ width: "100%", height: "auto" }} />;
};

export default SingleMovie;
