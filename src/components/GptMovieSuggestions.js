import React, { useEffect } from "react";
import { API_OPTIONS } from "../utility/contants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { saveSuggestedMovies } from "../store/gptSlice";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  let dispatch = useDispatch();
  let gptSuggestedMovies = useSelector((store) => store.gpt.gptMovieResult);
  let suggestedMoviesList = useSelector((store) => store.gpt.suggestedMovies);
  let findMovieDetails = async (movieName) => {
    console.log(API_OPTIONS);
    let result = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    return result.data.results;
  };

  let getAllMoviesData = async () => {
    let results = await Promise.all(
      gptSuggestedMovies.map((movie) => findMovieDetails(movie))
    );
    console.log(results);
    dispatch(saveSuggestedMovies(results));
  };
  useEffect(() => {
    getAllMoviesData();
  }, [gptSuggestedMovies]);

  return (
    <div className="bg-black m-5 p-5 text-white">
      {suggestedMoviesList.length > 0 ? (
        suggestedMoviesList.map((movie) => (
          <MovieList
            key={movie[0].title}
            title={movie[0].title}
            movies={movie}
          />
        ))
      ) : (
        <div>No Movie suggestions.</div>
      )}
    </div>
  );
};

export default GptMovieSuggestions;
