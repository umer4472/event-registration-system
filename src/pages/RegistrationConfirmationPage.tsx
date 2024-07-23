import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.scss";

const RegistrationConfirmationPage: React.FC = () => {
  const registration = JSON.parse(localStorage.getItem("registration") || "{}");

  return (
    <div className="container">
      <h1>Registration Confirmation</h1>
      <p>Event: {registration.event.name}</p>
      <p>Date: {registration.event.date}</p>
      <p>Location: {registration.event.location}</p>
      <p>Name: {registration.name}</p>
      <p>Email: {registration.email}</p>
      <p>Phone: {registration.phone}</p>
      <Link to="/">
        <button>Back to Events</button>
      </Link>
    </div>
  );
};

export default RegistrationConfirmationPage;
