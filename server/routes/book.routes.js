import { Router } from "express";

const bookRouter = Router()

bookRouter.get('/books', getBooks);
bookRouter.get('/books/:id', getBooks);
bookRouter.post('/books', addBook);
bookRouter.put('/books/:id', updateBook);
bookRouter.delete('/books/:id', deleteBook);

export default bookRouter;