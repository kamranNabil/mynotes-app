import React, { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onAddNote({ title, content });
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Add New Note</h2>
      <div>
        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ marginRight: '10px', padding: '5px' }}
        />
      </div>
      <div>
        <textarea
          placeholder="Note content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ margin: '10px 0', padding: '5px', width: '300px', height: '100px' }}
        />
      </div>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;