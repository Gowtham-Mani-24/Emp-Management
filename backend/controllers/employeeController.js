import { Employee } from "../models/Employee.js";

export const getEmployees = async (req, res, next) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        next(error);
    }

};

export const createEmployee = async (req, res,next) => {
    try {
        const { name, role, salary } = req.body;

        const employee = await Employee.create({
            name,
            role,
            salary
        });
        res.status(201).json(employee);

    } catch (error) {
        next(error);
    }
};

export const getEmployeeById = async (req, res, next) => {

    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            })
        }
        res.status(200).json(employee);

    } catch (error) {
        next(error);
    }
}

export const updateEmployeeById = async (req, res, next) => {

    try {
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
                runValidators:true
            }
        );

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        })
    }

    res.status(200).json(employee);

    } catch (error) {
       next(error);
    }
    
}


export const deleteById = async (req, res, next) => {
    try {
        const employee = await Employee.findByIdAndDelete(
            req.params.id
        );

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }
        
        res.status(200).json({
            message: "Employee deleted successfully"
        });
    } catch (error) {
        next(error);
    }
    
}