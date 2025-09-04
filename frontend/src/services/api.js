import axios from 'axios';

// Use environment variable for production, fallback to localhost for development
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: `${API_BASE}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API methods for notes
export const notesApi = {
  // Get all notes
  getAll: () => api.get('/notes'),
  
  // Get single note by ID
  getById: (id) => api.get(`/notes/${id}`),
  
  // Create new note
  create: (noteData) => api.post('/notes', noteData),
  
  // Update existing note
  update: (id, noteData) => api.put(`/notes/${id}`, noteData),
  
  // Delete note
  delete: (id) => api.delete(`/notes/${id}`),
  
  // Generate share link
  share: (id) => api.post(`/notes/${id}/share`),
  
  // Get shared note by token
  getShared: (token) => api.get(`/notes/share/${token}`),
};

export default api;
