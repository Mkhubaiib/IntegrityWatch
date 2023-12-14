import React, { useState, useEffect } from "react";
import Pagelayout from "../../layouts/Pagelayout";
import { Link } from "react-router-dom";
const Index = ({ active, setActive, classesdata }) => {
  // const class = {
  //   rooms: [
  //     {
  //       roomNumber: "101",
  //       students: [
  //         {
  //           rollNumber: "A101",
  //           attendance: "P",
  //           startTime: "09:00 AM",
  //           endTime: "12:00 PM",
  //         },
  //         {
  //           rollNumber: "A102",
  //           attendance: "P",
  //           startTime: "09:00 AM",
  //           endTime: "12:00 PM",
  //         },
  //         { rollNumber: "A103", attendance: "A", startTime: "-", endTime: "-" },
  //         {
  //           rollNumber: "A104",
  //           attendance: "P",
  //           startTime: "09:00 AM",
  //           endTime: "12:00 PM",
  //         },
  //         { rollNumber: "A105", attendance: "A", startTime: "-", endTime: "-" },
  //       ],
  //     },
  //     {
  //       roomNumber: "102",
  //       students: [
  //         {
  //           rollNumber: "B101",
  //           attendance: "P",
  //           startTime: "10:00 AM",
  //           endTime: "01:00 PM",
  //         },
  //         { rollNumber: "B102", attendance: "A", startTime: "-", endTime: "-" },
  //         {
  //           rollNumber: "B103",
  //           attendance: "P",
  //           startTime: "10:00 AM",
  //           endTime: "01:00 PM",
  //         },
  //         {
  //           rollNumber: "B104",
  //           attendance: "P",
  //           startTime: "10:00 AM",
  //           endTime: "01:00 PM",
  //         },
  //         { rollNumber: "B105", attendance: "A", startTime: "-", endTime: "-" },
  //       ],
  //     },
  //     {
  //       roomNumber: "103",
  //       students: [
  //         {
  //           rollNumber: "C101",
  //           attendance: "P",
  //           startTime: "11:00 AM",
  //           endTime: "02:00 PM",
  //         },
  //         { rollNumber: "C102", attendance: "A", startTime: "-", endTime: "-" },
  //         {
  //           rollNumber: "C103",
  //           attendance: "P",
  //           startTime: "11:00 AM",
  //           endTime: "02:00 PM",
  //         },
  //         {
  //           rollNumber: "C104",
  //           attendance: "P",
  //           startTime: "11:00 AM",
  //           endTime: "02:00 PM",
  //         },
  //         { rollNumber: "C105", attendance: "A", startTime: "-", endTime: "-" },
  //       ],
  //     },
  //     {
  //       roomNumber: "104",
  //       students: [
  //         {
  //           rollNumber: "D101",
  //           attendance: "P",
  //           startTime: "12:00 PM",
  //           endTime: "03:00 PM",
  //         },
  //         { rollNumber: "D102", attendance: "A", startTime: "-", endTime: "-" },
  //         {
  //           rollNumber: "D103",
  //           attendance: "P",
  //           startTime: "12:00 PM",
  //           endTime: "03:00 PM",
  //         },
  //         {
  //           rollNumber: "D104",
  //           attendance: "P",
  //           startTime: "12:00 PM",
  //           endTime: "03:00 PM",
  //         },
  //         { rollNumber: "D105", attendance: "A", startTime: "-", endTime: "-" },
  //       ],
  //     },
  //     {
  //       roomNumber: "105",
  //       students: [
  //         {
  //           rollNumber: "E101",
  //           attendance: "P",
  //           startTime: "01:00 PM",
  //           endTime: "04:00 PM",
  //         },
  //         { rollNumber: "E102", attendance: "A", startTime: "-", endTime: "-" },
  //         {
  //           rollNumber: "E103",
  //           attendance: "P",
  //           startTime: "01:00 PM",
  //           endTime: "04:00 PM",
  //         },
  //         {
  //           rollNumber: "E104",
  //           attendance: "P",
  //           startTime: "01:00 PM",
  //           endTime: "04:00 PM",
  //         },
  //         { rollNumber: "E105", attendance: "A", startTime: "-", endTime: "-" },
  //       ],
  //     },
  //   ],
  // };

  const [selectedRoom, setSelectedRoom] = useState(classesdata[0]);
  console.log("classes data", classesdata);
  const handleRoomChange = (event) => {
    const selectedRoomNumber = event.target.value;
    const selectedRoomData = classesdata?.find(
      (room) => room.roomNumber === selectedRoomNumber
    );
    setSelectedRoom(selectedRoomData);
  };

  useEffect(() => {
    setSelectedRoom(classesdata[0]);
  }, [classesdata]);

  return (
    <Pagelayout pagename="Class List">
      <div>
        <div className="flex justify-between items-center gap-8 pb-8">
          <Link to="/Monetering">
            <button
              className="bg-[#152C70] text-white py-3 px-6 rounded-sm font-semibold cursor-pointer"
              onClick={() => setActive(1)}
            >
              Start Monitering
            </button>
          </Link>
          <select
            id="roomSelect"
            onChange={handleRoomChange}
            value={selectedRoom?.roomNumber}
            className="p-2 min-w-[250px] rounded-sm font-semibold  bg-white shadow-sm "
          >
            {classesdata?.map((room) => (
              <option key={room.roomNumber} value={room.roomNumber}>
                Room Number: {room.roomNumber}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between items-center gap-8 font-semibold py-6">
          <p>Room NO: {selectedRoom?.roomNumber}</p>
          <p>Number Of Students: {selectedRoom?.students.length} </p>
          <p>Exam Id: {selectedRoom?.examID}</p>
        </div>
        <div>
          <table className="min-w-[300px] md:min-w-[450px] lg:min-w-[600px] xl:min-w-[900px] bg-white shadow-sm border w-full">
            <thead className="">
              <tr className="border-b font-normal text-[14px] ">
                <th className="font-normal py-2">Roll Number</th>
                <th className="font-normal py-2">Attendance</th>
                <th className="font-normal py-2">Start Time</th>
                <th className="font-normal py-2">End Time</th>
              </tr>
            </thead>
            <tbody>
              {selectedRoom?.students.map((student) => (
                <tr key={student.rollNumber} className="text-center border-b">
                  <td className="py-2 text-[12px]">{student.rollNumber}</td>
                  <td className="py-2 text-[12px]">{student.attendance}</td>
                  <td className="py-2 text-[12px]">{student.startTime}</td>
                  <td className="py-2 text-[12px]">{student.endTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center gap-8 font-semibold py-6">
          <p>Invigilator Name: {selectedRoom?.invigilatorName}</p>
          <p>Subject Teacher: {selectedRoom?.teacherName}</p>
        </div>
      </div>
    </Pagelayout>
  );
};

export default Index;
