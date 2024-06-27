import axios from "axios";

const API_URL = "http://localhost:8080/api/events";

export const getEvents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createEvent = async (event) => {
  const response = await axios.post(API_URL, event);
  return response.data;
};

export const getEventById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    throw error;
  }
};

export const updateEvent = async (id, event) => {
  const response = await axios.put(`${API_URL}/${id}`, event);
  return response.data;
};

export const deleteEvent = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
