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

  useEffect(() => {
    if (eventId) {
      const fetchEvent = async () => {
        const events = await getEvents();
        const event = events.find(e => e.id === parseInt(eventId));
        setEvent(event || null);
      };

      fetchEvent();
    }
  }, [eventId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registration = { event, name, email, phone };
    const registrations = JSON.parse(localStorage.getItem("registrations") || "[]");
    registrations.push(registration);
    localStorage.setItem("registrations", JSON.stringify(registrations));
    navigate("/confirmation");
  };

  return (
    <div className="container">
      {event ? (
        <>
          <h1>Register for <span>{event.title}</span> </h1>
          <form onSubmit={handleSubmit}>
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
        <p>Event not found.</p>
      )}
    </div>
  );
};

export default EventRegistrationPage;
