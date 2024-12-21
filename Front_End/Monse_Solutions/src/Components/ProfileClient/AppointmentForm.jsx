import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Estilo para el calendario
import '../../Styles/Components_Styles/ProfileClienteStyles/AppointmentForm.css';

const AppointmentForm = ({ clientId, onAppointmentAdded }) => {
  const [appointmentData, setAppointmentData] = useState({
    date: null,
    time: '',
    client: clientId,
    name: '',
    phone: '',
    email: '',
    location: '',
  });

  const handleChange = (e) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setAppointmentData({
      ...appointmentData,
      date: date,
    });
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://192.168.88.198:8000/api/appointments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointmentData),
    })
      .then((response) => response.json())
      .then((newAppointment) => {
        onAppointmentAdded(newAppointment); // Notifica al componente principal que la cita fue agregada
        setAppointmentData({ date: null, time: '', client: clientId, name: '', phone: '', email: '', location: '' });
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="appointment-form-container">
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={appointmentData.date}
          className="calendar"
        /> <br /> <br />
          <div className="inputField">
          <input
            type="time"
            id="time"
            name="time"
            value={appointmentData.time}
            onChange={handleChange}
            className="inputAppointment"
            required
          />
        </div>
      </div>
      

      <form onSubmit={handleSubmit} className="appointmentFormContainer">
        <div className="inputField">
          <input
            id="name"
            name="name"
            value={appointmentData.name}
            onChange={handleChange}
            className="inputAppointment"
            placeholder="Name"
            required
          />
        </div>

        <div className="inputField">
          <input
            id="phone"
            name="phone"
            value={appointmentData.phone}
            onChange={handleChange}
            className="inputAppointment"
            placeholder="Phone"
            required
          />
        </div>

        <div className="inputField">
          <input
            id="email"
            name="email"
            value={appointmentData.email}
            onChange={handleChange}
            className="inputAppointment"
            placeholder="Email"
            required
          />
        </div>

        <div className="inputField">
          <input
            id="location"
            name="location"
            value={appointmentData.location}
            onChange={handleChange}
            className="inputAppointment"
            placeholder="Location"
            required
          />
        </div>

        <button type="submit" className="submitAppointmentBtn">
          Schedule
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
