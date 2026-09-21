import { useEffect, useState } from "react"
import { deleteEmployee, getEmployees } from "../api/employeeApi";
import { Link } from "react-router-dom";


export const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchEmployees();
    }, [])

    const fetchEmployees = async () => {
        try {
            const data = await getEmployees();
            setEmployees(data);
        }
        catch (error) {
            console.error(error);
            setError('Failed to fetch employees');
        }
        finally {
            setLoading(false);
        }
    }

    const handleDelete = async (id)=>{
        const confirmDelete = window.confirm("Are you sure to delete this employee???...");
        if(!confirmDelete){
            return;
        }
        try {
            await deleteEmployee(id);
            setEmployees(employees.filter((ele)=>ele._id !== id));
        } catch (error) {
            
        }
    }

    if (loading) {
        return <h2>Loading Employees...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }



    return (
        <>
            <div>
                <h2>Employee List</h2>
                <Link to='/employees/add'>Add Employee</Link>
                <table border='1' cellPadding='10'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length ===0 ?(
                            <tr>
                                <td colSpan="4">
                                    No emplyees Found
                                </td>
                            </tr>
                        ):(
                            employees.map((ele) => (
                            <tr key={ele._id}>
                                <td>{ele.name}</td>
                                <td>{ele.role}</td>
                                <td>{ele.salary}</td>
                                <td>
                                    <Link to={`/employees/edit/${ele._id}`}>Edit</Link>{'|'}
                                    <button onClick={()=>handleDelete(ele._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}