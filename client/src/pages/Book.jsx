import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function Book() {
  
  const {bookId} = useParams();
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(false);
  const [book, setBook] = useState(null);
  
  const fetchBook = async () =>{
    setLoading(true);
    setError(false);
    try {
    const book = await axios.get(`/api/books/${bookId}`)
    setBook(book.data.data)
    setLoading(false)
    } catch (error) {
      setError(true);
      console.log(error);
      
    }
  }
  
  useEffect(() => {
      fetchBook();
  }, [bookId])
  
  
  return (
    <>
   <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-[#1D2D50]">📘 Book Details Page</h1>
      <p className="text-xl mt-4 text-gray-700">Book ID: <span className="font-mono">{bookId}</span></p>
    </div>
    
    
    </>
  )
}

export default Book