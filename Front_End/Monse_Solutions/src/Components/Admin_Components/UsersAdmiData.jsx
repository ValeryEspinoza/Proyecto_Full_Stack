import React, { useState, useEffect } from "react";
import GetData from "../../Services/Get/GetData";
import PutData from "../../Services/Put/PutData";
import DeleteData from "../../Services/Delete/DeleteData";
import PatchData from "../../Services/Patch/PatchData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'font-awesome/css/font-awesome.min.css';
import '../../Styles/Components_Styles/Admin_C_Styles/UsersAdminData.css'; // Asegúrate de cambiar la clase si es necesario
import RegisterForm from "../Register_Components/RegisterForm";
import logoNegroF from '../../Img/Components_Img/logo_negrov.png';

const UsersTable = () => {
  const [Usuarios, SetUsuarios] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");  
  const [editedUser, setEditedUser] = useState(null);
  const [editedField, setEditedField] = useState(null);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredUsuarios = Usuarios.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = (userId) => {
    setIsDropdownOpen(isDropdownOpen === userId ? null : userId);
  };

  useEffect(() => {
    const ObtenerUsuarios = async () => {
      try {
        const response = await GetData("api/register");
        SetUsuarios(response);
        toast.success("Usuarios cargados correctamente.");
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        toast.error("Error al cargar los usuarios.");
      }
    };
    ObtenerUsuarios();
  }, []);

  const Delete = async (user_id) => {
    try {
      await DeleteData('api/register', user_id);
      const updatedUsuarios = await GetData('api/register');
      SetUsuarios(updatedUsuarios);
      toast.success("Usuario eliminado con éxito.");
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
      toast.error("Error al eliminar el usuario.");
    }
  };

  const handleFieldChange = (e, field) => {
    setEditedUser({
      ...editedUser,
      [field]: e.target.value
    });
    setEditedField(field);
  };

  const handleSaveAll = async () => {
    try {
      const userData = {
        id: editedUser.id,
        username: editedUser.username,
        password: editedUser.password,
        first_name: editedUser.first_name,
        last_name: editedUser.last_name,
        email: editedUser.email,
        role: editedUser.role,
        is_superuser: editedUser.is_superuser,
        is_staff: editedUser.is_staff,
        is_active: editedUser.is_active,
        date_joined: editedUser.date_joined,
        last_login: editedUser.last_login,
        groups: editedUser.groups,
      };
      await PutData('api/register', userData, editedUser.id);
      const updatedUsuarios = await GetData('api/register');
      SetUsuarios(updatedUsuarios);
      setEditedUser(null);
      toast.success("Cambios guardados exitosamente.");
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
      toast.error("Error al guardar los cambios.");
    }
  };

  const handleSaveField = async () => {
    try {
      const fieldData = {
        [editedField]: editedUser[editedField]
      };
      await PatchData('api/register', fieldData, editedUser.id);
      const updatedUsuarios = await GetData('api/register');
      SetUsuarios(updatedUsuarios);
      setEditedUser(null);
      toast.success("Campo guardado correctamente.");
    } catch (error) {
      console.error('Error al guardar el cambio específico:', error);
      toast.error("Error al guardar el cambio del campo.");
    }
  };

  const cargarDatos = (userId) => {
    const selectedUser = Usuarios.find(user => user.id === userId);
    if (selectedUser) {
      setEditedUser({ ...selectedUser });
      setEditedField(null);
    }
  };

  return (
    <div className="users-container">
      <ToastContainer />
      <header className="users-header">
        <img src={logoNegroF} alt="Logo" className="users-logo" />
        <h1 className="users-company-name">Usuarios</h1>
        <h2 className="users-title">MS</h2>
      </header>

      <div className="users-table-header">
        <input
          type="text"
          className="users-search-input"
          placeholder="Buscar usuarios..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="users-btn users-add-btn"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          <i className="fa fa-plus"></i> Agregar Usuario
        </button>
      </div>

      {isFormVisible && <RegisterForm />}

      <table className="users-table">
        <thead>
          <tr>
            <th className="users-th">ID</th>
            <th className="users-th">Username</th>
            <th className="users-th">First Name</th>
            <th className="users-th">Last Name</th>
            <th className="users-th">Email</th>
            <th className="users-th">Role</th>
            <th className="users-th">Superuser</th>
            <th className="users-th">Staff</th>
            <th className="users-th">Active</th>
            <th className="users-th">Date Joined</th>
            <th className="users-th">Last Login</th>
            <th className="users-th">Groups</th>
            <th className="users-th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsuarios.map((Usuario) => (
            <tr key={Usuario.id} className="users-tr">
              <td className="users-td">{Usuario.id}</td>
              <td className="users-td">
                {editedUser?.id === Usuario.id ? (
                  <input
                    type="text"
                    value={editedUser.username}
                    onChange={(e) => handleFieldChange(e, "username")}
                  />
                ) : (
                  Usuario.username
                )}
              </td>
              <td className="users-td">
                {editedUser?.id === Usuario.id ? (
                  <input
                    type="text"
                    value={editedUser.first_name}
                    onChange={(e) => handleFieldChange(e, "first_name")}
                  />
                ) : (
                  Usuario.first_name
                )}
              </td>
              <td className="users-td">
                {editedUser?.id === Usuario.id ? (
                  <input
                    type="text"
                    value={editedUser.last_name}
                    onChange={(e) => handleFieldChange(e, "last_name")}
                  />
                ) : (
                  Usuario.last_name
                )}
              </td>
              <td className="users-td">
                {editedUser?.id === Usuario.id ? (
                  <input
                    type="email"
                    value={editedUser.email}
                    onChange={(e) => handleFieldChange(e, "email")}
                  />
                ) : (
                  Usuario.email
                )}
              </td>
              <td className="users-td">
                {editedUser?.id === Usuario.id ? (
                  <input
                    type="text"
                    value={editedUser.role}
                    onChange={(e) => handleFieldChange(e, "role")}
                  />
                ) : (
                  Usuario.role
                )}
              </td>
              <td className="users-td">
                {editedUser?.id === Usuario.id ? (
                  <input
                    type="checkbox"
                    checked={editedUser.is_superuser || false}
                    onChange={(e) => handleFieldChange(e, "is_superuser")}
                  />
                ) : (
                  Usuario.is_superuser ? "Yes" : "No"
                )}
              </td>
              <td className="users-td">
                {editedUser?.id === Usuario.id ? (
                  <input
                    type="checkbox"
                    checked={editedUser.is_staff || false}
                    onChange={(e) => handleFieldChange(e, "is_staff")}
                  />
                ) : (
                  Usuario.is_staff ? "Yes" : "No"
                )}
              </td>
              <td className="users-td">
                {editedUser?.id === Usuario.id ? (
                  <input
                    type="checkbox"
                    checked={editedUser.is_active || false}
                    onChange={(e) => handleFieldChange(e, "is_active")}
                  />
                ) : (
                  Usuario.is_active ? "Yes" : "No"
                )}
              </td>
              <td className="users-td">{Usuario.date_joined}</td>
              <td className="users-td">{Usuario.last_login}</td>
              <td className="users-td">{Usuario.groups}</td>
              <td className="users-td">
                {isDropdownOpen === Usuario.id ? (
                  <div className="users-dropdown">
                    <button className="users-dropdown-item" onClick={() => cargarDatos(Usuario.id)}>Editar</button>
                    <button className="users-dropdown-item" onClick={() => Delete(Usuario.id)}>Eliminar</button>
                  </div>
                ) : (
                  <button className="users-dropdown-btn" onClick={() => toggleDropdown(Usuario.id)}>
                    <i className="fa fa-ellipsis-v"></i>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {(editedUser || editedField) && (
        <button className="users-save-btn" onClick={handleSaveAll}>Guardar Todo</button>
      )}
      {editedUser && (
        <button className="users-save-btn" onClick={handleSaveField}>Guardar Cambios</button>
      )}
    </div>
  );
};

export default UsersTable;