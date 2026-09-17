import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: [true, "Employee name is required"],
            trim:true,
            minlength:[2,"name must contain at least 2 characters"]
        },
        role:{
            type:String,
            required: [true, "Employee role is required"],
            trim:true
        },
        salary:{
            type:Number,
            required: [true, "Employee salary is required"],
            min: [0, "Salary cannot be negative"]
        }   
    },
    {
        timestamps:true
    }
)

export const Employee = mongoose.model("Employee", employeeSchema);