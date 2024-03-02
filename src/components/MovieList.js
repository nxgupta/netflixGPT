import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="bg-transparent">
      <h1 className="text-2xl text-white p-2">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
