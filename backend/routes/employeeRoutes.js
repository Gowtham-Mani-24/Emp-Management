import express from 'express';
import { createEmployee, getEmployees } from '../controllers/employeeController.js';

const router = express.Router();

router.get('/',getEmployees);

router.post('/',createEmployee);

export default router;
