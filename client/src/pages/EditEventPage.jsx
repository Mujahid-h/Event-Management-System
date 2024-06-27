import React, { useState, useEffect } from "react";
import { getEventById, updateEvent } from "../services/APi";
import { useParams, useNavigate } from "react-router-dom";

const EditEventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEventById(id);
        setEvent({
          name: eventData.name,
          date: new Date(eventData.date).toISOString().split("T")[0],
          location: eventData.location,
          description: eventData.description,
        });
      } catch (error) {
        console.error("Failed to fetch event:", error);
      }
    };

    fetchEvent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEvent(id, event);
      navigate("/");
    } catch (error) {
      console.error("Failed to update event:", error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Event</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={event.name}
          onChange={handleChange}
          placeholder="Event Name"
          required
        />
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          value={event.location}
          onChange={handleChange}
          placeholder="Location"
          required
        />
        <textarea
          name="description"
          value={event.description}
          onChange={handleChange}
          placeholder="Description"
          required
        ></textarea>
        <button type="submit">Update Event</button>
      </form>
    </div>
  );
};

export default EditEventPage;
