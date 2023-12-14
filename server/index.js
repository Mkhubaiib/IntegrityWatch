const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();
const dummyData = require("./data.json");
const app = express();
app.use(
  cors({
    origin: "https://integriity-watch.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

const port = process.env.PORT || 4000;

const connectDB = require("./conectdb");

connectDB();
app.use(express.urlencoded({ extended: false }));

// Define a mongoose schema for your data
const roomSchema = new mongoose.Schema({
  roomNumber: String,
  invigilatorName: String,
  invigilatorContact: String,
  examID: String,
  teacherName: String,
  subjectName: String,
  students: [
    {
      rollNumber: String,
      attendance: String,
      startTime: String,
      endTime: String,
    },
  ],
});

const Room = mongoose.model("Room", roomSchema);

// API endpoint to add data to MongoDB
app.post("/addData", async (req, res) => {
  try {
    const result = await Room.insertMany(dummyData.rooms);
    res.json(result);
    console.log("Data added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API endpoint to fetch data from MongoDB
app.get("/getData", async (req, res) => {
  try {
    const data = await Room.find();
    res.json(data);
    console.log("Data fetched successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// calling post api to add data to MongoDB
const addDataOnStartup = async () => {
  try {
    const response = await axios.get(
      "https://integrity-watch.vercel.app/getData"
    );
    // const response  = await axios.post("http://localhost:4000/addData", dummyData);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error adding data on startup:", error.message);
  }
};

app.get("/", (req, res) => {
  let data = addDataOnStartup();
  res.send("Hello World!");
  console.log("data from db", data);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  // addDataOnStartup();
});

// mongodb+srv://mohsinabbasi902:mohsin123@integritywatch.ouyrdjr.mongodb.net/
