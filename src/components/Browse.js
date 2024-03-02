import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { usePopular } from "../hooks/usePopular";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopular();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
