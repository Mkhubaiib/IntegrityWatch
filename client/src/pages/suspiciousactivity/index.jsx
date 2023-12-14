import React from "react";
import Pagelayout from "../../layouts/Pagelayout";
const Index = () => {
  return (
    <Pagelayout pagename="Suspicious Activity">
      <img
        src="./assets/images/suspicious.png"
        alt=""
        className="absolute top-4 right-4"
      />
      <div className="">
        <p className="font-semibold py-2">Room Number: 06</p>
        <video
          src="./assets/videos/video1.mp4"
          autoPlay
          controls
          muted
          loop
          className=" w-[400px] bg-[#c7c7c7] "
        ></video>
      </div>
    </Pagelayout>
  );
};

export default Index;
