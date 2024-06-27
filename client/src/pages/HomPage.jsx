import React, { useState, useEffect } from "react";
import { getEvents, deleteEvent } from "../services/APi"; // Ensure you have deleteEvent in your API service
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEvents();
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    await deleteEvent(id);
    setEvents(events.filter((event) => event._id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container">
      <h1>Events</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td>{event.name}</td>
              <td>{new Date(event.date).toLocaleDateString()}</td>
              <td>{event.location}</td>
              <td>{event.description}</td>
              <td>
                <div className="action-icons">
                  <FiEdit onClick={() => handleEdit(event._id)} />
                  <AiOutlineDelete onClick={() => handleDelete(event._id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
