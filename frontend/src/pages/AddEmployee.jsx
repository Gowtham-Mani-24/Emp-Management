import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { createEmployee } from "../api/employeeApi";

export const AddEmployee = ()=>{
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name:'',
        role:'',
        salary:''
    })

    const [error,setError] = useState('');

    const handleChange = (e)=>{
        const {name,value} =e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await createEmployee({
                ...formData,
                salary: Number(formData.salary)
            });
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            setError('Failed to create Employee');
        }
    }

    return (
        <>
        <div>
            <h3>Add Employee</h3>
            {error &&<p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <div>
                    <label>Role:</label>
                    <input 
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <div>
                    <label>Salary:</label>
                    <input 
                        type="number"
                        name='salary'
                        value={formData.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br/>
                <button type="submit">Add Employee</button>
            </form>
        </div>
        </>
    )
}