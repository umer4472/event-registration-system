import React from "react";
import { Link } from "react-router-dom";
import "../pages/MyRegistrationsPage.scss";

interface Registration {
  event: {
    id: number;
    title: string;
    date: string;
    location: string;
  };
  name: string;
  email: string;
  phone: string;
}

const MyRegistrationsPage: React.FC = () => {
  const registrations: Registration[] = JSON.parse(localStorage.getItem("registrations") || "[]");

  return (
    <div className="container">
      <h1>My Registrations</h1>
      {registrations.length > 0 ? (
        registrations.map((registration, index) => (
          <div key={index} className="event">
            <h2>{registration.event.title}</h2>
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
      <Link to="/">
        <button className="btn-back">Back to Events</button>
      </Link>
    </div>
  );
};

export default MyRegistrationsPage;
