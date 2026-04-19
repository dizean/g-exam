import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import examRoutes from "./routes/examRoutes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Node API is running 🚀" });
});
app.use("/api/exam", examRoutes);
export default app;