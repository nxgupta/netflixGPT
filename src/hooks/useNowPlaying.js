import { useDispatch, useSelector } from "react-redux";
import { addNowPalyingMovies } from "../store/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utility/contants";
import axios from "axios";

export let useNowPlayingMovies = () => {
  let dispatch = useDispatch();
  let userId = useSelector((state) => state?.user?.userId);
  const getNowPlayingMovies = async () => {
    let response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    dispatch(addNowPalyingMovies(response.data.results));
  };
  useEffect(() => {
    if (userId) getNowPlayingMovies();
  }, [userId]);
};
