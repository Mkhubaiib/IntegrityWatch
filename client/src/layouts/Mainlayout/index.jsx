import React from "react";
import Sidebar from "../../components/Sidebar";
const index = ({ active, setActive, children }) => {
  return (
    <div className="relative max-w-[1728px] mx-auto w-full ">
      <div className="fixed top-0 ">
        <Sidebar active = {active} setActive = {setActive}/>
      </div>
      <div className=" w-full">
        {/* <div className=" lg:pl-[236px] fixed top-0 z-20 w-full ">
          Header
        </div> */}
        <div className=" lg:pl-[260px]   bg-[#F9FBFF] z-0  px-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default index;
