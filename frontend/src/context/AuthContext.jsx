import { createContext, useContext, useState } from "react";

const  AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(()=>{
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [token,setToken] = useState(()=>{
        return localStorage.getItem('token');
    });

    const login = (userData, authToken) => {
        localStorage.setItem('user',JSON.stringify(userData));
        localStorage.setItem('token',authToken);
        setUser(userData);
        setToken(authToken);
    }

    const logout = ()=>{
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
        setToken(null);
    }

    const isAuthenticated = Boolean(token);
    
    
    return (
        <>
        <AuthContext.Provider
         value = {{
                user,token,isAuthenticated,login,logout
            }}
        >
           {children}
        </AuthContext.Provider>
        </>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext);
}

