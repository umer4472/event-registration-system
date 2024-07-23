import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/MyRegistrationsPage.scss";

interface Registration {
  event: {
    id: number;
    name: string;
    date: string;
    location: string;
  };
  name: string;
  email: string;
  phone: string;
}

const MyRegistrationsPage: React.FC = () => {
  const navigate = useNavigate();
  const registrations: Registration[] = JSON.parse(localStorage.getItem("registrations") || "[]");

  return (
    <div className="container">
      <h1>My Registrations</h1>
      {registrations.length > 0 ? (
        registrations.map((registration, index) => (
          <div key={index} className="event">
            <h2>{registration.event.name}</h2>
            <p>Date: {registration.event.date}</p>
            <p>Location: {registration.event.location}</p>
            <p>Name: {registration.name}</p>
            <p>Email: {registration.email}</p>
            <p>Phone: {registration.phone}</p>
          </div>
        ))
      ) : (
        <p>No registrations found.</p>
      )}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default MyRegistrationsPage;
