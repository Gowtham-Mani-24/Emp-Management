import { Employee } from "../models/Employee.js";

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch Employees",
            error: error.message
        })
    }

};

export const createEmployee = async (req, res) => {
    try {
        const { name, role, salary } = req.body;

        const employee = await Employee.create({
            name,
            role,
            salary
        });
        res.status(201).json(employee);

    } catch (error) {
        res.status(500).json({
            message: "Failed to create employee",
            error: error.message
        })
    }
};

export const getEmployeeById = async (req, res) => {

    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            })
        }
        res.status(200).json(employee);

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch employee",
            error: error.message
        });
    }
}

export const updateEmployeeById = async (req, res) => {

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
        res.status(500).json({
            message: "Failed to update employee",
            error: error.message
        });

    }
    
}


export const deleteById = async (req, res) => {
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
        res.status(500).json({
            message: "Failed to delete employee",
            error: error.message
        });
    }
    
}