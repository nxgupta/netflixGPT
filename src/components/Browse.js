import React from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { usePopular } from "../hooks/usePopular";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  let gptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopular();
  return (
    <div className="overflow-x-hidden no-scrollbar">
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
