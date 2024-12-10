import React, { useState, useEffect } from "react";
import GetData from "../../Services/Get/GetData";
import PutData from "../../Services/Put/PutData";
import DeleteData from "../../Services/Delete/DeleteData";
import PatchData from "../../Services/Patch/PatchData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'font-awesome/css/font-awesome.min.css';
import '../../Styles/Components_Styles/Admin_C_Styles/ServiceAdmiData.css';
import ServicesForm from "./ServicesForm";
import logoNegroF from '../../Img/Components_Img/logo_negrov.png';
import Amazon from "../../Services/Post/Amazon";



const ServicesTable = () => {
  const [DatosServicios, SetDatosServicios] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");  
  const [editedService, setEditedService] = useState(null);
  const [editedField, setEditedField] = useState(null);
  const [imageFile, setImageFile] = useState(null); // Nueva variable de estado para manejar el archivo de imagen



  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredServicios = DatosServicios.filter((service) =>
    service.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = (serviceId) => {
    setIsDropdownOpen(isDropdownOpen === serviceId ? null : serviceId);
  };

  useEffect(() => {
    const ObtenerServicios = async () => {
      try {
        const response = await GetData("services");
        SetDatosServicios(response);
        toast.success("Servicios cargados correctamente.");
      } catch (error) {
        console.error("Error al obtener los servicios:", error);
        toast.error("Error al cargar los servicios.");
      }
    };
    ObtenerServicios();
  }, []);



  const Delete = async (service_id) => {
    try {
      await DeleteData('services', service_id);
      const updatedServicios = await GetData('services');
      SetDatosServicios(updatedServicios);
      toast.success("Servicio eliminado con éxito.");
    } catch (error) {
      console.error('Error al eliminar el servicio:', error);
      toast.error("Error al eliminar el servicio.");
    }
  };

  const handleFieldChange = (e, field) => {
    setEditedService({
      ...editedService,
      [field]: e.target.value
    });
    setEditedField(field);
  };

  // Manejo de cambio de archivo de imagen con renombrado
  const handleImageChange = async (e, imagenDataBase) => {
    const file = e.target.files[0]; // Obtener el archivo seleccionado
    const url = imagenDataBase; // URL base de la imagen
  
    if (file) {
      // Obtener el nombre del archivo y la extensión
      const fileName = file.name;
      const extension = fileName.split('.').pop();
  
      // Encontrar la última barra y el primer punto después de ella para obtener la parte final de la URL
      const start = url.lastIndexOf("/") + 1;
      const end = url.indexOf(".", start);
      const result = url.substring(start, end);
  
      // Crear el nuevo nombre con la extensión original
      const newName = result + "." + extension;
      console.log('Nuevo nombre del archivo:', newName);
  
      // Aquí renombramos el archivo para que tenga el nuevo nombre
      const renamedFile = new File([file], newName, { type: file.type });
  
      // Establecer el nuevo archivo en el estado, manteniendo el resto de la información en `editedService`
      setImageFile(renamedFile); // Guardar el archivo renombrado en el estado
      setEditedService({
        ...editedService,
        imagen_url: renamedFile, // Guardar el archivo completo con el nuevo nombre en el estado de `editedService`
      });
    }
  };

  const handleSaveAll = async () => {
    try {      
      // Crear el objeto de datos del servicio a actualizar
      const serviceData = {
        service_id: editedService.service_id,
        service: editedService.service,
        description: editedService.description,
        category: editedService.category,
        imagen_url: editedService.imagen_url
      };

      // Si hay un archivo de imagen seleccionado, cargarla a Amazon
      if (imageFile) {
        // Aquí se realiza la carga a Amazon
        const uploadedImageUrl = await Amazon(imageFile);  // Espera la URL cargada desde Amazon
        serviceData.imagen_url = uploadedImageUrl; // Asigna la URL de la imagen subida
      }

      // Enviar la solicitud PUT con los datos del servicio actualizados
      await PutData('services', serviceData, editedService.service_id);
      const updatedServicios = await GetData('services');
      SetDatosServicios(updatedServicios);
      setEditedService(null);
      setImageFile(null); // Limpiar el archivo después de guardar
      toast.success("Cambios guardados exitosamente.");
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
      toast.error("Error al guardar los cambios.");
    }
  };



  const cargarDatos = (serviceId) => {
    const selectedService = DatosServicios.find(service => service.service_id === serviceId);
    if (selectedService) {
      setEditedService({ ...selectedService });
      setEditedField(null);
    }
  };

  return (
    <div className="services-table-container">
      <ToastContainer />
      <header className="services-header">
        <img src={logoNegroF} alt="Logo" className="services-logo" />
        <h1 className="services-company-name">Servicios</h1>
        <h2 className="services-title">MS</h2>
      </header>

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
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          <i className="fa fa-plus"></i> Add Service
        </button>
      </div>

      {isFormVisible && <ServicesForm a />}
      

      <table className="services-table">
        <thead>
          <tr>
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

              <td className="services-td">
                {editedService?.service_id === Servicios.service_id ? (
                  <input
                    type="text"
                    value={editedService.service}
                    onChange={(e) => handleFieldChange(e, "service")}
                  />
                ) : (
                  Servicios.service
                )}
              </td>
              <td className="services-td">
                {editedService?.service_id === Servicios.service_id ? (
                  <input
                    type="text"
                    value={editedService.description}
                    onChange={(e) => handleFieldChange(e, "description")}
                  />
                ) : (
                  Servicios.description
                )}
              </td>
              <td className="services-td">
                {editedService?.service_id === Servicios.service_id ? (
                  <input
                    type="text"
                    value={editedService.category}
                    onChange={(e) => handleFieldChange(e, "category")}
                  />
                ) : (
                  Servicios.category
                )}
              </td>
              <td className="services-td">
                {editedService?.service_id === Servicios.service_id ? (
                  <input
                    type="file"
                    onChange={(e) => handleImageChange(e, Servicios.imagen_url)} // Llamar a la función para manejar el archivo
                  />
                ) : (
                  <a href={Servicios.imagen_url} target="_blank" rel="noopener noreferrer">
                    <img src={Servicios.imagen_url} alt="Service Image" className="services-img" />
                  </a>
                )}
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
                      {editedService?.service_id === Servicios.service_id ? (
                        <>
                          <button
                            className="services-dropdown-btn services-save-btn"
                            onClick={handleSaveAll}
                          >
                            SAVE
                          </button>

                        </>
                      ) : (
                        <>
                          <button
                            className="services-dropdown-btn services-edit-btn"
                            onClick={() => cargarDatos(Servicios.service_id)}
                          >
                            <i className="fa fa-pencil"></i> Edit
                          </button>
                          <button
                            className="services-dropdown-btn services-delete-btn"
                            onClick={() => Delete(Servicios.service_id)}
                          >
                            <i className="fa fa-trash"></i> Delete
                          </button>
                        </>
                      )}

                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
