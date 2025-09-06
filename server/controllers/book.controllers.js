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

export const addBook = asyncHandler(async (req, res) =>{
    const {title, isbn, category, author_name, comment, rating} = req.body;
    if(!title || !isbn || !category || !author_name || !comment || !rating){
        throw new AppError('Please fill all feilds!..', 400);
    }
    
    // const user_id = req.user.id;
    // const category_id 
})