import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import "../style.css";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = "http://www.omdbapi.com/?apikey=cdbdad0e";
      let response = await fetch(`${url}&s="${props.title.toLowerCase()}"`);
      let moviesRequest = await response.json();
      setMovies(moviesRequest);
    };

    fetchMovies();
  }, [props.title]);

  return (
    <>
      <h2>{props.category}</h2>
      <Row>
        {movies.Search &&
          movies.Search.slice(0, 6).map((movie, index) => (
            <Col
              xs={6}
              md={3}
              lg={2}
              className={`d-${index >= 2 ? "none" : "block"} d-md-${index >= 4 ? "none" : "block"} d-lg-block`}
            >
              <SingleMovie key={movie.imdbID} img={movie.Poster} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Movies;
