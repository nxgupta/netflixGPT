import React, { useEffect, useState } from "react";
import Header from "./Header";
import { validateData } from "../utility/validations";
import { apiCall, showAlert } from "../utility/helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice";
import { USER_AVATAR } from "../utility/contants";

const Login = () => {
  let dispatch = useDispatch();
  let initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  let navigate = useNavigate();
  let [isLogin, setIsLogin] = useState(true);
  let [userData, setUserData] = useState(initialState);
  const toggleLogin = () => {
    setIsLogin(!isLogin);
    setUserData(initialState);
  };
  const handleChange = ({ target }) => {
    setUserData({ ...userData, [target.name]: target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let msg = validateData({ ...userData, isLogin });
    if (msg == null) {
      let uri = `/api/${isLogin ? "login" : "signup"}`;
      let resp = await apiCall(uri, "post", userData);
      resp = resp.data;
      if (resp) {
        setUserData(initialState);
        showAlert({
          type: "success",
          msg: resp.msg,
        });
        if (!isLogin) setIsLogin(true);
        else {
          dispatch(addUser({ userId: resp.uId }));
          navigate("/browse");
        }
      } else {
        showAlert({
          type: "error",
          msg: resp.msg,
        });
      }
    } else {
      showAlert({ type: "error", msg });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <div className="max-w-full h-screen">
          <img className="object-cover " src={USER_AVATAR} alt="background" />
        </div>
      </div>
      <form className="absolute p-12 bg-black w-4/12 mx-auto my-32 right-0 left-0 text-white rounded bg-opacity-85">
        <h3 className="font-bold text-3xl py-2">
          {isLogin ? "Sign In" : "Sign Up"}
        </h3>
        {!isLogin ? (
          <input
            value={userData.name}
            type="name"
            name="name"
            placeholder="Full Name"
            onChange={(e) => handleChange(e)}
            className="my-4 p-4 w-full  bg-gray-700 rounded"
          />
        ) : null}
        <input
          value={userData.email}
          type="email"
          name="email"
          placeholder="Email or Phone number"
          onChange={(e) => handleChange(e)}
          className="my-4 p-4 w-full  bg-gray-700 rounded"
        />
        <input
          value={userData.password}
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => handleChange(e)}
          className="my-4 p-4 w-full bg-gray-700 rounded"
        />
        {!isLogin ? (
          <input
            value={userData.confirmPassword}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => handleChange(e)}
            className="my-4 p-4 w-full bg-gray-700 rounded"
          />
        ) : null}
        <button
          className="p-4 my-4 w-full bg-red-700 rounded"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
        <h5
          className="font-bold cursor-pointer text-center"
          onClick={toggleLogin}
        >
          {isLogin
            ? "New to netflix? Sign Up Now"
            : "Already a User? Sign in now!"}
        </h5>
      </form>
    </div>
  );
};

export default Login;
