// backend/index.js
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"));

app.use(cors());

// Serve frontend statically (optional, if needed)
app.use(express.static(path.join(__dirname, "../frontend")));

// API route to get user info
app.get("/user", (req, res) => {
  res.json(data.user);
});

// API route to get leaderboard info
app.get("/leaderboard", (req, res) => {
  res.json(data.leaderboard);
});

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
