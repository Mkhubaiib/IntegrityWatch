import React, { useState, useEffect } from "react";
import Pagelayout from "../../layouts/Pagelayout";
import { Link } from "react-router-dom";
const Index = ({
  showAudioAndImage,
  setActive,
  setShowAudioAndImage,
  alarm,
}) => {
  const [size, setSize] = useState(2);

  return (
    <Pagelayout pagename="Monitering">
      <div className="flex flex-col justify-center items-center h-full ">
        <div className="grid grid-cols-3 gap-12 p-8 items-center  justify-between">
          <div>
            <p className="font-semibold text-center">Room Number: 101</p>
            <video
              src="./assets/videos/video1.mp4"
              autoPlay
              controls
              muted
              loop
              className="h-[250px] w-[400px] cursor-pointer bg-[#c7c7c7] "
            ></video>
          </div>

          <Link to={`/cameramanagment/${102}`}>
            <div>
              <p className="font-semibold text-center">Room Number: 102</p>
              <img
                src="./assets/videos/novideo.png"
                className="h-[250px] w-[400px] cursor-pointer "
              ></img>
            </div>
          </Link>
          <div>
            <p className="font-semibold text-center">Room Number: 103</p>
            <video
              src="./assets/videos/video2.mp4"
              controls
              autoPlay
              loop
              muted
              className="h-[250px] w-[400px] cursor-pointer bg-[#c7c7c7]"
            ></video>
          </div>
          <Link to={`/cameramanagment/${104}`}>
            <div>
              <p className="font-semibold text-center">Room Number: 104</p>
              <img
                src="./assets/videos/novideo.png"
                className="h-[250px] w-[400px] cursor-pointer "
              ></img>
            </div>
          </Link>
          <div>
            <p className="font-semibold text-center">Room Number: 105</p>
            <div className="relative">
              <video
                src="./assets/videos/video1.mp4"
                autoPlay
                controls
                muted
                loop
                className="h-[250px] w-[400px] cursor-pointer bg-[#c7c7c7] "
              ></video>
              {showAudioAndImage && (
                <>
                  <Link to="/suspiciousactivity">
                    <img
                      src="./assets/images/danger-sign.gif"
                      alt=""
                      className="absolute top-12 left-24 cursor-pointer"
                      onClick={() => {
                        setActive(2);
                        setShowAudioAndImage(false);
                        alarm?.audio.pause();
                      }}
                    />
                  </Link>
                </>
              )}
            </div>
          </div>

          <Link to={`/cameramanagment/${106}`}>
            <div>
              <p className="font-semibold text-center">Room Number: 106</p>
              <img
                src="./assets/videos/novideo.png"
                className="h-[250px] w-[400px] cursor-pointer "
              ></img>
            </div>
          </Link>
        </div>
      </div>
    </Pagelayout>
  );
};

export default Index;
