import React from 'react';

const NotesList = ({ notes, onSelectNote, onDeleteNote }) => {
  return (
    <div>
      <h2>Your Notes</h2>
      {notes.length === 0 ? (
        <p>No notes yet. Create your first note!</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
              <h3>{note.title}</h3>
              <p>{note.content.substring(0, 50)}...</p>
              <button onClick={() => onSelectNote(note)}>View</button>
              <button onClick={() => onDeleteNote(note.id)} style={{ marginLeft: '10px', color: 'red' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;