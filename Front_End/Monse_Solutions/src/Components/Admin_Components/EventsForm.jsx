import React, { useState } from 'react';
import '../../Styles/Components_Styles/Admin_C_Styles/EventsForm.css';
import postData from '../../Services/Post/PostData';

function EventsForm() {
  const [eventData, setEventData] = useState({
    tittle: "",
    description: "",
    starting_date: "",
    ending_date: "",
    place: "",
  });

  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState(""); // Estado para el mensaje de alerta
  const [alertType, setAlertType] = useState(""); // Estado para el tipo de mensaje (success/error)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
    // Limpiar error para el campo actual
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!eventData.tittle) {
      formErrors.tittle = "Tittle is required.";
    }
    if (!eventData.description) {
      formErrors.description = "Description is required.";
    }
    if (!eventData.starting_date) {
      formErrors.starting_date = "Starting date is required.";
    }
    if (!eventData.ending_date) {
      formErrors.ending_date = "Ending date is required.";
    } else if (new Date(eventData.starting_date) > new Date(eventData.ending_date)) {
      formErrors.ending_date = "Ending date must be after starting date.";
    }
    if (!eventData.place) {
      formErrors.place = "Place is required.";
    }
    
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await postData('/api/events/', eventData);
      console.log("Evento enviado:", eventData);
      
      // Mensaje de éxito
      setAlertMessage("Evento creado exitosamente.");
      setAlertType("success"); // Tipo de mensaje: éxito

      // Mostrar el mensaje por 3 segundos antes de restablecer el formulario
      setTimeout(() => {
        // Restablecer el formulario después de mostrar el mensaje
        setEventData({
          tittle: "",
          description: "",
          starting_date: "",
          ending_date: "",
          place: "",
        });
        setErrors({});
        setAlertMessage(""); // Eliminar el mensaje de alerta
      }, 3000); // 3000 ms = 3 segundos

    } catch (error) {
      console.error("Error al enviar el evento:", error);
      
      // Mensaje de error
      setAlertMessage("Error al crear el evento. Por favor, inténtalo de nuevo.");
      setAlertType("error"); // Tipo de mensaje: error

      // Mostrar el mensaje por 3 segundos antes de restablecer el formulario
      setTimeout(() => {
        setAlertMessage(""); // Eliminar el mensaje de alerta
      }, 3000); // 3000 ms = 3 segundos
    }
  };

  return (
    <div>
      {alertMessage && (
        <div className={`alert ${alertType}`}>
          {alertMessage}
        </div>
      )} {/* Mostrar mensaje de alerta */}
      
      <form className="event-form-container" onSubmit={handleSubmit}>
        <div className="event-form-group">
          <label htmlFor="tittle" className="event-label">Tittle</label>
          <input
            type="text"
            id="tittle"
            name="tittle"
            value={eventData.tittle} // Asegurarse de que el campo sea controlado
            onChange={handleChange}
            className="event-input"
            placeholder="Enter the tittle"
          />
          {errors.tittle && <span className="error">{errors.tittle}</span>}
        </div>
        
        <div className="event-form-group">
          <label htmlFor="description" className="event-label">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={eventData.description} // Asegurarse de que el campo sea controlado
            onChange={handleChange}
            className="event-input"
            placeholder="Enter the description"
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        
        <div className="event-form-group">
          <label htmlFor="starting_date" className="event-label">Starting Date</label>
          <input
            type="date"
            id="starting_date"
            name="starting_date"
            value={eventData.starting_date} // Asegurarse de que el campo sea controlado
            onChange={handleChange}
            className="event-input"
          />
          {errors.starting_date && <span className="error">{errors.starting_date}</span>}
        </div>
        
        <div className="event-form-group">
          <label htmlFor="ending_date" className="event-label">Ending Date</label>
          <input
            type="date"
            id="ending_date"
            name="ending_date"
            value={eventData.ending_date} // Asegurarse de que el campo sea controlado
            onChange={handleChange}
            className="event-input"
          />
          {errors.ending_date && <span className="error">{errors.ending_date}</span>}
        </div>
        
        <div className="event-form-group">
          <label htmlFor="place" className="event-label">Place</label>
          <input
            type="text"
            id="place"
            name="place"
            value={eventData.place} // Asegurarse de que el campo sea controlado
            onChange={handleChange}
            className="event-input"
            placeholder="Enter the place"
          />
          {errors.place && <span className="error">{errors.place}</span>}
        </div>
        
        <button type="submit" className="event-submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EventsForm;