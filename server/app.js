import express from 'express';
import morgan from 'morgan'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import errorMiddleware from './middleware/errorMiddleware.js'
import authRouter from './routes/auth.routes.js';
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());



app.use('/api/auth', authRouter)

app.all('*', (req, res, next) => {
  next(new AppError(`Route ${req.originalUrl} not found`, 404));
});

app.use(errorMiddleware);

export default app;