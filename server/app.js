import express from 'express';
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import errorMiddleware from './middleware/errorMiddleware.js'
import authRouter from './routes/auth.routes.js';
import bookRouter from './routes/book.routes.js';
import { rateLimit } from 'express-rate-limit';

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many attempts, try again later."
  }
});

app.use(limiter);

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("helo");
})

app.use('/api/auth', limiter, authRouter);
app.use('/api/books', bookRouter)

app.use(errorMiddleware);

export default app;