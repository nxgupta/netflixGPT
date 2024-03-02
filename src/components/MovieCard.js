import React from "react";
import { imgPath } from "../utility/contants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 px-2 ">
      <img className="h-48 w-40" src={imgPath + posterPath} alt="movieImage" />
    </div>
  );
};

export default MovieCard;
