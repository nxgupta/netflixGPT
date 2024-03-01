import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  let movie = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movie === null) return;
  let mainMovie = movie[0];
  return (
    <div>
      <VideoTitle title={mainMovie.title} description={mainMovie.overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
