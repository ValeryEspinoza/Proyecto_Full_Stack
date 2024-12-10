import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // State for authenticated user

    const login = (token) => {
        const userData = decodeToken(token); // Decode the JWT token for user data
        setUser(userData); // Set user data in state
        localStorage.setItem('token', token); // Save token to localStorage
    };

    const logout = () => {
        setUser(null); // Clear user data
        localStorage.removeItem('token'); // Remove token from localStorage
    };

    const value = {
        user,
        login, // Provide login function to context
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Function to decode JWT token
const decodeToken = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
            .join('')
    );

    return JSON.parse(jsonPayload);
};

export default AuthContext;