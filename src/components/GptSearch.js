import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { USER_AVATAR } from "../utility/contants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={USER_AVATAR} alt="bg" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
