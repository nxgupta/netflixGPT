import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../store/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utility/contants";
import axios from "axios";

export let usePopular = () => {
  let dispatch = useDispatch();
  let userId = useSelector((state) => state?.user?.user?.userId);
  const getPupular = async () => {
    let response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    dispatch(addPopularMovies(response.data.results));
  };
  useEffect(() => {
    if (userId) getPupular();
  }, [userId]);
};
