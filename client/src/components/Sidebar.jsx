import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ active, setActive }) => {
  const featurelist = [
    { name: "Visual Alerts", subitems: ["Start", "pause", "stop/end"] },
    {
      name: "Monitering",
      subitems: ["Start", "pause", "stop/end"],
      link: "/Monetering",
    },
    {
      name: "Susupicious Activity",
      subitems: ["Location", "source", "Target"],
    },
    { name: "Classes List", subitems: [], link: "/list" },
  ];

  return (
    <div className=" bg-white shadow-lg min-h-[100vh] ">
      <div className="px-8">
        <Link to="/">
          <p
            className="text-[#109CF1] text-[22px] font-bold py-4"
            onClick={() => setActive(-1)}
          >
            Integrity Watch
          </p>
        </Link>
        <div className="flex justify-center items-center gap-[12px] py-8">
          <img
            src="/assets/images/people_1.png"
            alt=""
            className="rounded-full w-[60px] h-[60px] cursor-pointer"
          />
          <div className="flex justify-center items-start flex-col">
            <p className="text-[16px]">Muhammad Khubaib </p>
            <p className="text-[12px] text-[#334D6E]">mkhubaiib1@gmail.com</p>
          </div>
        </div>

        <div className="pb-4">
          <ul>
            {featurelist.map((item, index) => {
              return (
                <Link to={item.link}>
                  <li key={index} className=" text-[16px] py-2 ">
                    <div
                      className="flex gap-2"
                      onClick={() => {
                        setActive(active == index ? -1 : index);
                      }}
                    >
                      <div className="bg-black rounded-full cursor-pointer w-6 h-6 flex justify-center items-center">
                        <p
                          className={`font-bold  text-white text-[18px] transition-all ease-in-out duration-500 ${
                            active == index
                              ? "rotate-45 translate-x-0.5"
                              : "rotate-0"
                          }`}
                        >
                          +
                        </p>
                      </div>
                      <p className={`hover:text-[#109CF1] cursor-pointer font-semibold   ${active == index ? "text-[#109CF1]" : "text-[#334D6E]"}`}>
                        {item.name}
                      </p>
                    </div>
                    {/* {active == index && ( */}
                    <ul
                      className={`pl-8  transition-all ease-in-out duration-300 ${
                        active == index
                          ? "h-full py-2"
                          : "h-[0px] overflow-hidden"
                      }`}
                    >
                      {item.subitems.map((subitem, index) => {
                        return (
                          <li
                            key={index}
                            className="text-[14px] font-normal text-[#334D6E]"
                          >
                            <div className="flex  items-center gap-2  transition-all ease-in-out duration-500">
                              <div
                                className={`w-2 h-2 rounded-full border-2 ${
                                  index == 0
                                    ? "border-yellow-500"
                                    : index == 2
                                    ? "border-[#2ED47A]"
                                    : "border-[#F7685B]"
                                }
                                transition-all ease-in-out duration-500`}
                              ></div>
                              <p className="cursor-pointer  transition-all ease-in-out duration-500">
                                {" "}
                                {subitem}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    {/* )} */}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
      <div className="px-8">
        <div className="flex gap-2 py-8">
          <div className="text-[#334D6E]">
            <p className="font-bold  text-[#334D6E] text-[18px]">...</p>
          </div>
          <p className="hover:text-[#109CF1] text-[#334D6E]   font-semibold cursor-pointer">
            Settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
