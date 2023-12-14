import React from "react";
import Mainlayout from "../../layouts/Mainlayout";
import Pagelayout from "../../layouts/Pagelayout";
import { Link, Navigate } from "react-router-dom";
const index = ({ setActive }) => {
  return (
    <Pagelayout pagename="Visual alerts">
      <div className="flex flex-col justify-center items-center h-full ">
        <div className="grid grid-cols-2 gap-12 p-8 items-center bg-[#93A9AD] justify-between">
          <img
            src="./assets/images/services.png"
            alt=""
            className="cursor-pointer"
          />
          <img
            src="./assets/images/Collaboration.png"
            alt=""
            className="cursor-pointer"
          />
          <Link to="/modelperformance">
            <img
              src="./assets/images/query.png"
              alt=""
              className="cursor-pointer"
            />
          </Link>
          <img
            src="./assets/images/Checked_User_Male.png"
            alt=""
            className="cursor-pointer"
          />
        </div>
        <div onClick={() => setActive(1)}>
          <Link to="/Monetering">
            <img
              src="./assets/images/camera.png"
              alt=""
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </Pagelayout>
  );
};

export default index;
