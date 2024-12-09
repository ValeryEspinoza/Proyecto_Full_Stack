import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "../../Styles/Components_Styles/Register_Styles/RegisterCliente.css";
import { Link } from 'react-router-dom';
import iconRegister from "../../Img/Components_Img/icon_register.png";
import postData from '../../Services/Post/PostData';
import GetData from '../../Services/Get/GetData';

function RegisterClienteForm() {
  const [cedula, setCedula] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [language, setLanguage] = useState(1);
  const [role, setRole] = useState("cliente");
  const [isSuperUser, setIsSuperUser] = useState(false);
  const [active, setActive] = useState(true);
  const [isStaff, setIsStaff] = useState(false);
  const [names, setNames] = useState("");
  const [lastNames, setLastNames] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función para concatenar nombres y apellidos
  const concatenateNames = (firstName, secondName) => `${firstName} ${secondName}`;

  // Manejo de cambios de cédula y obtención de datos
  const handleCedulaChange = async (e) => {
    const cedulaInput = e.target.value;
    setCedula(cedulaInput);

    if (cedulaInput.length >= 9) {
      try {
        const response = await fetch(`https://api.hacienda.go.cr/fe/ae?identificacion=${cedulaInput}`);
        if (!response.ok) throw new Error('Error al obtener los datos de la cédula');
        const data = await response.json();

        if (data.nombre) {
          const fullName = data.nombre.trim();
          setFullName(fullName);

          const nameParts = fullName.split(' ');
          const firstName = nameParts[0] || "";
          const secondName = nameParts[1] || "";
          const firstLastName = nameParts[nameParts.length - 2] || "";
          const secondLastName = nameParts[nameParts.length - 1] || "";

          setNames(concatenateNames(firstName, secondName));
          setLastNames(concatenateNames(firstLastName, secondLastName));

          toast.success("Cédula encontrada y datos completados automáticamente");
        } else {
          toast.error("No se encontró un usuario con esa cédula.");
        }
      } catch (error) {
        toast.error(`Error al obtener los datos: ${error.message}`);
      }
    }
  };

  // Validación del formulario
  const validateForm = () => {
    if (!cedula || cedula.length < 9) {
      toast.error("La cédula debe tener al menos 9 dígitos.");
      return false;
    }
    if (!fullName) {
      toast.error("El nombre completo no puede estar vacío.");
      return false;
    }
    if (!emailUser || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailUser)) {
      toast.error("El correo electrónico no es válido.");
      return false;
    }
    if (!userName) {
      toast.error("El nombre de usuario no puede estar vacío.");
      return false;
    }
    if (!password || password.length < 8) {
      toast.error("La contraseña debe tener al menos 8 caracteres.");
      return false;
    }
    if (password !== password2) {
      toast.error("Las contraseñas no coinciden.");
      return false;
    }
    return true;
  };

  // Función para manejar el registro
  const handleRegister = async () => {
    if (isSubmitting || !validateForm()) return;

    setIsSubmitting(true);
    try {
      // Obtener los usuarios y clientes existentes para comprobar duplicados
      const users = await GetData('api/register/');
      const clients = await GetData('api/clients/');

      const lastUserId = users[users.length - 1]?.id || 0;
      const newUserId = lastUserId + 1;

      const lastClientId = clients[clients.length - 1]?.client_id || 0;
      const newClientId = lastClientId + 1;
      console.log(cedula);
      
      console.log(        !users.find(({ email }) => email === emailUser) && 
      !users.find(({ username }) => username === userName));
      
//Convertir a un objeto y pasarlo a PostData('api/register')

      // Verificar si el correo o el nombre de usuario ya existen
      if (
        !users.find(({ email }) => email === emailUser) && 
        !users.find(({ username }) => username === userName)
      ) {   
        // Crear el objeto de usuario
        const user = {
          password: password,
          username: userName,
          email: emailUser,
          first_name: names,
          last_name: lastNames,
          is_superuser: isSuperUser,
          is_staff: isStaff,
          is_active: active,
          role: role
        };

   
        
        // Realizar el envío de datos a las API correspondientes
        const response = await postData('api/register', user);
        setIsSubmitting(false); // Deshabilitar el botón de envío después de recibir la respuesta
        
        if (!response || !response.id) {
          toast.error("Error al registrar el usuario.");
          return;
        }
        
        toast.success("Registro exitoso. El usuario se ha creado correctamente.");
        // Aquí puedes redirigir al usuario a otra página si lo deseas
        
      } else {
        toast.error("Verifica los campos: el usuario o el correo ya existen.");
      }
    } catch (error) {
      toast.error(`Error al registrar usuario: ${error.message}`);
      console.error(error);  // Para poder depurar el error completo
    } finally {
      
    }
  };

  return (
    <div className='bodyRegister'>
      <ToastContainer />
      <div className="divTitleRegister">
        <div className="title-content">
          <h1 className="register">Register</h1>
          <img src={iconRegister} alt="Register Icon" className="iconRegister" />
        </div>
      </div>
      <div className="register-container">
        <div className="divInputRegister">
          <input
            className='input-register'
            placeholder='Cédula'
            value={cedula}
            onChange={handleCedulaChange} 
          />
        </div>

        <div className="divInputRegister">
          <input
            className='input-register disabled-input'
            value={fullName}
            placeholder='Full Name'
            readOnly
          />
        </div>

        <div className="divInputRegister">
          <input
            className='input-register'
            value={emailUser}
            onChange={(e) => setEmailUser(e.target.value)}
            placeholder='Email'
          />
        </div>

        <div className="divInputRegister">
          <input
            className='input-register'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='UserName'
          />
        </div>

        <div className="divInputRegister">
          <input
            className='input-register'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder='Phone Number'
          />
        </div>

        <div className="divInputRegister">
          <input
            className='input-register'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type="password"
          />
        </div>

        <div className="divInputRegister">
          <input
            className='input-register'
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder='Enter your password again'
            type="password"
          />
        </div>

        <select 
          className="select-language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value={0} disabled>Choose a language</option>
          <option value={1}>English</option>
          <option value={2}>Español</option>
          <option value={3}>Français</option>
        </select>

        <br /><br />
        <button onClick={handleRegister} className="btn-Register" disabled={isSubmitting}>
          {isSubmitting ? "Registrando..." : "Register"}
        </button><br />
        <Link className='irALogin' to="/Login">Ir a Login</Link>
      </div>
    </div>
  );
}

export default RegisterClienteForm;