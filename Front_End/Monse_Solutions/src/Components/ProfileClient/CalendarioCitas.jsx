import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // Para manejar clics en las fechas
import emailjs from 'emailjs-com';
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import '../../Styles/Components_Styles/ProfileClienteStyles/CalendarioCitas.css'; // Asegúrate de importar el archivo CSS
import { jsPDF } from "jspdf";
import Logo from '../../Img/Components_Img/logo_negrov.png'

function CalendarioCitas() {
  //Hooks de estado
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [appointmentDetails, setAppointmentDetails] = useState({});
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isEmailProvided, setIsEmailProvided] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [updateKey, setUpdateKey] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);
  const [confirmedAppointment, setConfirmedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);


  const availableHours = {
// Diciembre
'2024-12-06': ['10:00 AM', '11:00 AM', '12:00 PM'],
'2024-12-09': ['2:00 PM', '3:00 PM', '4:00 PM'],
'2024-12-11': ['10:00 AM', '11:00 AM', '12:00 PM'],
'2024-12-13': ['2:00 PM', '3:00 PM', '4:00 PM'],
'2024-12-18': ['10:00 AM', '11:00 AM', '12:00 PM'],
'2024-12-20': ['2:00 PM', '3:00 PM', '4:00 PM'],

// Enero
'2025-01-08': ['2:00 PM', '3:00 PM', '4:00 PM'],
'2025-01-15': ['10:00 AM', '11:00 AM', '12:00 PM'],
'2025-01-22': ['2:00 PM', '3:00 PM', '4:00 PM'],
'2025-01-29': ['10:00 AM', '11:00 AM', '12:00 PM'],

'2025-01-09': ['2:00 PM', '3:00 PM', '4:00 PM'],
'2025-01-16': ['10:00 AM', '11:00 AM', '12:00 PM'],
'2025-01-23': ['2:00 PM', '3:00 PM', '4:00 PM'],

'2025-01-10': ['2:00 PM', '3:00 PM', '4:00 PM'],
'2025-01-17': ['10:00 AM', '11:00 AM', '12:00 PM'],
'2025-01-24': ['2:00 PM', '3:00 PM', '4:00 PM'],
};

  console.log(availableHours);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setAvailableTimes(availableHours[arg.dateStr] || []);
  
    // Limpiar clases previas de todos los días
    const days = document.querySelectorAll('.fc-daygrid-day');
    days.forEach((day) => {
      day.classList.remove('selected-date');
    });
  
    // Agregar la clase 'selected-date' al día seleccionado
    const selectedDay = document.querySelector(`[data-date="${arg.dateStr}"]`);
    if (selectedDay) {
      selectedDay.classList.add('selected-date');
    }
  };
  

  // Función para manejar clic en hora
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setAppointmentDetails({ date: selectedDate, time });
   /* Toastify({
      text: `Appointment selected for ${selectedDate} at ${time}`,
      duration: 3500,
      gravity: "top", // "top" or "bottom"
      position: "center", // "left", "center" or "right"
      className: "custom-toastCalendario", // Añadimos una clase personalizada
    }).showToast();*/
  };

  //useEffect para manejar la clase `selected-time`
  useEffect(() => {
    if (!selectedTime) return;
  
    const timeElements = document.querySelectorAll('.calendarioCitas-time');
    timeElements.forEach((el) => {
      if (el.textContent === selectedTime) {
        el.classList.add('selected-time');
      } else {
        el.classList.remove('selected-time');
      }
    });
  }, [selectedTime]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Por favor, ingresa tu correo electrónico.');
      return;
    }
    setIsEmailProvided(true);
  };
  
  //Cierra el modal
  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const resetForm = () => {
    setSelectedDate(null);
    setAvailableTimes([]);
    setAppointmentDetails({});
    setEmail('');
    setName('');
    setPhone('');
    setAddress('');
    setSelectedTime(null);
    setIsEmailProvided(false);
    setUpdateKey((prev) => prev + 1); // Actualizar el calendario
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
  

    setIsSubmitting(true); // Mostrar el estado de envío
    emailjs.send('service_9of4zxx', 'template_iwcqswu', templateParams, 'ymYtdvW4jhBm2ACDK')
      .then((result) => {
        console.log('Email enviado', result.text);
        setIsSubmitting(false);
        Toastify({
          text: `Cita confirmada. Te hemos enviado un correo`,
          duration: 3500,
          gravity: "top", // "top" or "bottom"
          position: "center", // "left", "center" or "right"
          className: "custom-toastCalendario", // Añadimos una clase personalizada
        }).showToast();
        resetForm(); // Llamar al método aquí
      }, (error) => {
        console.log('Error al enviar email', error.text);
        setIsSubmitting(false);
        alert('Hubo un error al enviar el correo.');
      });
  };

  const handleTimeConfirm = () => {
    if (!isEmailProvided || !appointmentDetails.date || !appointmentDetails.time) {
      alert('Por favor, completa todos los campos antes de confirmar la cita.');
      return;
    }
  
    //Agregar toda la información al estado confirmedAppointment
    const fullAppointmentDetails = {
      ...appointmentDetails, 
      name,
      phone,
      address,
      email,
    };
  
    // Guardar toda la información en el estado
    setConfirmedAppointment(fullAppointmentDetails);
    // Enviar la confirmación de la cita
    enviarConfirmacionCita(fullAppointmentDetails);
    // Cerrar el modal
    setIsModalOpen(false); 
  };
  
//DESCARGAR PDF
const handleDownloadPDF = () => {
  const doc = new jsPDF();

 // Ruta del logo
   const logoPath = Logo;
 
   // Dimensiones del logo (proporcionales)
   const logoWidth = 40; // Ancho deseado en mm
   const logoHeight = logoWidth * (435 / 920); // Mantener la proporción del logo
 
   // Añadir logo
   const logoX = 20; // Posición horizontal del logo
   const logoY = 15; // Posición vertical del logo
   doc.addImage(logoPath, 'PNG', logoX, logoY, logoWidth, logoHeight);
 
   // Título debajo del logo
   doc.setFont('helvetica', 'bold');
   doc.setFontSize(20);
   doc.setTextColor(76, 175, 80);
   const titleY = logoY + logoHeight + 20; // Ajustar posición vertical del texto
   doc.text('Appointment Confirmation', 105, titleY, { align: 'center' });
 
   // Detalles de la cita
   doc.setFont('helvetica', 'normal');
   doc.setFontSize(12);
   doc.setTextColor(0, 0, 0);
   doc.text(`Name: ${confirmedAppointment.name}`, 20, titleY + 20);
   doc.text(`Phone: ${confirmedAppointment.phone}`, 20, titleY + 30);
   doc.text(`Address: ${confirmedAppointment.address}`, 20, titleY + 40);
   doc.text(`Date: ${confirmedAppointment.date}`, 20, titleY + 50);
   doc.text(`Time: ${confirmedAppointment.time}`, 20, titleY + 60);
   doc.text(`Email: ${confirmedAppointment.email}`, 20, titleY + 70);
 
   // Línea separadora
   doc.setDrawColor(150);
   doc.setLineWidth(0.5);
   doc.line(20, titleY + 80, 190, titleY + 80);
 
   // Mensaje adicional
   const pageWidth = doc.internal.pageSize.width;
   doc.setFontSize(10);
   doc.setTextColor(150, 150, 150);
   const thankYouText = 'Thank you for trusting us!';
   const questionText =
     'If you have any questions, please do not hesitate to contact us.';
   const thankYouTextWidth = doc.getTextWidth(thankYouText);
   const questionTextWidth = doc.getTextWidth(questionText);
   doc.text(thankYouText, (pageWidth - thankYouTextWidth) / 2, titleY + 90);
   doc.text(questionText, (pageWidth - questionTextWidth) / 2, titleY + 100);
 
   // Guardar PDF
   doc.save("appointment_details.pdf");
 };

  
  return (
    <div className="calendarioCitas-container">
      <div className="calendar-banner">
      <span className="color-box"></span>
      <span>Click on a green day to schedule your appointment!</span>
    </div>

    <FullCalendar
  key={updateKey}
  plugins={[dayGridPlugin, interactionPlugin]}
  initialView="dayGridMonth"
  dateClick={handleDateClick}
  showNonCurrentDates={false} // Oculta días de otros meses
  datesSet={(info) => {
    const visibleDates = document.querySelectorAll('.fc-daygrid-day');
    visibleDates.forEach((day) => {
      const dateStr = day.getAttribute('data-date'); // Obtiene la fecha del día
      if (availableHours[dateStr] && availableHours[dateStr].length > 0) {
        day.classList.add('available-day');
      } else {
        day.classList.remove('available-day'); 
      }
    });
  }}
  dayCellDidMount={(arg) => {
    const dateStr = arg.date.toISOString().split('T')[0];
    if (availableHours[dateStr]) {
      arg.el.classList.add('available-day'); // Clase para días disponibles
    }
    if (dateStr === selectedDate) {
      arg.el.classList.add('selected-date'); // Clase para el día seleccionado
    } else {
      arg.el.classList.remove('selected-date'); // Remueve la clase si no coincide
    }
  }}
  
/>


{selectedDate && (
  <div className="calendarioCitas-available">
    <h2 className="calendarioCitas-availableTimesTitle">Available hours for {selectedDate}:</h2>
    <div className="calendarioCitas-times">
        {availableTimes.map((time) => (
          <div
            key={time}
            onClick={() => handleTimeSelect(time)}
            className="calendarioCitas-time"
          >
            {time}
          </div>
  ))}
</div>
  </div>
)}

{appointmentDetails.date && appointmentDetails.time && !isEmailProvided && (
  <div>
    <h1 className="calendarioCitas-emailPrompt">Please enter your details <br /> to confirm your appointment:</h1>
    <form onSubmit={handleEmailSubmit} className="calendarioCitas-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
        required
        className="calendarioCitas-input"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
        className="calendarioCitas-input"
      />
        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="calendarioCitas-input"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address of the project"
        required
        className="calendarioCitas-input"
      />
      <button type="submit" className="calendarioCitas-button">Confirm information</button>
    </form>
  </div>
)}
{appointmentDetails.date && appointmentDetails.time && isEmailProvided && (
  <div className="modern-modal-overlay">
    <div className="modern-modal">
      <h3 className="modern-modal-title">Appointment Confirmation</h3>
      <div className="modern-modal-details">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
        <p><strong>Date:</strong> {appointmentDetails.date}</p>
        <p><strong>Time:</strong> {appointmentDetails.time}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
      <div className="modern-modal-actions">
        <button onClick={handleTimeConfirm} className="modern-button" disabled={isSubmitting}>
          {isSubmitting ? 'Confirming...' : 'Confirm Appointment'}
        </button>
        <button onClick={handleCloseModal} className="modern-button cancel">Cancel</button>
      </div>
    </div>
  </div>
)}

    {/* Mostrar la cita confirmada */}
    {confirmedAppointment && (
  <div className="calendarioCitas-confirmedDetails">
    <h2>Your appointment details</h2>
    <p><strong>Name:</strong> {confirmedAppointment.name}</p>
    <p><strong>Phone:</strong> {confirmedAppointment.phone}</p>
    <p><strong>Address:</strong> {confirmedAppointment.address}</p>
    <p><strong>Date:</strong> {confirmedAppointment.date}</p>
    <p><strong>Time:</strong> {confirmedAppointment.time}</p>
    <p><strong>Email:</strong> {confirmedAppointment.email}</p>
    <button onClick={handleDownloadPDF} className="calendarioCitas-downloadPDFButton">
      Download PDF
    </button>
  </div>
)}


  </div>
);


}

export default CalendarioCitas;

