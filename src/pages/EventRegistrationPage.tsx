import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEvents } from "../services/api";
import { Event } from "../types";
import "../pages/EventRegistrationPage.scss";

const EventRegistrationPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (eventId) {
      const fetchEvent = async () => {
        try {
          const events = await getEvents();
          const event = events.find(e => e.id === parseInt(eventId));
          setEvent(event || null);
          if (!event) {
            setError("Event not found.");
          }
        } catch (err) {
          setError("Failed to fetch events. Please try again later.");
        }
      };

      fetchEvent();
    }
  }, [eventId]);

  const validateForm = () => {
    if (!name || !email || !phone) {
      setError("All fields are required.");
      return false;
    }
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
      setError("Phone number must be numeric.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const registration = { event, name, email, phone };
      const registrations = JSON.parse(localStorage.getItem("registrations") || "[]");
      registrations.push(registration);
      localStorage.setItem("registrations", JSON.stringify(registrations));
      navigate("/confirmation");
    } catch (err) {
      setError("Failed to save registration. Please try again.");
    }
  };

  return (
    <div className="container">
      {event ? (
        <>
          <h1>Register for <span>{event.title}</span></h1>
          <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div>
              <label>Name:</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div>
              <label>Phone:</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
            </div>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </>
      ) : (
        <p>{error || "Event not found."}</p>
      )}
    </div>
  );
};

export default EventRegistrationPage;
