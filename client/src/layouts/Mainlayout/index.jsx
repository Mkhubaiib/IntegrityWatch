import React from "react";
import Sidebar from "../../components/Sidebar";
const index = ({ active, setActive, user,setUser, children }) => {
  return (
    <div className="relative max-w-[1728px] mx-auto w-full ">
      {user && (
        <div className="fixed top-0 ">
          <Sidebar active={active} setActive={setActive} user = {user} setUser={setUser} />
        </div>
      )}
      <div className=" w-full">
        {/* <div className=" lg:pl-[236px] fixed top-0 z-20 w-full ">
          Header
        </div> */}
        <div className={` ${user && "lg:pl-[260px]  bg-[#F9FBFF]"}  z-0 `}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default index;
