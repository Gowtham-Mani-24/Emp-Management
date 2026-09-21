import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";

const Register = () => {

    const navigate = useNavigate();

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })

    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);

    const handleChange = (e)=>{
        const {name,value} = e.target;

        setFormData({
            ...formData,
            [name]:value
        });
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        setError('');
        setLoading(true);

        try {
            await registerUser(formData);

            navigate('/login');
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "registration Failed"
            )
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <>
        <div>
            <h1>Register Page</h1>
            {error &&<p>{error}</p>}

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
                    <label>Email:</label>
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
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
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <br />
                <button type="submit" disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
        </>
    );
};

export default Register;