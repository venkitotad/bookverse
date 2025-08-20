import AppError from "../utils/AppError";
import asyncHandler from "../utils/asyncHandler";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECERT = process.env.JWT_SECERT;

export const authenticateUser = asyncHandler(async (req, res) =>{
    const token = req.cookies.token;
    
    if(!token){
        throw new AppError("Not authorized. No token found!", 401);
    }
    
    const decoded = jwt.verify(token, JWT_SECERT);
    
    req.user = {id: decoded.userId};
    
    next();
})