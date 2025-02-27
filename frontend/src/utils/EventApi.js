import axios from 'axios';

export const API_BASE_URL = 'http://127.0.0.1:8000/api'; // Replace with your Django server URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch all events
export const getEvents = async () => {
  try {
    const response = await api.get('/events/');
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// Fetch a single event by ID
export const getEventById = async (id) => {
  try {
    const response = await api.get(`/events/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event:', error);
    throw error;
  }
};

// Create a new event
export const createEvent = async (eventData) => {
  try {
    const response = await api.post('/events/', eventData);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

// Update an event
export const updateEvent = async (id, eventData) => {
  try {
    const response = await api.put(`/events/${id}/`, eventData);
    return response.data;
  } catch (error) {
    console.error('Error updating event:', error);
    throw error;
  }
};

// Delete an event
export const deleteEvent = async (id) => {
  try {
    const response = await api.delete(`/events/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};