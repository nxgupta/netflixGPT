// Import statements...

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiCall, getStatus, showAlert } from "../utility/helpers";
import { addUser, removeUser, updatePreference } from "../store/userSlice";
import { toggleGptSearch } from "../store/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utility/contants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [userId, setUserId] = useState(
    useSelector((store) => store.user?.user?.userId)
  );
  let [preferedLang, setPreferedLang] = useState(
    useSelector((store) => store.user?.user?.preferedLanguage)
  );

  let showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const logoutUser = async () => {
    try {
      await apiCall("http://localhost:8088/api/logout", "GET");
      dispatch(removeUser());
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handlePreferedLanguageChange = async ({ target }) => {
    setPreferedLang(target.value);
    let resp = await apiCall("/api/updatePreferedLang", "POST", {
      uId: userId,
      preferedLang: target.value,
    });
    if (resp.data.success) dispatch(updatePreference(target.value));
    else showAlert({ type: "error", msg: resp.msg });
  };

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const { uId, preferedLang } = await getStatus();
        if (uId) {
          dispatch(addUser(uId));
          dispatch(updatePreference(preferedLang));
          setPreferedLang(preferedLang);
          setUserId(uId);
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      } catch (error) {
        console.error("Error checking user status:", error);
      }
    };

    if (!userId) checkUserStatus();
  }, []);

  return (
    <div className="absolute px-8 h-16 w-full py-2 bg-gradient-to-b from-black z-10 flex flex-row justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {userId ? (
        <div className="flex">
          {showGptSearch ? (
            <select
              className="text-white bg-gray-700 px-1 rounded-md mr-4"
              value={preferedLang}
              onChange={handlePreferedLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          ) : null}
          <button
            className="text-white bg-purple-700 px-2 rounded-md mr-4"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12"
            src="https://occ-0-2663-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABaGqAqHOxkkTTsMQIiaglAu0aPPapDflu3lUtemSna0q1fOq6i8eDrNH2nkRg52kJA90cTrTWuosHlljv9fk-iF-P2XR490.png?r=54c"
            alt="user-avatar"
          />
          <button className="text-white font-bold" onClick={logoutUser}>
            (Logout)
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
