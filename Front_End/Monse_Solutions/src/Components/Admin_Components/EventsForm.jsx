import React from 'react'
import '../../Styles/Components_Styles/Admin_C_Styles/EventsForm.css'
import { useState } from 'react';


function EventsForm() {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    starting_date: "",
    ending_date: "",
    place: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Evento enviado:", eventData);
  };

  
  return (
      
    <form className="event-form-container" onSubmit={handleSubmit}>
    <div className="event-form-group">
      
      <label htmlFor="title" className="event-label">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={eventData.title}
        onChange={handleChange}
        className="event-input"
        placeholder="Enter the title"
      />
    </div>
    <div className="event-form-group">
      <label htmlFor="description" className="event-label">Description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={eventData.description}
        onChange={handleChange}
        className="event-input"
        placeholder="Enter the description"
      />
    </div>
    <div className="event-form-group">
      <label htmlFor="starting_date" className="event-label">Starting Date</label>
      <input
        type="datetime-local"
        id="starting_date"
        name="starting_date"
        value={eventData.starting_date}
        onChange={handleChange}
        className="event-input"
      />
    </div>
    <div className="event-form-group">
      <label htmlFor="ending_date" className="event-label">Ending Date</label>
      <input
        type="datetime-local"
        id="ending_date"
        name="ending_date"
        value={eventData.ending_date}
        onChange={handleChange}
        className="event-input"
      />
    </div>
    <div className="event-form-group">
      <label htmlFor="place" className="event-label">Place</label>
      <input
        type="text"
        id="place"
        name="place"
        value={eventData.place}
        onChange={handleChange}
        className="event-input"
        placeholder="Enter the place"
      />
    </div>
    <button type="submit" className="event-submit-button">
      Submit
    </button>
  </form>
  )
}

export default EventsForm
