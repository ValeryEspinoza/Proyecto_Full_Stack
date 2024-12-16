import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import emailjs from 'emailjs-com';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Styles/Components_Styles/ProfileClienteStyles/CalendarioCitas.css';
import { jsPDF } from 'jspdf';
import Logo from '../../Img/Components_Img/logo_negrov.png';
import GetData from '../../Services/Get/GetData';
import PostData from '../../Services/Post/PostData';

/**
 * Componente principal para gestionar el calendario de citas.
*/

function CalendarioCitas() {
  // ** Hooks de estado 
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
  const [events, setEvents] = useState([]);
  const [availableHours, setAvailableHours] = useState({}); //Almacena horarios disponibles por fecha
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [isEmailValid, setIsEmailValid] = useState(true);

  // ** Fetch de horarios disponibles al cargar el componente **
  useEffect(() => {
    const fetchHorarios = async () => {
      try {
        const response = await GetData('horarios_disponibles');
        
        // Validar si la respuesta es un objeto
        if (typeof response !== 'object' || response === null) {
          console.error('La respuesta no es un objeto:', response);
          toast.error('Error al cargar los horarios. Formato inesperado.');
          return;
        }

        // Formatear eventos para el calendario
        const formattedEvents = Object.keys(response).map(date => ({
          title: '', // Deja vacío para que no se muestre en la celda
          start: date, // Solo la fecha, sin hora
          allDay: true,
          extendedProps: {
            availableTimes: response[date], // Adjunta las horas disponibles como propiedades
          }
        }));
        setEvents(formattedEvents);
        
        //Estructurar horarios disponibles por fecha
        setAvailableHours(response);

        // Cambiar color de días con horas disponibles
        const days = document.querySelectorAll('.fc-daygrid-day');
        days.forEach((day) => {
          const dayDate = day.getAttribute('data-date'); //Obtén la fecha de cada celda
          if (response[dayDate]) {
            day.classList.add('has-available-times'); //Agregar clase si tiene horas disponibles
          } else {
            day.classList.remove('has-available-times'); //Eliminar clase si no tiene horas
          }
        });

      } catch (error) {
        console.error('Error al obtener fechas y horas disponibles:', error);
        toast.error('Error al cargar los horarios.');
      }
    };

    fetchHorarios();
}, []);


// ** Selección de fecha en el calendario **
const handleDateClick = (arg) => {
  setSelectedDate(arg.dateStr);
  setAvailableTimes(availableHours[arg.dateStr] || []);

  // Cambiar estilos visuales
  const days = document.querySelectorAll('.fc-daygrid-day');
  days.forEach((day) => {
      day.classList.remove('selected-date'); // Eliminar la clase de todos los días
  });
  const selectedDay = document.querySelector(`[data-date="${arg.dateStr}"]`);
  if (selectedDay) {
      selectedDay.classList.add('selected-date'); // Agregar clase al día seleccionado
  }
};

// ** Selección de hora disponible **
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setAppointmentDetails({ date: selectedDate, time });
  };
  
// ** Aplicar estilo a la hora seleccionada **
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

// ** Manejo del envío del correo **
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Por favor, ingresa tu correo electrónico.');
      return;
    }
    setIsEmailProvided(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const resetForm = () => {   
   setAvailableTimes([]);
    setAppointmentDetails({});
    setEmail('');
    setName('');
    setPhone('');
    setAddress('');
    setSelectedTime(null);
    setIsEmailProvided(false);
    setUpdateKey((prev) => prev + 1); //Actualizar el calendario
  };

// ** Actualizar horarios en el backend **
  const enviarConfirmacionCita = (appointmentDetails) => {
    const templateParams = {
      name,
      phone,
      address,
      email: email,
      date: appointmentDetails.date,
      time: appointmentDetails.time,
    };

    setIsSubmitting(true);

// ** Función de emailjs **    
    emailjs
      .send('service_9of4zxx', 'template_iwcqswu', templateParams, 'ymYtdvW4jhBm2ACDK')
      .then(
        (result) => {
          console.log('Email enviado', result.text);
          
          setIsSubmitting(false);
          Toastify({
            text: `Appointment confirmed. We have sent you an email`,
            duration: 3500,
            gravity: 'top',
            position: 'center',
            className: 'custom-toastCalendario',
          }).showToast();
          resetForm();
        },
        (error) => {
          console.log('Error al enviar email', error.text);
          setIsSubmitting(false);
          Toastify({
            text: `Error sending email. Please try again later.`,
            duration: 3500,
            gravity: 'top',
            position: 'center',
            className: 'custom-toastCalendario',
            backgroundColor: 'red',
          }).showToast();
        }
      );
  };


// ** Actualizar horarios en el backend **
const actualizarHorario = async (date, time) => {
  const appointmentData = {
    name: name,
    phone: phone,
    address: address,
    email: email,
    date: date,  
    time: time  
  };
  console.log('Datos del horario a enviar:', appointmentData);

  try {
    const response = await PostData('horarios_disponibles', appointmentData);
    if (response) {
      console.log('Horario actualizado correctamente:', response);
      toast.success('Horario actualizado correctamente.');
    } else {
      console.error('La respuesta no contiene datos.');
      toast.error('No se pudo actualizar el horario.');
    }
  } catch (error) {
    console.error('Error al actualizar el horario:', error);
    toast.error('Error al conectar con el servidor.');
  }
};

const handleTimeConfirm = async () => {
  if (!isEmailProvided || !appointmentDetails.date || !appointmentDetails.time) {
    return;
  }

  // Primero, verificar si ya hay una cita con el correo proporcionado
  const emailExists = await verificarCitaExistente(email);
  if (emailExists) {
    alert("Ya tienes una cita agendada con este correo. Por favor, elige otra fecha u hora.");
    return;
  }

  // Si no hay conflictos, continuar con la confirmación de la cita
  const fullAppointmentDetails = {
    ...appointmentDetails,
    name,
    phone,
    address,
    email,
  };

  // Actualizar horario en el backend
  await actualizarHorario(fullAppointmentDetails.date, fullAppointmentDetails.time);

  // Enviar confirmación de la cita
  enviarConfirmacionCita(fullAppointmentDetails);

  // Guardar detalles de la cita confirmada
  setConfirmedAppointment(fullAppointmentDetails);
  setIsModalOpen(false);
};

// Función para verificar si ya existe una cita con el mismo correo
const verificarCitaExistente = async (email) => {
  try {
    const response = await fetch(`appointments/check=${email}`);
    const data = await response.json();
    
    //Verificar si el backend devuelve un error indicando que ya existe una cita
    return data.Error ? true : false;
  } catch (error) {
    console.error("Error al verificar citas:", error);
    return false; //Si hay un error, consideramos que no hay cita
  }
};


  
// ** Descargar confirmación en PDF **
const handleDownloadPDF = () => {
  const doc = new jsPDF();

  //Ruta del logo
  const logoPath = Logo;

  //Dimensiones del logo
  const logoWidth = 40;
  const logoHeight = logoWidth * (435 / 920);

  //Posición del logo (alineado a la izquierda)
  const logoX = 15; // Ajusta según el margen deseado
  const logoY = 15; // Posición vertical del logo

  //Añadir logo
  doc.addImage(logoPath, 'PNG', logoX, logoY, logoWidth, logoHeight);

  //Título principal
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(80, 200, 120);
  const titleY = logoY + logoHeight + 20;
  doc.text('Appointment Confirmation', doc.internal.pageSize.width / 2, titleY, { align: 'center' });

  //Fondo de sección para datos
  doc.setFillColor(249, 249, 249);
  doc.rect(15, titleY + 10, 180, 70, 'F');

  //Detalles de la cita
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  const detailsStartY = titleY + 20;

  const details = [
    { label: 'Name', value: confirmedAppointment.name },
    { label: 'Phone', value: confirmedAppointment.phone },
    { label: 'Address', value: confirmedAppointment.address },
    { label: 'Date', value: confirmedAppointment.date },
    { label: 'Time', value: confirmedAppointment.time },
    { label: 'Email', value: confirmedAppointment.email },
  ];

  //Renderizar detalles con etiquetas en negrita
  details.forEach((detail, index) => {
    const yPosition = detailsStartY + index * 10;

    //Etiqueta en negrita
    doc.text(`${detail.label}:`, 25, yPosition);

    //Valor normal
    doc.setFont('helvetica', 'normal');
    doc.text(detail.value, 55, yPosition);
    doc.setFont('helvetica', 'bold'); //Regresar a negrita para la siguiente etiqueta
  });

  //Línea separadora
  doc.setDrawColor(80, 200, 120);
  doc.setLineWidth(1);
  doc.line(20, detailsStartY + 70, 190, detailsStartY + 70);

  //Mensaje adicional
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  const thankYouText = 'Thank you for trusting us!';
  const questionText =
    'If you have any questions, please do not hesitate to contact us.';
  const thankYouTextWidth = doc.getTextWidth(thankYouText);
  const questionTextWidth = doc.getTextWidth(questionText);
  doc.text(thankYouText, (doc.internal.pageSize.width - thankYouTextWidth) / 2, detailsStartY + 80);
  doc.text(questionText, (doc.internal.pageSize.width - questionTextWidth) / 2, detailsStartY + 90);

  //Guardar PDF
  doc.save('appointment_details.pdf');
};

 
  // ** Efecto para aplicar estilos a los días disponibles cuando cambia el mes **
  useEffect(() => {
    const days = document.querySelectorAll('.fc-daygrid-day');
    days.forEach((day) => {
      const dayDate = day.getAttribute('data-date');
      if (availableHours[dayDate]) {
        day.classList.add('has-available-times');
      } else {
        day.classList.remove('has-available-times');
      }
    });
  }, [currentMonth, availableHours]); // Dependencias: mes actual y horarios disponibles

  // ** Manejo del cambio de mes **
  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);
  };


  return (
// Contenedor principal del componente de calendario y gestión de citas
<div className="calendarioCitas-container">

{/* Sección de banner con instrucciones para el usuario */}
<div className="calendar-banner">
  <span className="color-box"></span>
  <span>Click on a green day to schedule your appointment!</span>
</div>

{/* Componente FullCalendar para mostrar el calendario con interactividad */}
<FullCalendar
  plugins={[dayGridPlugin, interactionPlugin]} //Plugins para diseño de cuadrícula y manejo de interacciones
  initialView="dayGridMonth" //Vista inicial del calendario
  dateClick={handleDateClick} //Función llamada al hacer clic en una fecha
  events={events} //Lista de eventos a mostrar en el calendario
  datesSet={(dateInfo) => handleMonthChange(dateInfo.start.getMonth())} // Actualiza el mes actual
  showNonCurrentDates={false} //Oculta fechas de meses no actuales
  eventDisplay="none" //Oculta visualmente los eventos para un calendario limpio
/>

{/* Muestra las horas disponibles cuando se selecciona una fecha */}
{selectedDate && (
  <div className="calendarioCitas-available">
    <h2 className='calendarioCitas-availableTimesTitle'>
      Available hours for {selectedDate}:
    </h2>

    {/* Lista de horarios disponibles como opciones interactivas */}
    <div className="calendarioCitas-times">
      {availableTimes.map((time, index) => (
        <div
          key={index}
          onClick={() => handleTimeSelect(time)} //Selección de un horario
          className={`calendarioCitas-time ${time === selectedTime ? 'selected-time' : ''}`}
          style={{
            cursor: time === selectedTime ? 'not-allowed' : 'pointer', //Desactiva clics en horarios seleccionados
          }}
        >
          {time}
        </div>
      ))}
    </div>
  </div>
)}

{/* Solicita detalles del usuario si se seleccionaron fecha y hora */}
{appointmentDetails.date && appointmentDetails.time && !isEmailProvided && (
  <div>
    <h1 className="calendarioCitas-emailPrompt">
      Please enter your details <br /> to confirm your appointment:
    </h1>
    {/* Formulario para recopilar información del usuario */}
    <form onSubmit={handleEmailSubmit} className="calendarioCitas-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} //Actualiza el estado del nombre
        placeholder="Full name"
        required
        className="calendarioCitas-input"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)} //Actualiza el estado del teléfono
        placeholder="Phone"
        required
        className="calendarioCitas-input"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} //Actualiza el estado del email
        placeholder="Email"
        required
        className="calendarioCitas-input"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)} //Actualiza el estado de la dirección
        placeholder="Address of the project"
        required
        className="calendarioCitas-input"
      />
      <button type="submit" className="calendarioCitas-button">
        Confirm information
      </button>
    </form>
  </div>
)}

{/* Modal para confirmar la cita con los datos proporcionados */}
{appointmentDetails.date && appointmentDetails.time && isEmailProvided && (
  <div className="modern-modal-overlay">
    <div className="modern-modal">
      <h3 className="modern-modal-title">Appointment Confirmation</h3>
      {/* Detalles de la cita */}
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
        <button onClick={handleCloseModal} className="modern-button cancel">
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

{/* Muestra los detalles de la cita confirmada */}
{confirmedAppointment && (
  <div className="calendarioCitas-confirmedDetails">
    <h2 className='TitleAppointmentDEtails'>Your appointment details</h2>
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

);}

export default CalendarioCitas;

