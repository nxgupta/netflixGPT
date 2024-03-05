import React from "react";
import { imgPath } from "../utility/contants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-48 px-2 ">
      <img className="h-48 w-48" src={imgPath + posterPath} alt="movieImage" />
    </div>
  );
};

export default MovieCard;
