import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../services/api";
import { Event } from "../types";
import "../pages/EventListPage.scss";

const EventListPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents();
      setEvents(events);
    };

    fetchEvents();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Events</h1>
        <Link to="/my-registrations">
          <button className="btn">My Registrations</button>
        </Link>
      </div>
      {events.map(event => (
        <div key={event.id} className="event">
          <h2>{event.title}</h2>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          <Link to={`/register/${event.id}`}>
            <button className="btn-register">Register</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EventListPage;
