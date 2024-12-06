import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import createStudent from "./routes/create.js";

// STEP#2: Load environment variables from .env file
dotenv.config();

const app = express();

app.use(express.json());

// Define the port number where the server will listen for requests
const port = process.env.PORT || 3000;

const connString = process.env.MONGO_URI;

if (!connString) {
  console.error("MONGO_URI is not defined in environment variables.");
  process.exit(1); // Exit the process if the MONGO_URI is missing
}

async function main() {
  try {
    await mongoose.connect(connString);
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit the process if the connection fails
  }
}

main();

//http://localhost:3000/api/students
app.use("/api/students", createStudent);

app
  .listen(port, () => {
    // Log a message when the server is running
    console.log(`Server running at http://localhost:${port}/`);
  })
  .on("error", (err) => {
    // Log server errors if any
    console.error("Error starting server:", err);
  });
