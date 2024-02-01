import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title }) => {
  return (
    <div>
      {title}
      <MovieCard />
    </div>
  );
};

export default MovieList;
