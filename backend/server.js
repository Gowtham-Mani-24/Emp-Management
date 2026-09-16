import express from 'express';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();

const PORT=5000;

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