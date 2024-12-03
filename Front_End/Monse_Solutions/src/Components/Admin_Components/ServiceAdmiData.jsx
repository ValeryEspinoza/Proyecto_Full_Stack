import React from "react";
import { useState, useEffect } from "react";
import GetData from "../../Services/Get/GetData";
import DeleteData from "../../Services/Delete/DeleteData";
import 'font-awesome/css/font-awesome.min.css'; // Importa Font Awesome
import '../../Styles/Components_Styles/Admin_C_Styles/ServiceAdmiData.css'
import ServicesForm from "./ServicesForm";
import logoNegroF from '../../Img/Components_Img/logo_negrov.png'


const ServicesTable = () => {
  const [DatosServicios, SetDatosServicios] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);  // Estado para mostrar/ocultar el formulario
  const [searchTerm, setSearchTerm] = useState("");  // Estado para el filtro de búsqueda


  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredServicios = DatosServicios.filter((service) =>
    service.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = (serviceId) => {
    setIsDropdownOpen(isDropdownOpen === serviceId ? null : serviceId);
  };

  useEffect(() => {
    const ObtenerServicios = async () => {
      try {
        const response = await GetData("api/services/");
        SetDatosServicios(response); // `response` ya contiene los datos
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
      }
    };

    ObtenerServicios();
  }, []);

  const Delete = async (service_id) => {
    try {
      const response = await DeleteData('api/services/', service_id); 
      console.log(response);
      
      // Después de eliminar, vuelve a cargar los servicios
      const updatedServicios = await GetData('api/services/');
      SetDatosServicios(updatedServicios); // Actualiza el estado con los datos más recientes
    } catch (error) {
      console.error('Error al eliminar el servicio:', error);
    }
  };
  

  return (
    <div className="services-table-container">
    {/* Sección con el logo y el nombre de la empresa */}
    <header className="services-header">
        <img 
            src={logoNegroF}
            alt="Logo" 
            className="services-logo"  // Clase personalizada
        />
        <h1 className="services-company-name">Servicios</h1>
        <h2 className="services-title">MS</h2>
    </header>

    {/* Sección de filtro y agregar servicio */}
    <div className="services-table-header">
      <input
        type="text"
        className="services-search-input"
        placeholder="Search services..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button
        className="services-btn services-add-btn"
        onClick={toggleFormVisibility}
      >
        <i className="fa fa-plus"></i> Add Service
      </button>
    </div>

    {/* Mostrar el formulario solo si isFormVisible es true */}
    {isFormVisible && (
      <div className="services-form">
        <ServicesForm /> {/* Aquí se incluye el formulario */}
      </div>
    )}

    {/* Tabla tradicional, visible solo en pantallas grandes */}
    <table className="services-table">
      <thead>
        <tr>
          <th className="services-th">Service ID</th>
          <th className="services-th">Service</th>
          <th className="services-th">Description</th>
          <th className="services-th">Category ID</th>
          <th className="services-th">Image</th>
          <th className="services-th">Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredServicios.map((Servicios) => (
          <tr key={Servicios.service_id} className="services-tr">
            <td className="services-td">{Servicios.service_id}</td>
            <td className="services-td">{Servicios.service}</td>
            <td className="services-td">{Servicios.description}</td>
            <td className="services-td">{Servicios.category}</td>
            <td className="services-td">
              <a href={Servicios.imagen_url} target="_blank" rel="noopener noreferrer">
                <img
                  src={Servicios.imagen_url}
                  alt="Service Image"
                  className="services-img"
                />
              </a>
            </td>
            
            <td className="services-td">
              <div className="services-btn-container">
                <button
                  className="services-btn services-more-btn"
                  onClick={() => toggleDropdown(Servicios.service_id)}
                >
                  <i className="fa fa-ellipsis-v"></i>
                </button>
                {isDropdownOpen === Servicios.service_id && (
                  <div className="services-dropdown">
                    <button className="services-dropdown-btn services-edit-btn">
                      <i className="fa fa-pencil"></i> Edit
                    </button>
                    <button   onClick={() => Delete(Servicios.service_id)} className="services-dropdown-btn services-delete-btn">
                      <i className="fa fa-trash"></i> Delete
                    </button>
                  </div>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Vista de ficha para pantallas pequeñas */}
    <div className="services-cards">
      {filteredServicios.map((Servicios) => (
        <div key={Servicios.service_id} className="services-card">
          <img
            src={Servicios.image_url}
            alt={Servicios.service}
            className="services-card-img"
          />
          <div className="services-card-content">
            <p><strong>ID:</strong> {Servicios.service_id}</p>
            <p><strong>Name:</strong> {Servicios.service}</p>
            <p><strong>Description:</strong> {Servicios.description}</p>
            <p><strong>Category:</strong> {Servicios.category}</p>
            <div className="services-card-actions">
              <button className="services-btn services-edit-btn">
                <i className="fa fa-pencil"></i> Edit
              </button>
              <button className="services-btn services-delete-btn">
                <i className="fa fa-trash"></i> Delete
              </button>
            </div>
          </div>
          <hr className="services-card-separator" />
        </div>
      ))}
    </div>
  </div>
  );
};

export default ServicesTable;
