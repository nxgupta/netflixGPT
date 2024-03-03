import React from "react";
import { lang } from "../utility/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  let preferedLang = useSelector((store) => store.user?.user?.preferedLanguage);
  console.log(preferedLang, lang, lang[preferedLang].gptSearchBarPlaceHolder);
  return (
    <div className=" pt-[5%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 rounded-md">
        <input
          className="p-2 m-2 text-black rounded-md mr-2 col-span-9"
          type="text"
          placeholder={lang[preferedLang].gptSearchBarPlaceHolder}
        />
        <button className="p-2 m-2 text-white bg-red-600 rounded-md col-span-3">
          {lang[preferedLang].searchBtnText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
