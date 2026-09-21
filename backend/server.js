import express from 'express';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employeeRoutes.js';
import { connectDB } from './config/db.js';
import { loggerMiddleware } from './middleware/loggerMiddleware.js';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import { notFoundMiddleware } from './middleware/notFoundMiddleware.js';
import cors from 'cors';
dotenv.config();

connectDB();

const app = express();

const PORT=process.env.PORT || 5000;

//middlewre

app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);



//routes
app.use('/api/employees',employeeRoutes);

app.get('/',(req,res)=>{
    res.send('Employee Management Api is running');
})

app.use(notFoundMiddleware);

app.use(errorMiddleware);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})