import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import {AuthContext} from '../Context/AuthContext';



const ProtectedRoute = ({ children, requiredRole}) => {
  const access = localStorage.getItem('accessToken')
  const refresh = localStorage.getItem('refreshToken');
  const role = localStorage.getItem('ALSKIE');
  const { userRole } = useContext(AuthContext);
 

  
  
  // Si no hay un token de acceso y el rol requerido no es "administrador", redirige a login
  if (!(userRole) && !(access) && !(refresh) && !(role) && !(role == requiredRole)) {
    return <Navigate to="/login" />;  // Redirige si el usuario no está autenticado
  }

  
  
  // Si todo está bien (usuario autenticado), renderiza los componentes hijos
  return children;
};

export default ProtectedRoute;
