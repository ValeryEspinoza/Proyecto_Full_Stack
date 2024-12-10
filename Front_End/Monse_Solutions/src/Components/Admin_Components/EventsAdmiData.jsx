import React, { useState, useEffect } from "react";
import GetData from "../../Services/Get/GetData";
import PutData from "../../Services/Put/PutData";
import DeleteData from "../../Services/Delete/DeleteData";
import PatchData from "../../Services/Patch/PatchData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'font-awesome/css/font-awesome.min.css';
import '../../Styles/Components_Styles/Admin_C_Styles/EventAdmiData.css';
import EventsForm from "./EventsForm";
import logoNegroF from '../../Img/Components_Img/logo_negrov.png';

const EventsAdmiData = () => {
  const [DatosEventos, SetDatosEventos] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");  
  const [editedEvent, setEditedEvent] = useState(null);
  const [editedField, setEditedField] = useState(null);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredEventos = DatosEventos.filter((event) => {
    return event.tittle && event.tittle.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const toggleDropdown = (eventId) => {
    setIsDropdownOpen(isDropdownOpen === eventId ? null : eventId);
  };

  useEffect(() => {
    const ObtenerEventos = async () => {
      try {
        const response = await GetData("events");
        console.log(response);  // Verifica la estructura de los datos
        SetDatosEventos(response);
        toast.success("Eventos cargados correctamente.");
      } catch (error) {
        console.error("Error al obtener los eventos:", error);
        toast.error("Error al cargar los eventos.");
      }
    };
    ObtenerEventos();
  }, []);

  const Delete = async (event_id) => {
    try {
      await DeleteData('events', event_id);
      const updatedEventos = await GetData('events');
      SetDatosEventos(updatedEventos);
      toast.success("Evento eliminado con éxito.");
    } catch (error) {
      console.error('Error al eliminar el evento:', error);
      toast.error("Error al eliminar el evento.");
    }
  };

  const handleFieldChange = (e, field) => {
    setEditedEvent({
      ...editedEvent,
      [field]: e.target.value
    });
    setEditedField(field);
  };

  const handleSaveAll = async () => {
    if (!editedEvent.tittle || !editedEvent.description || !editedEvent.starting_date || !editedEvent.ending_date) {
      toast.error("Por favor, complete todos los campos antes de guardar.");
      return;
    }

    try {
      const eventData = {
        event_id: editedEvent.event_id,
        tittle: editedEvent.tittle,
        description: editedEvent.description,
        starting_date: editedEvent.starting_date,
        ending_date: editedEvent.ending_date,
        place: editedEvent.place
      };
      await PutData('events', eventData, editedEvent.event_id);
      const updatedEventos = await GetData('events');
      SetDatosEventos(updatedEventos);
      setEditedEvent(null);
      toast.success("Cambios guardados exitosamente.");
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
      toast.error("Error al guardar los cambios.");
    }
  };

  const handleSaveField = async () => {
    try {
      const fieldData = {
        [editedField]: editedEvent[editedField]
      };
      await PatchData('events', fieldData, editedEvent.event_id);
      const updatedEventos = await GetData('events');
      SetDatosEventos(updatedEventos);
      setEditedEvent(null);
      toast.success("Campo guardado correctamente.");
    } catch (error) {
      console.error('Error al guardar el cambio específico:', error);
      toast.error("Error al guardar el cambio del campo.");
    }
  };

  const cargarDatos = (eventId) => {
    const selectedEvent = DatosEventos.find(event => event.event_id === eventId);
    if (selectedEvent) {
      setEditedEvent({ ...selectedEvent });
      setEditedField(null);
    }
  };

  return (
    <div className="events-table-container">
      <ToastContainer />
      <header className="events-header">
        <img src={logoNegroF} alt="Logo" className="events-logo" />
        <h1 className="events-company-name">Eventos</h1>
        <h2 className="events-tittle">MS</h2>
      </header>

      <div className="events-table-header">
        <input
          type="text"
          className="events-search-input"
          placeholder="Buscar eventos..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="events-btn events-add-btn"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          <i className="fa fa-plus"></i> Agregar Evento
        </button>
      </div>

      {isFormVisible && <EventsForm />}

      <table className="events-table">
        <thead>
          <tr>
            <th className="events-th">Título</th>
            <th className="events-th">Descripción</th>
            <th className="events-th">Fecha Inicio</th>
            <th className="events-th">Fecha Fin</th>
            <th className="events-th">Lugar</th>
            <th className="events-th">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredEventos.map((event) => (
            <tr key={event.event_id} className="events-tr">

              <td className="events-td">
                {editedEvent?.event_id === event.event_id ? (
                  <input
                    type="text"
                    value={editedEvent.tittle}
                    onChange={(e) => handleFieldChange(e, "tittle")}
                  />
                ) : (
                  event.tittle
                )}
              </td>
              <td className="events-td">
                {editedEvent?.event_id === event.event_id ? (
                  <input
                    type="text"
                    value={editedEvent.description}
                    onChange={(e) => handleFieldChange(e, "description")}
                  />
                ) : (
                  event.description
                )}
              </td>
              <td className="events-td">
                {editedEvent?.event_id === event.event_id ? (
                  <input
                    type="text"
                    value={editedEvent.starting_date}
                    onChange={(e) => handleFieldChange(e, "starting_date")}
                  />
                ) : (
                  event.starting_date
                )}
              </td>
              <td className="events-td">
                {editedEvent?.event_id === event.event_id ? (
                  <input
                    type="text"
                    value={editedEvent.ending_date}
                    onChange={(e) => handleFieldChange(e, "ending_date")}
                  />
                ) : (
                  event.ending_date
                )}
              </td>
              <td className="events-td">
                {editedEvent?.event_id === event.event_id ? (
                  <input
                    type="text"
                    value={editedEvent.place}
                    onChange={(e) => handleFieldChange(e, "place")}
                  />
                ) : (
                  event.place
                )}
              </td>
              <td className="events-td">
                <button
                  className="events-btn events-edit-btn"
                  onClick={() => cargarDatos(event.event_id)}
                >
                  Editar
                </button>
                <button
                  className="events-btn events-delete-btn"
                  onClick={() => Delete(event.event_id)}
                >
                  Eliminar
                </button>
                {editedEvent?.event_id === event.event_id && (
                  <div className="events-btn-group">
                    <button className="events-btn" onClick={handleSaveAll}>
                      Guardar Todo
                    </button>
                    <button className="events-btn" onClick={handleSaveField}>
                      Guardar Campo
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsAdmiData;
