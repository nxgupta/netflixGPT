import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMoviesList = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const topRatedMoviesList = useSelector(
    (store) => store.movies.topRatedMovies
  );
  const popularMoviesList = useSelector((store) => store.movies.popularMovies);
  return (
    <div className=" bg-black p-8">
      <div className="-mt-60 relative z-50">
        <MovieList title={"Now Playing Movies"} movies={nowPlayingMoviesList} />
        <MovieList title={"Top Rated Movies"} movies={topRatedMoviesList} />
        <MovieList title={"Trending Movies"} movies={popularMoviesList} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
