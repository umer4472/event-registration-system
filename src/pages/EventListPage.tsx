import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEvents } from "../services/api";
import { Event } from "../types";
import "../pages/EventListPage.scss";

const EventListPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getEvents();
        setEvents(events);
      } catch (err) {
        setError('Failed to fetch events. Please try again later.');
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Events</h1>
      </div>
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        events.map(event => (
          <div key={event.id} className="event">
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <Link to={`/register/${event.id}`}>
              <button className="btn-register">Register</button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default EventListPage;
