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
    <>Book</>
  )
}

export default Book