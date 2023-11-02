import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
});

router.post("/login");

export { router as userRouter };
