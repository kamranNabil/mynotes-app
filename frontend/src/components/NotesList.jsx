import React from "react";

function NotesList({ notes, onSelectNote, onDeleteNote }) {
  return (
    <div>
      <h2>Notes List</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <strong onClick={() => onSelectNote(note)} style={{ cursor: "pointer" }}>
              {note.title}
            </strong>
            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;
