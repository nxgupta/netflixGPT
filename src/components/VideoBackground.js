import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  let trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
