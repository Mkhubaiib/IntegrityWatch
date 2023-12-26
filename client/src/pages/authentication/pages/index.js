import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Index = () => {
  const [image, setImage] = useState(null);
  return (
    <div className="bg-[#c9e8e4] w-full relative min-h-[100vh]">
      <button
        className="absolute top-8 right-8 flex z-20 min-w-[200px] justify-center shadow-md font-bold items-center bg-[#2e2e2e] text-white px-8 py-2 rounded-md "
        type="submit"
      >
        {" "}
        <Link to="/login">Login</Link>
      </button>
      <div className="w-full absolute top-0">
        <img src="./Assests/front.png" alt="" className="h-[100vh]  mx-auto" />
        <div className="bg-black/50 h-[100vh]  mx-auto w-full absolute top-0"></div>
      </div>
      <div className="w-full  z-20 justify-start items-center  flex  gap-20 h-[100vh] ">
        <div className="flex z-20 flex-col items-start justify-start gap-8  bg-[white]/50 p-20 rounded-lg mt-4 h-[90vh]">
          <div className="z-20 flex justify-center items-center flex-col">
            <img src="./Assests/scale-up.png" alt="" className="h-20" />
            <p className="z-20 text-black">name</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="./Assests/badge.png" alt="" className="h-20" />
            <p>name</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="./Assests/image-.png" alt="" className="h-20" />
            <p>name</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="./Assests/magic-wand.png" alt="" className="h-20" />
            <p>name</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="./Assests/red-eye.png" alt="" className="h-20" />
            <p>name</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img src="./Assests/remove-user.png" alt="" className="h-20" />
            <p>name</p>
          </div>

          {/* <h1 className="text-white text-4xl font-bold">Welcome to</h1>
            <h1 className="text-white text-4xl font-bold">The World of</h1> */}
        </div>
        <div className="z-20 w-full flex justify-center items-center ">
          <div className="flex gap-8 justify-center items-center flex-col p-6 z-20 bg-white/80 shadow-md rounded-lg max-w-[800px] w-full min-h-[400px]">
            <p className=""> Drag or upload your image</p>
            <form className="bg-[#2e2e2e] text-white  flex p-4 justify-center items-center gap-4 rounded hover:opacity-80 cursor-pointer">
              <input
                type="file"
                accept="image/png , image/webp, image/jpeg"
                className="text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-blue-50 file:text-black
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700
          "
                onChange={(e) => setImage(e)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
