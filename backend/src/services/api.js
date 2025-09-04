import axios from 'axios';

const API_URL = 'http://localhost:8080/api/notes';

export const api = {
  getAllNotes: () => axios.get(API_URL),
  createNote: (note) => axios.post(API_URL, note),
  getNote: (id) => axios.get(`${API_URL}/${id}`),
  updateNote: (id, note) => axios.put(`${API_URL}/${id}`, note),
  deleteNote: (id) => axios.delete(`${API_URL}/${id}`),
  getNoteByShareLink: (shareLink) => axios.get(`${API_URL}/share/${shareLink}`)
};