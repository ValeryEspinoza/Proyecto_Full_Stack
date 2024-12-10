import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import GetData from "../../Services/Get/GetData";
import "../../Styles/Components_Styles/Admin_C_Styles/CalendarForm.css"; // Crea estilos según sea necesario

const CalendarView = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEventsAndTasks = async () => {
      try {
        // Obtener eventos y tareas desde el backend
        const eventos = await GetData("events");
        const tareas = await GetData("tasks");

        // Formatear los datos para FullCalendar
        const formattedEvents = eventos.map((event) => ({
          id: `event-${event.event_id}`,
          title: event.tittle,
          start: event.starting_date,
          end: event.ending_date,
          color: "#ff5722", // Color para eventos
        }));

        const formattedTasks = tareas.map((task) => ({
          id: `task-${task.task_id}`,
          title: task.tittle,
          start: task.expire_date,
          color: "#4caf50", // Color para tareas
        }));

        // Combinar ambos conjuntos de datos
        setEvents([...formattedEvents, ...formattedTasks]);
      } catch (error) {
        console.error("Error al cargar eventos y tareas:", error);
      }
    };

    fetchEventsAndTasks();
  }, []);

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        editable={true}
        selectable={true}
      />
    </div>
  );
};

export default CalendarView;