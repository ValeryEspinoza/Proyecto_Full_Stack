import React, { createContext, useState, useEffect } from 'react';
import postData from '../Services/Post/PostData';
import { Navigate } from 'react-router-dom';


// Creamos el contexto para la autenticación
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState({});
  const [userRole, setUserRole] = useState("");


  const login = async (credentials) => {
    try {
      console.log("Credenciales:", credentials);

      const response = await postData('token', credentials);
      console.log(response);
      
      if (!response) {
        throw new Error('Credenciales incorrectas');
      }


    const access = response.access
    const refresh = response.refresh
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);

    setAuthToken(response)


    const userResponse = await fetch('http://192.168.1.87:8000/api/user/profile/', {
      headers: {
        Authorization: `Bearer ${response.access}`, 
      },
    });
    
  
      if (userResponse.ok) {
        const data = await userResponse.json();
        console.log(data);
        
        const grupo = data.groups[0]
        const userData = {
          name: data.
          first_name,
          last_Name: data.last_name
        }
        localStorage.setItem('ALSKIE', grupo);
        localStorage.setItem('userData', JSON.stringify(userData));
        setUser(data);
        setUserRole(grupo);  // Asume que los datos contienen un campo 'role'

        return { success: true, data };
      } else {
        throw new Error('Error al obtener los datos del usuario');
      }

    } catch (error) {
      console.error('Error en el login:', error);
      return { success: false, message: error.message }; // Retornamos error
    }
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    setUserRole("");
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('ALSKIE');
    localStorage.removeItem('userData');
  };

  const isAuthenticated = () => {
    return authToken !== null && authToken !== undefined && authToken !== "";
  };

  
  return (
    <AuthContext.Provider value={{
      authToken,
      user,
      userRole,
      login,
      logout,
      isAuthenticated,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
