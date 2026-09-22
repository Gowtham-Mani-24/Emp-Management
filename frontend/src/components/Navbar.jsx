import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

export const Navbar = ()=>{
    const navigate = useNavigate();

    const { user,isAuthenticated,logout }  = useAuth();

    const handleLogout = ()=>{
        logout();
        navigate('/login');
    }

    return (
        <>
        <Link to='/dashboard'>Dashboard</Link>
        {' | '}
        <Link to='/employees/add'>Add Employee</Link>
        {' | '}
        <span>
            Welcome, {user?.name}
        </span>
        {' | '}
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}