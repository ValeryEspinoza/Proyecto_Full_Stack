import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext'; // Importamos el contexto

const ProtectedRoute = ({ component: Component }) => {
  const { authToken } = useContext(AuthContext); // Obtenemos el token del contexto
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Estado para manejar la carga de autenticación

  useEffect(() => {
    const checkAuthentication = async () => {
      if (authToken) {
        const response = await fetch('/api/validate-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
        });

        if (response.ok) {
          setIsAuthenticated(true); // El token es válido
        } else {
          setIsAuthenticated(false); // El token no es válido
        }
      } else {
        setIsAuthenticated(false); // No hay token
      }
    };

    checkAuthentication();
  }, [authToken]); // Se ejecuta cada vez que el token cambia

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Mientras se verifica la autenticación, muestra un "Cargando..."
  }

  return isAuthenticated ? <Component /> : <Navigate to="/NotAuthorized" />; // Redirige a login si no está autenticado
};

export default ProtectedRoute;
