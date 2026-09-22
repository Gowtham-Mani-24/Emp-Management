import apiClient from 'apiClient';
import apiClient from './apiClient.js';

const API_URL = 'http://localhost:5000/api/employees';

export const getEmployees = async ()=>{
    const response = await apiClient.get('/employees');
    return response.data;
}

export const getEmployeesById = async (id) =>{
    const  response = await apiClient.get(`/employees/${id}`);
    return response.data;
}

export const createEmployee = async (employeeData)=>{
    const response = await apiClient.post('/employees',employeeData);
    return response.data;
}

export const updateEmployee = async (id,employeeData)=>{
    const response = await apiClient.put(`/employees/${id}`,employeeData);
    return response.data;
}

export const deleteEmployee = async (id)=>{
    const response = await apiClient.delete(`/employees/${id}`);
    return response.data;
}

