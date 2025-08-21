import AppError from "../utils/AppError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const authenticateUser = asyncHandler(async (req, res, next) =>{
    const token = req.cookies.token;
    
    if(!token){
        throw new AppError("Not authorized. No token found!", 401);
    }
    
    const decoded = jwt.verify(token, JWT_SECRET);
    
    req.user = {id: decoded.userId};
    
    next();
})