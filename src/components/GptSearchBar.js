import React, { useState } from "react";
import { lang } from "../utility/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { apiCall, showAlert } from "../utility/helpers";
import { saveGptQuery, saveGptResult } from "../store/gptSlice";

const GptSearchBar = () => {
  let dispatch = useDispatch();
  let savedGptQuery = useSelector((store) => store.gpt.gptQuery);
  const [gptQuery, setGptQuery] = useState(savedGptQuery);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let resp = await apiCall("/api/chatWithGpt", "POST", { gptQuery });
    let movieArray = resp.data.result.split(",");
    if (resp.data.success) {
      dispatch(saveGptResult(movieArray));
      dispatch(saveGptQuery(gptQuery));
    } else showAlert({ type: "error", msg: resp.msg });
  };

  const handleChange = (e) => {
    setGptQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  let preferedLang = useSelector((store) => store.user?.user?.preferedLanguage);
  return (
    <div className=" pt-[5%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 rounded-md">
        <input
          className="p-2 m-2 text-black rounded-md mr-2 col-span-9"
          type="text"
          placeholder={lang[preferedLang].gptSearchBarPlaceHolder}
          onChange={handleChange}
          value={gptQuery}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button
          type="button"
          className="p-2 m-2 text-white bg-red-600 rounded-md col-span-3"
          onClick={handleSubmit}
        >
          {lang[preferedLang].searchBtnText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
