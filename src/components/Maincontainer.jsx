import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[1];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle Title={original_title} Description={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default Maincontainer;
