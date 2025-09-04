import React from "react";

function NoteView({ note }) {
  if (!note) return <p>Select a note to view</p>;
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}

export default NoteView;
