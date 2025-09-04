import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import NoteView from "./components/NoteView";
import { notesApi } from "./services/api";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load notes from backend on component mount
  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const response = await notesApi.getAll();
      setNotes(response.data);
    } catch (error) {
      console.error("Error loading notes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddNote = async (note) => {
    try {
      const response = await notesApi.create(note);
      setNotes([...notes, response.data]);
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await notesApi.delete(id);
      setNotes(notes.filter((note) => note.id !== id));
      setSelectedNote(null);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  if (loading) {
    return <div>Loading notes...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Notes</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NotesList
        notes={notes}
        onSelectNote={setSelectedNote}
        onDeleteNote={handleDeleteNote}
      />
      <NoteView note={selectedNote} />
    </div>
  );
}

export default App;