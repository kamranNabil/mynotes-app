import React from 'react';

const NoteView = ({ note }) => {
  if (!note) {
    return (
      <div>
        <h2>Note Details</h2>
        <p>Select a note to view details</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px' }}>
      <h2>Note Details</h2>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <p><em>Created: {new Date(note.id).toLocaleString()}</em></p>
    </div>
  );
};

export default NoteView;