import '../../Styles/Components_Styles/Admin_C_Styles/CalendarForm.css'
import React, { useState } from "react";


function CalendarForm() {
  // Estado del calendario
  const [calendarData, setCalendarData] = useState({
    4: "Reunión con cliente para aprobar diseño de remodelación",
    8: "Inspección de avance en la obra de la Casa A",
    10: "Entrega de materiales en el proyecto de la oficina B",
    12: "Reunión con el equipo para coordinar tareas de la semana",
    15: "Cita con proveedor para compra de materiales",
    18: "Inspección final y entrega del proyecto Casa C",
    // Aquí puedes agregar algunas notas predefinidas si lo deseas
  });
  const [activeBox, setActiveBox] = useState(null); // Cuadro que se amplía
  const [clickedBox, setClickedBox] = useState(null); // Cuadro que fue clickeado
  // Nombres de los días de la semana
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // Estado para el mes y año actuales
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // Mes actual
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Año actual
  const totalBoxes = 35; // Total de casillas (5 filas x 7 días)
  // Función para obtener el primer día del mes y el número total de días
  const getMonthDetails = (month, year) => {
    const firstDay = new Date(year, month, 1); // Primer día del mes
    const firstDayOfWeek = firstDay.getDay(); // Día de la semana del primer día (0=domingo, 6=sábado)
    const lastDate = new Date(year, month + 1, 0); // Último día del mes
    const totalDaysInMonth = lastDate.getDate(); // Número total de días en el mes
    return { firstDayOfWeek, totalDaysInMonth };
  };
  const { firstDayOfWeek, totalDaysInMonth } = getMonthDetails(currentMonth, currentYear);
  // Función para manejar el clic en un cuadro
  const handleBoxClick = (index) => {
    setActiveBox(index); // Establece el cuadro activo para ampliarlo
    setClickedBox(index); // Establece el cuadro clickeado para aplicar la clase adicional
    console.log('Box clicked, current month:', currentMonth); // Ver el estado cuando se hace clic
  };
  // Función para cerrar el cuadro ampliado
  const handleCloseClick = (e) => {
    e.stopPropagation(); // Previene que el clic dentro del cuadro activo cierre la ventana
    setActiveBox(null); // Cierra la ampliación
    setClickedBox(null); // Resetea el cuadro clickeado
  };
  // Función para generar el calendario con los días del mes
  const generateCalendar = () => {
    const daysArray = Array(totalBoxes).fill(null); // Inicializamos un arreglo de 35 casillas
    console.log('Initial days array:', daysArray); // Ver el array inicial
    for (let i = 0; i < totalDaysInMonth; i++) {
      console.log(`Placing day ${i + 1} at index ${firstDayOfWeek + i}`); // Ver dónde se coloca cada día
      daysArray[firstDayOfWeek + i] = i + 1; // Colocamos los números de los días en las casillas
    }
    console.log('Final days array:', daysArray); // Ver el array final
    return daysArray;
  };
  const daysArray = generateCalendar(); // Llamamos a la función para generar el calendario
  return (
    <div className="calendar-container">
      <h1 className="title">Mes: {`${currentMonth + 1}/${currentYear}`}</h1>
      {/* Mostrar los nombres de los días de la semana */}
      <div className="days-header">
        {days.map((day) => (
          <div key={day} className="day">{day}</div>
        ))}
      </div>
      {/* Mostrar las casillas del calendario */}
      <div className="calendar-grid">
        {daysArray.map((day, index) => (
          <div
            key={index}
            className={`calendar-box ${activeBox === index ? "active expanded" : ""} ${clickedBox === index ? "clicked" : ""}`}
            onClick={() => handleBoxClick(index)} // Hacer clic para ampliar
          >
            {day && <span>{day}</span>} {/* Mostrar el número del día si existe */}
            {/* Mostrar el contenido de la nota si existe */}
            {calendarData[index] && <div className="note-content">{calendarData[index]}</div>}
            {activeBox === index && (
              <div className="form-overlay" onClick={handleCloseClick}> {/* Se coloca el manejador aquí para evitar que el clic cierre al hacer clic dentro */}
                <button className="close-btn" onClick={(e) => { e.stopPropagation(); handleCloseClick(e); }}>X</button> {/* Botón para cerrar */}
                <div className="expanded-content">
                  {/* Mostrar más detalles al hacer clic en el cuadro */}
                  <h5>Detalles del Día {day}</h5>
                  <p>{calendarData[index] || "No hay notas para este día."}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarForm


