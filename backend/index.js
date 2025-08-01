// backend/server.js
import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json")));

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// API routes
app.get("/user", (req, res) => {
  res.json(data.user);
});

app.get("/leaderboard", (req, res) => {
  res.json(data.leaderboard);
});

// Default route (login page)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
