import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../store/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utility/contants";
import axios from "axios";

export let useTopRatedMovies = () => {
  let dispatch = useDispatch();
  let userId = useSelector((state) => state?.user?.user?.userId);
  const getTopRatedMovies = async () => {
    let response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    dispatch(addTopRatedMovies(response.data.results));
  };
  useEffect(() => {
    if (userId) getTopRatedMovies();
  }, [userId]);
};
