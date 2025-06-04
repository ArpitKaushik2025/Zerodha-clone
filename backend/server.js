// Accessing Env Variables File
if (process.env.NODE_ENV != "PRODUCTION") {
  require("dotenv").config();
}

// Requiring Server Dependencies
const express = require("express");
const app = express();

// Requiring DB Dependency
const mongoose = require("mongoose");

// Requiring Other Dependencies
const cors = require("cors");
const bodyParser = require("body-parser");

// Requiring DB Models
const { Holding } = require("./models/holdingsModel");
const { Position } = require("./models/positionsModel");
const { Order } = require("./models/ordersModel");

// Setting Env Variables
app.set("port", process.env.PORT);
app.set("dbUsername", process.env.DB_USERNAME);
app.set("dbPassword", process.env.DB_PASSWORD);
app.set("dbName", process.env.DB_NAME);
app.set("clusterName", process.env.CLUSTER_NAME);

// Accessing Env Variables
const port = app.get("port");
const dbUsername = app.get("dbUsername");
const dbPassword = app.get("dbPassword");
const dbName = app.get("dbName");
const clusterName = app.get("clusterName");

// DB URL
const MONGO_URL = `mongodb+srv://${dbUsername}:${dbPassword}@${dbName}.dcrwbzq.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=${clusterName}`;

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
app.use(bodyParser.json());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));

// Fetch Data from DB
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await Holding.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await Position.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let data = req.body;
  let newData = new Order({
    name: data.name,
    qty: data.qty,
    price: data.price,
    mode: data.mode,
  });
  newData.save();
  res.send("Done!");
});

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
