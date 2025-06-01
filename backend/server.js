// Accessing Env Variables File
if (process.env.NODE_ENV != "PRODUCTION") {
  require("dotenv").config();
}

// Using Server Dependencies
const express = require("express");
const app = express();

// Using DB Dependency
const mongoose = require("mongoose");

// Using Other Dependencies
const cors = require("cors");

// Setting Env Variables
app.set("port", process.env.PORT);
app.set("dbUsername", process.env.DB_USERNAME);
app.set("dbPassword", process.env.DB_PASSWORD);
app.set("dbName", process.env.DB_NAME);
app.set("clusterName", process.env.CLUSTER_NAME);
app.set("clusterName2", process.env.CLUSTER_NAME_2);

// Accessing Env Variables
const port = app.get("port");
const dbUsername = app.get("dbUsername");
const dbPassword = app.get("dbPassword");
const dbName = app.get("dbName");
const clusterName = app.get("clusterName");
const clusterName2 = app.get("clusterName2");

// DB URL
const MONGO_URL = `mongodb+srv://${dbUsername}:${dbPassword}@${clusterName}.dcrwbzq.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=${clusterName2}`;

// Connection to DB
const connectionToDb = async () => {
  await mongoose.connect(MONGO_URL);
};

// CORS Configuration & Using CORS
const corsConfig = {
  origin: "http://localhost:5173",
  method: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};
app.use(cors(corsConfig));

// Using Dependencies
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));

// Start Server
const start = () => {
  app.listen(port, () => {
    console.log(`LISTENING TO ${port}`);
  });
  connectionToDb().then(() => {
    console.log("CONNECTED TO DB");
  });
};
start();
