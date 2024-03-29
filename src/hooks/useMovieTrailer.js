import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utility/contants";
import { addTrailerVideo } from "../store/movieSlice";

let useMovieTrailer = (movieId) => {
  let dispatch = useDispatch();
  let trailerVideo = useSelector((store) => store.movies.trailerVideo);
  let videoData = async () => {
    let data = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    let filteredData = data.data.results.filter(
      (ele) => ele.type === "Trailer"
    );

    dispatch(
      addTrailerVideo(
        filteredData.length !== 0 ? filteredData[0] : data.data.results[0]
      )
    );
  };

  useEffect(() => {
    if (!trailerVideo) videoData();
  }, []);
};
export default useMovieTrailer;
