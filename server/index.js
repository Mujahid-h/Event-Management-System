import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connnectDB from "./config/db.js";
import eventRoute from "./routes/eventRoute.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/events", eventRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  connnectDB();
  console.log(`Server running on port ${PORT}`);
});
