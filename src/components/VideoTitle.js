import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className=" w-screen aspect-video pt-64  px-12 absolute text-white bg-gradient-to-r from-black">
      <p className="font-bold text-4xl">{title}</p>
      <p className="py-6 text-lg w-1/2">{description}</p>
      <button className="bg-white p-4 font-bold px-12 rounded-lg text-xl text-black hover:bg-gray-400">
        Play
      </button>
      <button className="bg-white p-4 font-bold px-12 mx-2 rounded-lg text-xl text-black hover:bg-gray-400">
        More Info
      </button>
    </div>
  );
};

export default VideoTitle;
