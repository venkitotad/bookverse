import pool from "../config/db.js";
import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";


export const getBooks = asyncHandler(async (req, res) =>{
    const data = await pool.query('SELECT *FROM book');
    
    if(data.rows.length == 0){
        throw new AppError('Not avalible', 404);
    }
    
    res.status(200).json({
        message: 'success',
        data: data.rows
    })
})