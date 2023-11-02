import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_DB_URI);

app.listen(3001, () => {
  console.log("Server Started");
});
