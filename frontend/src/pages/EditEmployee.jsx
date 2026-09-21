import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getEmployees, getEmployeesById, updateEmployee } from "../api/employeeApi";

export const EditEmployee = ()=>{
    const {id} = useParams();

    const navigate = useNavigate();

    const [formData,setFormData]= useState({
        name:"",
        role:"",
        salary:""
    });
    const [loading, setLoading] = useState(true);

    const [error,setError]= useState('');

    useEffect(()=>{
        const fetchEmployees = async()=>{
            try {
                const data = await getEmployeesById(id);
                setFormData({
                    name:data.name,
                    role:data.role,
                    salary:data.salary
                })
            } catch (error) {
                console.error(error);
                setError('Failed to load employee data');
            }
            finally{
                setLoading(false);
            }
        };
        fetchEmployees();
    },[id]);

    const handleChange = (e)=>{
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]:value
        });
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            await updateEmployee(id,{
                ...formData,
                salary:Number(formData.salary)
            });
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            setError('Failed to update Employee');
        }
    }

    if(loading){
        return <h3>Loading Employees....</h3>;
    }

    return(
        <>
        <div>
            <h3>Edit Employee</h3>
            {error && <p>error</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
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
                <br />
                <div>
                    <label>Salary:</label>
                    <input 
                        type="number"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <button type="submit">Edit Employee</button>
            </form>
        </div>
        </>
    )
}