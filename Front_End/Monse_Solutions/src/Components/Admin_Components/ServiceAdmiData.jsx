import React, { useState, useEffect } from "react";
import GetData from "../../Services/Get/GetData";
import PutData from "../../Services/Put/PutData";
import DeleteData from "../../Services/Delete/DeleteData";
import PatchData from "../../Services/Patch/PatchData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.min.css";
import "../../Styles/Components_Styles/Admin_C_Styles/ServiceAdmiData.css";
import ServicesForm from "./ServicesForm";
import logoNegroF from "../../Img/Components_Img/logo_negrov.png";
import uploadImageToS3 from "../../Services/S3/UploadImage"; // Nueva función para subir imágenes

const ServicesTable = () => {
  const [DatosServicios, SetDatosServicios] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editedService, setEditedService] = useState(null);
  const [editedField, setEditedField] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Nueva variable para la imagen seleccionada

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
        const response = await GetData("api/services/");
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
      await DeleteData("api/services/", service_id);
      const updatedServicios = await GetData("api/services/");
      SetDatosServicios(updatedServicios);
      toast.success("Servicio eliminado con éxito.");
    } catch (error) {
      console.error("Error al eliminar el servicio:", error);
      toast.error("Error al eliminar el servicio.");
    }
  };

  const handleFieldChange = (e, field) => {
    setEditedService({
      ...editedService,
      [field]: e.target.value,
    });
    setEditedField(field);
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]); // Almacena la imagen seleccionada
  };

  const handleSaveAll = async () => {
    try {
      let imageUrl = editedService.imagen_url;

      // Subir imagen a AWS S3 si se seleccionó una nueva
      if (selectedImage) {
        imageUrl = await uploadImageToS3(selectedImage); // Sube la imagen y obtiene la URL
      }

      const serviceData = {
        service_id: editedService.service_id,
        service: editedService.service,
        description: editedService.description,
        category: editedService.category,
        imagen_url: imageUrl,
      };

      await PutData("api/services", serviceData, editedService.service_id);
      const updatedServicios = await GetData("api/services/");
      SetDatosServicios(updatedServicios);
      setEditedService(null);
      setSelectedImage(null);
      toast.success("Cambios guardados exitosamente.");
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
      toast.error("Error al guardar los cambios.");
    }
  };

  const cargarDatos = (serviceId) => {
    const selectedService = DatosServicios.find(
      (service) => service.service_id === serviceId
    );
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

      {isFormVisible && <ServicesForm />}

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
                  <>
                    <input type="file" onChange={handleImageChange} />
                    {selectedImage && <span>{selectedImage.name}</span>}
                  </>
                ) : (
                  <a
                    href={Servicios.imagen_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Servicios.imagen_url}
                      alt="Service"
                      className="services-img"
                    />
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
                        <button
                          className="services-dropdown-btn services-save-btn"
                          onClick={handleSaveAll}
                        >
                          Save All
                        </button>
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
