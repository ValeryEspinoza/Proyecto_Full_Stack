// NotAuthorized.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotAuthorized = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige a la página principal o login después de un breve retraso
    setTimeout(() => {
      navigate('/login'); // Redirige al login (o a la página de inicio)
    }, 3000); // Espera 3 segundos antes de redirigir
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h1>Acceso No Autorizado</h1>
      <p>No tienes permiso para acceder a esta página. Serás redirigido al login.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8d7da',
    color: '#721c24',
  },
};

export default NotAuthorized;
