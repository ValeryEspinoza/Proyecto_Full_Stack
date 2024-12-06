import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // Para manejar clics en las fechas
import emailjs from 'emailjs-com';
import '../../Styles/Components_Styles/ProfileClienteStyles/CalendarioCitas.css'; // Asegúrate de importar el archivo CSS

function CalendarioCitas() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [appointmentDetails, setAppointmentDetails] = useState({});
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isEmailProvided, setIsEmailProvided] = useState(false);

  const availableHours = {
    '2024-12-06': ['10:00 AM', '11:00 AM', '12:00 PM'],
    '2024-12-07': ['2:00 PM', '3:00 PM', '4:00 PM'],
  };

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setAvailableTimes(availableHours[arg.dateStr] || []);
  };

  const handleTimeSelect = (time) => {
    setAppointmentDetails({ date: selectedDate, time });
    alert(`Cita seleccionada para el ${selectedDate} a las ${time}`);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Por favor, ingresa tu correo electrónico.');
      return;
    }
    setIsEmailProvided(true);
  };

  const enviarConfirmacionCita = (appointmentDetails) => {
    const templateParams = {
      name,
      phone,
      address,
      date: appointmentDetails.date,
      time: appointmentDetails.time,
      email: email,
    };

    emailjs.send('service_9of4zxx', 'template_iwcqswu', templateParams, 'ymYtdvW4jhBm2ACDK')
      .then((result) => {
          console.log('Email enviado', result.text);
          alert('Cita confirmada. Te hemos enviado un correo.');
      }, (error) => {
          console.log('Error al enviar email', error.text);
          alert('Hubo un error al enviar el correo.');
      });
  };

  const handleTimeConfirm = () => {
    if (!isEmailProvided) {
      alert('Por favor, ingresa tu correo para confirmar la cita.');
      return;
    }
    enviarConfirmacionCita(appointmentDetails);
  };

  return (
    <div className="calendarioCitas-container">
      <div className="calendarioCitas-title">Agendar Cita</div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        datesRender={(info) => {
          const dateStr = info.date.toISOString().split('T')[0]; // Obtener la fecha en formato YYYY-MM-DD
          if (availableHours[dateStr]) {
            info.el.classList.add('available-day'); // Agregar la clase CSS si hay horas disponibles
          }
        }}
      />
      {selectedDate && (
        <div>
          <div className="calendarioCitas-availableTimesTitle">Horas disponibles para {selectedDate}:</div>
          <ul className="calendarioCitas-times">
            {availableTimes.map((time) => (
              <li key={time} onClick={() => handleTimeSelect(time)}>
                {time}
              </li>
            ))}
          </ul>
        </div>
      )}
      {appointmentDetails.date && appointmentDetails.time && !isEmailProvided && (
        <div>
          <h1 className="calendarioCitas-emailPrompt">Por favor, ingresa tu correo y detalles para confirmar la cita:</h1>
          <form onSubmit={handleEmailSubmit} className="calendarioCitas-form">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre completo"
              required
              className="calendarioCitas-input"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Teléfono"
              required
              className="calendarioCitas-input"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Dirección del proyecto"
              required
              className="calendarioCitas-input"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
              required
              className="calendarioCitas-input"
            />
            <button type="submit" className="calendarioCitas-button">Confirmar correo</button>
          </form>
        </div>
      )}
      {appointmentDetails.date && appointmentDetails.time && isEmailProvided && (
        <div>
          <h3 className="calendarioCitas-confirmationTitle">Cita confirmada:</h3>
          <p>
            Nombre: {name} <br />
            Teléfono: {phone} <br />
            Dirección: {address} <br />
            Fecha: {appointmentDetails.date} <br />
            Hora: {appointmentDetails.time} <br />
            Correo: {email}
          </p>
          <button onClick={handleTimeConfirm} className="calendarioCitas-button">Confirmar cita</button>
        </div>
      )}
    </div>
  );
}

export default CalendarioCitas;