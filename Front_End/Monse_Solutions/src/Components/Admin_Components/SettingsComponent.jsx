import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Estilo de react-toastify
import '../../Styles/Components_Styles/Admin_C_Styles/SettingsComponent.css';

const SettingsComponet = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: false,
    pushNotifications: false,
  });

  const [selectedTheme, setSelectedTheme] = useState('light');

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [name]: checked,
    }));
  };

  const handleThemeChange = (e) => {
    setSelectedTheme(e.target.value);
  };

  const handleSave = () => {
    // Mostrar notificación de éxito usando React Toast
    toast.success('Cambios guardados correctamente!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // Duración de la notificación
    });
  };

  const handleCancel = () => {
    // Mostrar notificación de error usando React Toast
    toast.error('Cambios cancelados.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // Duración de la notificación
    });
  };

  return (
    <div className="settings-container">
      <h1 className="settings-header">Configuración</h1>

      <div className="settings-user-info">
        <h2 className="settings-subheader">Información de usuario</h2>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userInfo.name}
          onChange={handleUserInfoChange}
          className="settings-input"
        />
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userInfo.email}
          onChange={handleUserInfoChange}
          className="settings-input"
        />
      </div>

      <div className="settings-notifications">
        <h2 className="settings-subheader">Notificaciones</h2>
        <div className="settings-checkbox">
          <input
            type="checkbox"
            id="emailNotifications"
            name="emailNotifications"
            checked={notifications.emailNotifications}
            onChange={handleNotificationChange}
          />
          <label htmlFor="emailNotifications">Notificaciones por correo electrónico</label>
        </div>
        <div className="settings-checkbox">
          <input
            type="checkbox"
            id="pushNotifications"
            name="pushNotifications"
            checked={notifications.pushNotifications}
            onChange={handleNotificationChange}
          />
          <label htmlFor="pushNotifications">Notificaciones push</label>
        </div>
      </div>

      <div className="settings-theme-section">
        <h2 className="settings-subheader">Seleccionar tema</h2>
        <div className="settings-theme-options">
          <div>
            <input
              type="radio"
              id="light"
              name="theme"
              value="light"
              checked={selectedTheme === 'light'}
              onChange={handleThemeChange}
            />
            <label htmlFor="light">Claro</label>
          </div>
          <div>
            <input
              type="radio"
              id="dark"
              name="theme"
              value="dark"
              checked={selectedTheme === 'dark'}
              onChange={handleThemeChange}
            />
            <label htmlFor="dark">Oscuro</label>
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button className="settings-btn" onClick={handleSave}>Guardar cambios</button>
        <button className="settings-btn-secondary" onClick={handleCancel}>Cancelar</button>
      </div>

      {/* Contenedor para los Toasts */}
      <ToastContainer />
    </div>
  );
};

export default SettingsComponet;

