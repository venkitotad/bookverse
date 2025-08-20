import { Router } from "express";
import {getBooks, addBook} from "../controllers/book.controllers.js"
const bookRouter = Router()

bookRouter.get('/', getBooks);
bookRouter.get('/:id', getBooks);
bookRouter.post('/books', addBook);
// bookRouter.put('/books/:id', updateBook);
// bookRouter.delete('/books/:id', deleteBook);

export default bookRouter;