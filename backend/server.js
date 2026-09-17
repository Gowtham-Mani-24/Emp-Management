import express from 'express';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employeeRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();

connectDB();

const app = express();

const PORT=process.env.PORT || 5000;

//middlewre
app.use(express.json());

//routes
app.use('/api/employees',employeeRoutes);


app.get('/',(req,res)=>{
    res.send('Employee Management Api is running');
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})