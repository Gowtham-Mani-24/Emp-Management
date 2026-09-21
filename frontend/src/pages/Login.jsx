import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

export const Login = ()=>{

    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
            setError('');
            setLoading(true);
        try {
            const data = await loginUser(formData);
            localStorage.setItem('token',data.token);
            localStorage.setItem('user',JSON.stringify(data.user));
            
            navigate('/dashboard');
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "login failed"
            )
        }
        finally{
            setLoading(false);
        }
    }
    return (
        <>
        <div>
            <h1>Login Page</h1>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input 
                    type="email"
                    name="email"
                    value={formData.value}
                    onChange={handleChange}
                    required
                    />
                </div>
                <br />
                <div>
                    <label>Password:</label>
                    <input 
                    type="password"
                    name="password"
                    value={formData.value}
                    onChange={handleChange}
                    required
                    />
                </div>
                <br />
                <button type="Submit" disabled={loading}>
                    {loading ? "logging in..." : "Login"}
                </button>
            </form>
        </div>
        </>
    )
}