import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import TasksAdminData from './TasksAdminData';
import EventsAdmiData from './EventsAdmiData';

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("tasks"); // Estado para la pestaña activa

  const renderContent = () => {
    switch (activeTab) {
      case "tasks":
        return <TasksAdminData />;
      case "events":
        return <EventsAdmiData />;
      default:
        return <div>Selecciona una opción válida</div>;
    }
  };

  return (
    <div>
      <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey="tasks">Task Form</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="events">Event Form</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="tab-content mt-4">{renderContent()}</div>
    </div>
  );
};

export default TabSwitcher;