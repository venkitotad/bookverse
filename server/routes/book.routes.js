import { Router } from "express";
import {getBooks, addBook} from "../controllers/book.controllers.js"
import { authenticateUser } from "../middleware/authenticate.js";
const bookRouter = Router()

bookRouter.get('/', getBooks);
bookRouter.get('/:id', getBooks);
bookRouter.post('/', authenticateUser, addBook);
// bookRouter.put('/books/:id', updateBook);
// bookRouter.delete('/books/:id', deleteBook);

export default bookRouter;