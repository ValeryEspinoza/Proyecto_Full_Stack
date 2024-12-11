import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';
import jwt_decode from "jsonwebtoken"; // Import the library for decoding and verifying the JWT.

const ProtectedRoutes = ({ component: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
        const response = await fetch('/api/protected-endpoint/', {
            method: 'GET',
            credentials: 'include', // Include cookies in request
        });
        
        if (response.ok) {
            setAutentication(true);
        } else {
            setAutentication(false);
        }
    };

    checkAuthentication();
}, []);

  return isAuthenticated 
    ? <Component /> 
    : <Navigate to="/login" />;
};

export default ProtectedRoutes;
