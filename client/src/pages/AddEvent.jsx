import React, { useState } from "react";
import { createEvent } from "../services/APi";
import { useNavigate } from "react-router-dom";

const AddEventPage = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = { name, date, location, description };
    await createEvent(newEvent);
    setName("");
    setDate("");
    setLocation("");
    setDescription("");
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Event Name"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        ></textarea>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEventPage;
