import React from "react";
import Pagelayout from "../../layouts/Pagelayout";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Index = ({ classesdata }) => {
  const { id } = useParams();
  console.log("class data", classesdata);
  const item = classesdata?.find((item) => item.roomNumber === id);
  console.log("item", item);
  return (
    <Pagelayout pagename="Camera Managment">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Room Number: {item.roomNumber}</p>
        <p className="font-semibold">
          Invigilator Name: {item.invigilatorName}
        </p>
        <p className="font-semibold">Exam Id: {item.examID}</p>
        <p className="font-semibold">Camer Operator Contact: 03313476847</p>
      </div>
    </Pagelayout>
  );
};

export default Index;
