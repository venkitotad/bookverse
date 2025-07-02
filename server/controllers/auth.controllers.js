import pool from "../config/db.js";
import asyncHandler from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";
import AppError from '../utils/AppError.js';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const signUp = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;


  const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

  if (user.rows.length > 0) {
    throw new AppError('You are already registered!', 400);
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const result = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [name, email.toLowerCase(), hashedPassword]
  );

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: result.rows[0],
  });
});

export const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError('All feilds are required!..', 400);
  }

  const result = await pool.query('SELECT * FROM users WHERE email=$1', [email]);
  
  if (result.rows.length === 0) {
  throw new AppError('User not found', 404);
}

  const user = result.rows[0];

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new AppError('Invlaid details try again!..', 400);
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });


  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "development",
    sameSite: "Lax",
    maxAge: 60 * 60 * 1000, // 1 hour
  });

  res.status(200).json({
    success: true,
    message: "Logged in successfully",
    data: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    token
  })

});


