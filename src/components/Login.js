import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utility/validations";

const Login = () => {
  let [isSignInForm, setIsSignInForm] = useState(true);
  let [errorMessage, setErrorMessage] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", name?.current?.value);
    let msg = validateData(
      name?.current?.value,
      email.current.value,
      password.current.value,
      !isSignInForm
    );
    setErrorMessage(msg);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 mx-auto my-36 right-0 left-0 text-white rounded opacity-85">
        <h3 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h3>
        {!isSignInForm ? (
          <input
            ref={name}
            type="name"
            name="name"
            placeholder="Full Name"
            className="my-4 p-4 w-full  bg-gray-700 rounded"
          />
        ) : null}
        <input
          ref={email}
          type="email"
          name="email"
          placeholder="Email or Phone number"
          className="my-4 p-4 w-full  bg-gray-700 rounded"
        />
        <input
          ref={password}
          type="password"
          name="email"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-700 rounded"
        />
        <p className="font-bold text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-4 w-full bg-red-700 rounded"
          onClick={(e) => handleSubmit(e)}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h5 className="font-bold cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to netflix? Sign Up Now"
            : "Already a User? Sign in now!"}
        </h5>
      </form>
    </div>
  );
};

export default Login;
