import express from 'express';
import { createEmployee, deleteById, getEmployeeById, getEmployees, updateEmployeeById } from '../controllers/employeeController.js';

const router = express.Router();

router.get('/',getEmployees);

router.get('/:id', getEmployeeById);

router.post('/',createEmployee);

router.put('/:id',updateEmployeeById);

router.delete('/:id', deleteById);

export default router;
