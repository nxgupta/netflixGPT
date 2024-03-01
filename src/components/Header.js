// Import statements...

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiCall, getStatus } from "../utility/helpers";
import { addUser, removeUser } from "../store/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [userId, setUserId] = useState(
    useSelector((store) => store.user?.userId)
  );
  const logoutUser = async () => {
    try {
      await apiCall("http://localhost:8088/api/logout", "get");
      dispatch(removeUser());
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const { uId } = await getStatus();
        if (uId) {
          dispatch(addUser({ userId: uId }));
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
