import '../../Styles/Components_Styles/Admin_C_Styles/CalendarForm.css'
import React, { useState } from "react";

function CalendarForm() {
  const [calendarData, setCalendarData] = useState({
    title: "tarea Yael",
    // Aquí puedes agregar algunas notas predefinidas si lo deseas
  });
  const [activeBox, setActiveBox] = useState(null); // Cuadro que se amplía
  const [clickedBox, setClickedBox] = useState(null); // Cuadro que fue clickeado

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // Mes actual 
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Año actual

  const totalBoxes = 35; // 5 filas x 7 días

  // Función para obtener el primer día del mes y el número total de días
  const getMonthDetails = (month, year) => {
    const firstDay = new Date(year, month, 1); // Primer día del mes
    const firstDayOfWeek = firstDay.getDay(); // Día de la semana del primer día (0=domingo, 6=sábado)
    const lastDate = new Date(year, month + 1, 0); // Último día del mes
    const totalDaysInMonth = lastDate.getDate(); // Número total de días en el mes
    return { firstDayOfWeek, totalDaysInMonth };
  };

  const { firstDayOfWeek, totalDaysInMonth } = getMonthDetails(currentMonth, currentYear);

  const handleBoxClick = (index) => {
    setActiveBox(index); // Establece el cuadro activo para ampliarlo
    setClickedBox(index); // Establece el cuadro clickeado para aplicar la clase adicional
  };

  const handleCloseClick = (e) => {
    e.stopPropagation(); // Previene que el clic dentro del cuadro activo cierre la ventana
    setActiveBox(null); // Cierra la ampliación
    setClickedBox(null); // Resetea el cuadro clickeado
  };

  // Generamos un arreglo de días (vacíos o con el número de día real)
  const generateCalendar = () => {
    const daysArray = Array(totalBoxes).fill(null); // Inicializamos un arreglo de 35 casillas
    for (let i = 0; i < totalDaysInMonth; i++) {
      daysArray[firstDayOfWeek + i] = i + 1; // Colocamos los números de los días en las casillas
    }
    return daysArray;
  };

  const daysArray = generateCalendar();

  return (
    <div className="calendar-container">
      <h1 className="title">Mes: {`${currentMonth + 1}/${currentYear}`}</h1>
      <div className="days-header">
        {days.map((day) => (
          <div key={day} className="day">{day}</div>
        ))}
      </div>
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

export default CalendarForm;
