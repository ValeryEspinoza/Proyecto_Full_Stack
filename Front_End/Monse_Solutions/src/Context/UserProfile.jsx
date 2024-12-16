import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const UserProfile = () => {
  const { user, userRole } = useContext(AuthContext);  // Obtén el user y userRole del contexto

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user ? user.name : "Loading..."}</p>
      <p>Role: {userRole ? userRole 
      : "Loading..."}</p>  {/* Muestra el rol del usuario */}
    </div>
  );
};

export default UserProfile;