import { useEffect, useState } from "react"
import { getEmployees } from "../api/employeeApi";


export const EmployeeList = ()=>{

    const [employees,setEmployees] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');

    useEffect(()=>{
        fetchEmployees();
    },[])

    const fetchEmployees = async ()=>{
        try{
            const data = await getEmployees();
            setEmployees(data);
        }
        catch(error){
            console.error(error);
            setError('Failed to fetch employees');
        }
        finally{
            setLoading(false);
        }
    }

    if(loading){
        return <h2>Loading Employees...</h2>;
    }

    if(error){
        return <h2>{error}</h2>;
    }



    return (
        <>
            <div>
                <h3>Employee List</h3>

                {employees.map((ele)=>(
                    <div key={ele._id}>
                        <p>Name:{ele.name}</p>
                        <p>Role:{ele.role}</p>
                        <p>Salary:{ele.salary}</p>
                    </div>
                ))}
            </div>
        </>
    )
}