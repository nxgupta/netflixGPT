import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { ToastContainer } from "react-toastify";

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Body;
