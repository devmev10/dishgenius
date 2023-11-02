import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import { userRouter } from "./routes/users";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(process.env.MONGO_DB_URI);

app.listen(3001, () => {
  console.log("Server Started");
});
