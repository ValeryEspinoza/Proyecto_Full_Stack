import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import '../../Styles/Components_Styles/Register_Styles/RegisterForm.css';
import postData from '../../Services/Post/PostData';
import GetData from '../../Services/Get/GetData';

function RegisterForm({ onSuccess }) {
    // Hooks para manejar el estado
    const [name, setName] = useState(""); // Nombre
    const [lastName, setLastName] = useState(""); // Apellido
    const [emailUser, setEmail] = useState(""); // Correo electrónico
    const [UserName, setUserName] = useState(""); // Correo electrónico
    const [password, setPassword] = useState(""); // Contraseña
    const [password2, setPassword2] = useState(""); // Confirmación de contraseña
    const [access, setAccess] = useState(""); // Rol de acceso
    const [isSubmitting, setIsSubmitting] = useState(false); // Indicador de envío

    // Validación del formulario
    const validateForm = () => {
        if (!name || !lastName || !emailUser || !password || !password2 || !access || !UserName) {
            Swal.fire({
                title: "Registro Fallido",
                text: "Todos los campos deben estar completos.",
                icon: "error",
            });
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailUser)) {
            Swal.fire({
                title: "Registro Fallido",
                text: "Correo electrónico no válido.",
                icon: "error",
            });
            return false;
        }
        if (password !== password2) {
            Swal.fire({
                title: "Registro Fallido",
                text: "Las contraseñas no coinciden.",
                icon: "error",
            });
            return false;
        }
        return true;
    };

    // Manejo del registro
    const handleRegister = async () => {
        if (isSubmitting || !validateForm()) return;

        setIsSubmitting(true);
        try {
            const users = await GetData('register');
            const lastUserId = users[users.length - 1]?.id || 0;
            const newUserId = lastUserId + 1;

            if (!users.find(({ email }) => email === emailUser)) {
                const user = {
                    password,
                    username: UserName,
                    email: emailUser,
                    first_name: name,
                    last_name: lastName,
                    is_superuser: access === "administrador",
                    is_staff: access === "administrador",
                    is_active: true,
                    role: access,
                };

                console.log(user);
                
                const response = await postData('register', user);
                onSuccess("¡Producto enviado exitosamente!");

                if (response && response.id) {
                    Swal.fire({
                        title: "Registro Exitoso!",
                        text: "El usuario se ha registrado correctamente.",
                        icon: "success",
                    });

                    // Reseteamos los campos del formulario
                    setName("");
                    setLastName("");
                    setEmail("");
                    setUserName("");
                    setPassword("");
                    setPassword2("");
                    setAccess("");
                } else {
                    Swal.fire({
                        title: "Registro Fallido",
                        text: "Error al registrar el usuario.",
                        icon: "error",
                    });
                }
            } else {
                Swal.fire({
                    title: "Registro Fallido",
                    text: "El correo ya está en uso.",
                    icon: "error",
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: `Ocurrió un error: ${error.message}`,
                icon: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='bodyRegister2'>
            <div className="form-container">
                <h1 className="form-title">Registro</h1>
                <input className='InputRegister' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' type="text" />
                <input className='InputRegister' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' type="text" />
                <input className='InputRegister' value={emailUser} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="text" />
                <input className='InputRegister' value={UserName} onChange={(e) => setUserName(e.target.value)} placeholder='Username' type="text" />
                <input className='InputRegister' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" />
                <input className='InputRegister' value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder='Confirm Password' type="password" />
                <select className='InputRegister' value={access} onChange={(e) => setAccess(e.target.value)}>
                    <option value="">Select Access</option>
                    <option value="administrador">Administrador</option>
                    <option value="colaborador">Colaborador</option>
                </select>
                <button onClick={handleRegister} className="btn-add" disabled={isSubmitting}>
                    {isSubmitting ? "Registrando..." : "Registrar"}
                </button>
                <Link className='irAHome' to="/Login"><p>Ir a Login</p></Link>
            </div>
        </div>
    );
}

export default RegisterForm;

