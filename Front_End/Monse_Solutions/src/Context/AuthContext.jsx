import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser ] = useState(null); // State to hold the authenticated user

    const login = (token) => {
        // Decode the token to get user data (you might want to use a library like jwt-decode)
        const userData = decodeToken(token); // Implement decodeToken to extract user info
        setUser (userData); // Set the authenticated user
    };

    const logout = () => {
        setUser (null); // Clear the authenticated user
        localStorage.removeItem('token'); // Remove token from local storage
    };

    const value = {
        user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Function to decode the JWT token
const decodeToken = (token) => {
    // Use a library like jwt-decode or implement your own decoding logic
    const base64Url = token.split('.')[1];
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

export default AuthContext;