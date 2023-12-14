import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./pages/home/index.jsx";
import Mainlayout from "./layouts/Mainlayout/index.jsx";
import List from "./pages/list/index.jsx";
import Modelperformance from "./pages/modelperformance/index.jsx";
import Monitering from "./pages/Monitering/index.jsx";
import axios from "axios";
import SuspiciousActivity from "./pages/suspiciousactivity/index.jsx";
import Cameramanagment from "./pages/cameramanagment/index.jsx";

function App() {
  const [active, setActive] = useState(-1);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // setting active tab

  useEffect(() => {
    navigate("/");
  }, []);

  // fetching data
  useEffect(() => {
    axios.defaults.withCredentials = true;
    const fetchData = async () => {
      try {
        // Make a GET request to the /getData endpoint
        const response = await axios.get(
          "https://integrity-watch.vercel.app/getData"
        );
        setData(response.data);
        console.log("response", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      fetch("https://ifconfig.me/ip")
        .then((response) => response.text())
        .then((ip) => console.log("Vercel Deployment IP:", ip))
        .catch((error) => console.error("Error getting IP:", error));
    };

    fetchData();
  }, []);

  // alert showing and audio
  const [alarm, setalarm] = useState(null);
  const [showAudioAndImage, setShowAudioAndImage] = useState(false);

  useEffect(() => {
    const audiosrc = "./assets/audio/warning.mp3";
    const newAudio = new Audio(audiosrc);
    setalarm({ audio: newAudio });

    const timeoutId = setTimeout(() => {
      setShowAudioAndImage(true);

      // Use the state updater function to get the latest state
      setalarm((prevalarm) => {
        if (prevalarm && prevalarm.audio) {
          prevalarm.audio.play().catch((error) => {
            // Autoplay was prevented, handle the error here
            console.error("Autoplay was prevented:", error);
          });
        }
        return prevalarm;
      });
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      if (newAudio) {
        newAudio.pause();
        newAudio.currentTime = 0;
      }
    };
  }, []); // Empty // Include alarm in the dependency array

  return (
    <Mainlayout active={active} setActive={setActive}>
      <Routes>
        <Route
          path="/"
          element={<Homepage active={active} setActive={setActive} />}
        />
        <Route
          path="/list"
          element={
            <List active={active} setActive={setActive} classesdata={data} />
          }
        />
        <Route
          path="/Monetering"
          element={
            <Monitering
              showAudioAndImage={showAudioAndImage}
              setActive={setActive}
              setShowAudioAndImage={setShowAudioAndImage}
              alarm={alarm}
            />
          }
        />
        <Route path="/modelperformance" element={<Modelperformance />} />
        <Route path="/suspiciousactivity" element={<SuspiciousActivity />} />
        <Route
          path="/cameramanagment/:id"
          element={<Cameramanagment classesdata={data} />}
        />
      </Routes>
    </Mainlayout>
  );
}

export default App;
