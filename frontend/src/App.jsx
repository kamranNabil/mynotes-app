import React, { useState } from "react";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import NoteView from "./components/NoteView";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleAddNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    setSelectedNote(null);
  };

  return (
    <div>
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
