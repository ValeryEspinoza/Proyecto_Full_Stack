import React, { useState, useEffect } from "react";
import GetData from "../../Services/Get/GetData";
import PutData from "../../Services/Put/PutData";
import DeleteData from "../../Services/Delete/DeleteData";
import PatchData from "../../Services/Patch/PatchData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.min.css";
import "../../Styles/Components_Styles/Admin_C_Styles/TaskAdminData.css";
import TasksForms from "./TasksForms";
import logoNegroF from "../../Img/Components_Img/logo_negrov.png";

const TasksAdminData = () => {
  const [tasks, setTasks] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editedTask, setEditedTask] = useState(null);
  const [editedField, setEditedField] = useState(null);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredTasks = tasks.filter((task) =>
    task.tittle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = (taskId) => {
    setIsDropdownOpen(isDropdownOpen === taskId ? null : taskId);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await GetData('tasks');
        if (response && Array.isArray(response)) {
          setTasks(response);
          toast.success("Tareas cargadas correctamente.");
        } else {
          toast.error("No se pudieron cargar las tareas.");
        }
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
        toast.error("Error al cargar las tareas.");
      }
    };
    fetchTasks();
  }, []);

  const deleteTask = async (taskId) => {
    if (!taskId) {
      toast.error("ID de tarea no válido.");
      return;
    }
    try {
      await DeleteData("tasks", taskId);
      const updatedTasks = await GetData("tasks");
      setTasks(updatedTasks);
      toast.success("Tarea eliminada con éxito.");
    } catch (error) {
      console.error("Error al eliminar la tarea:", error);
      toast.error("Error al eliminar la tarea.");
    }
  };

  const handleFieldChange = (e, field) => {
    if (!editedTask) return; // Prevent changes if no task is being edited
    setEditedTask({
      ...editedTask,
      [field]: e.target.value,
    });
    setEditedField(field);
  };

  const handleSaveAll = async () => {
    if (!editedTask) {
      toast.error("No se ha editado ninguna tarea.");
      return;
    }

    try {
      const taskData = {
        task_id: editedTask.task_id,
        tittle: editedTask.tittle,
        description: editedTask.description,
        expire_date: editedTask.expire_date,
        complete: editedTask.complete,
      };
      await PutData("tasks", taskData, editedTask.task_id);
      const updatedTasks = await GetData("tasks");
      setTasks(updatedTasks);
      setEditedTask(null);
      toast.success("Cambios guardados exitosamente.");
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
      toast.error("Error al guardar los cambios.");
    }
  };

  const handleSaveField = async () => {
    if (!editedTask || !editedField) {
      toast.error("No se ha seleccionado ningún campo para guardar.");
      return;
    }

    try {
      const fieldData = {
        [editedField]: editedTask[editedField],
      };
      await PatchData("tasks", fieldData, editedTask.task_id);
      const updatedTasks = await GetData("tasks");
      setTasks(updatedTasks);
      setEditedTask(null);
      setEditedField(null);
      toast.success("Campo guardado correctamente.");
    } catch (error) {
      console.error("Error al guardar el cambio específico:", error);
      toast.error("Error al guardar el cambio del campo.");
    }
  };

  const loadTaskData = (taskId) => {
    const selectedTask = tasks.find((task) => task.task_id === taskId);
    if (selectedTask) {
      setEditedTask({ ...selectedTask });
      setEditedField(null);
    } else {
      toast.error("Tarea no encontrada.");
    }
  };

  return (
    <div className="tasks-table-container">
      <ToastContainer />
      <header className="tasks-header">
        <img src={logoNegroF} alt="Logo" className="tasks-logo" />
        <h1 className="tasks-company-name">Tareas</h1>
        <h2 className="tasks-title">Gestión</h2>
      </header>

      <div className="tasks-table-header">
        <input
          type="text"
          className="tasks-search-input"
          placeholder="Buscar tareas..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="tasks-btn tasks-add-btn"
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          <i className="fa fa-plus"></i> Añadir Tarea
        </button>
      </div>

      {isFormVisible && <TasksForms />}

      <table className="tasks-table">
        <thead>
          <tr>
            <th className="tasks-th">ID Tarea</th>
            <th className="tasks-th">Título</th>
            <th className="tasks-th">Descripción</th>
            <th className="tasks-th">Fecha Límite</th>
            <th className="tasks-th">Completada</th>
            <th className="tasks-th">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.task_id} className="tasks-tr">
              <td className="tasks-td">{task.task_id}</td>
              <td className="tasks-td">
                {editedTask?.task_id === task.task_id ? (
                  <input
                    type="text"
                    value={editedTask.tittle}
                    onChange={(e) => handleFieldChange(e, "tittle")}
                  />
                ) : (
                  task.tittle
                )}
              </td>
              <td className="tasks-td">
                {editedTask?.task_id === task.task_id ? (
                  <input
                    type="text"
                    value={editedTask.description}
                    onChange={(e) => handleFieldChange(e, "description")}
                  />
                ) : (
                  task.description
                )}
              </td>
              <td className="tasks-td">
                {editedTask?.task_id === task.task_id ? (
                  <input
                    type="date"
                    value={editedTask.expire_date}
                    onChange={(e) => handleFieldChange(e, "expire_date")}
                  />
                ) : (
                  task.expire_date
                )}
              </td>
              <td className="tasks-td">
                {editedTask?.task_id === task.task_id ? (
                  <select
                    value={editedTask.complete}
                    onChange={(e) => handleFieldChange(e, "complete")}
                  >
                    <option value="true">Sí</option>
                    <option value="false">No</option>
                  </select>
                ) : (
                  <span
                    className={`tasks-complete ${
                      task.complete ? "complete-yes" : "complete-no"
                    }`}
                  >
                    {task.complete ? "Sí" : "No"}
                  </span>
                )}
              </td>
              <td className="tasks-td">
                <div className="tasks-btn-container">
                  <button
                    className="tasks-btn tasks-more-btn"
                    onClick={() => toggleDropdown(task.task_id)}
                  >
                    <i className="fa fa-ellipsis-v"></i>
                  </button>
                  {isDropdownOpen === task.task_id && (
                    <div className="tasks-dropdown">
                      {editedTask?.task_id === task.task_id ? (
                        <>
                          <button
                            className="tasks-dropdown-btn tasks-save-btn"
                            onClick={handleSaveAll}
                          >
                            Guardar Todo
                          </button>
                          <button
                            className="tasks-dropdown-btn tasks-save-btn"
                            onClick={handleSaveField}
                          >
                            Guardar Campo
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="tasks-dropdown-btn tasks-edit-btn"
                            onClick={() => loadTaskData(task.task_id)}
                          >
                            <i className="fa fa-pencil"></i> Editar
                          </button>
                          <button
                            className="tasks-dropdown-btn tasks-delete-btn"
                            onClick={() => deleteTask(task.task_id)}
                          >
                            <i className="fa fa-trash"></i> Eliminar
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

export default TasksAdminData;
