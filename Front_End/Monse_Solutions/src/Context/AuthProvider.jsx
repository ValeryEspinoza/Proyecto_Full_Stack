import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';  // Importamos el contexto
import GetUser from '../Services/Get/GetUsers';

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState( null);
  const [user, setUser] = useState(null);



  useEffect(() => {
    const token = localStorage.getItem('token') 
    setAuthToken(token)
    if (authToken) {
      fetchUserDetails(authToken);
    }
  }, [authToken]);

  const fetchUserDetails = async (token) => {
    try {
      const response = await GetUser('http://192.168.1.87:8000/api/register/', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
      logout(); // Realizar logout en caso de error
    }
  };

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;