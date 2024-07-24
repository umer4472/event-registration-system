import React from "react";
import { Link } from "react-router-dom";
import "../pages/RegistrationConfirmationPage.scss";

interface EventDetails {
  title: string;
  date: string;
  location: string;
}

interface Registration {
  event: EventDetails;
  name: string;
  email: string;
  phone: string;
}

const RegistrationConfirmationPage: React.FC = () => {
  const registrations = JSON.parse(localStorage.getItem("registrations") || "[]") as Registration[];
  const registration = registrations[registrations.length - 1];

  if (!registration) {
    return <div>No registration data available</div>;
  }

  return (
    <div className="container">
      <h1>Registration Confirmation</h1>
      <p>Event: {registration.event.title}</p>
      <p>Date: {registration.event.date}</p>
      <p>Location: {registration.event.location}</p>
      <p>Name: {registration.name}</p>
      <p>Email: {registration.email}</p>
      <p>Phone: {registration.phone}</p>
      <Link to="/">
        <button className="btn-back">Back to Events</button>
      </Link>
    </div>
  );
};

export default RegistrationConfirmationPage;
