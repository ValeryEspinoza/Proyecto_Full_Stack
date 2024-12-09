import React, { useState } from 'react';
import '../../Styles/Components_Styles/Admin_C_Styles/TasksForms.css'; // Asegúrate de tener los estilos apropiados
import postData from '../../Services/Post/PostData';



function TasksForms() {
  const [taskData, setTaskData] = useState({
    tittle: "",
    description: "",
    expire_date: "",
    complete: false,
  });

  const [errors, setErrors] = useState({});
  const [alertMessage, setAlertMessage] = useState(""); // Estado para el mensaje de alerta
  const [alertType, setAlertType] = useState(""); // Estado para el tipo de mensaje (success/error)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTaskData({
      ...taskData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Limpiar error para el campo actual
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!taskData.tittle) {
      formErrors.tittle = "Title is required.";
    }
    if (!taskData.description) {
      formErrors.description = "Description is required.";
    }
    if (!taskData.expire_date) {
      formErrors.expire_date = "Expire date is required.";
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
      // Simulación de un POST a un API (puedes reemplazarlo por tu lógica real de envío)
      console.log("Tarea enviada:", taskData);
      await postData("tasks", taskData);
      
      // Mensaje de éxito
      setAlertMessage("Tarea creada exitosamente.");
      setAlertType("success"); // Tipo de mensaje: éxito

      // Mostrar el mensaje por 3 segundos antes de restablecer el formulario
      setTimeout(() => {
        // Restablecer el formulario después de mostrar el mensaje
        setTaskData({
          tittle: "",
          description: "",
          expire_date: "",
          complete: false,
        });
        setErrors({});
        setAlertMessage(""); // Eliminar el mensaje de alerta
      }, 3000); // 3000 ms = 3 segundos

    } catch (error) {
      console.error("Error al enviar la tarea:", error);
      
      // Mensaje de error
      setAlertMessage("Error al crear la tarea. Por favor, inténtalo de nuevo.");
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
      
      <form className="task-form-container" onSubmit={handleSubmit}>
        <div className="task-form-group">
          <label htmlFor="tittle" className="task-label">Tittle</label>
          <input
            type="text"
            id="tittle"
            name="tittle"
            value={taskData.tittle}
            onChange={handleChange}
            className="task-input"
            placeholder="Enter the title"
          />
          {errors.tittle && <span className="error">{errors.tittle}</span>}
        </div>

        <div className="task-form-group">
          <label htmlFor="description" className="task-label">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={taskData.description}
            onChange={handleChange}
            className="task-input"
            placeholder="Enter the description"
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </div>

        <div className="task-form-group">
          <label htmlFor="expire_date" className="task-label">Expire Date</label>
          <input
            type="datetime-local"
            id="expire_date"
            name="expire_date"
            value={taskData.expire_date}
            onChange={handleChange}
            className="task-input"
          />
          {errors.expire_date && <span className="error">{errors.expire_date}</span>}
        </div>

        <button type="submit" className="task-submit-button">
          Submit
        </button>
      </form>
      <hr />
    </div>
  );
}

export default TasksForms;