// src/components/FileEditor.jsx
import React, { useState, useEffect } from 'react';

const FileEditor = ({ file, onSave }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Set the initial content of the file when it's opened
    if (file) {
      setContent(file.content);
    }
  }, [file]);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSave = () => {
    if (onSave) {
      onSave(file.id, content); // Call the onSave function with the file ID and new content
    }
  };

  if (!file) return null; // Render nothing if no file is selected

  return (
    <div className="border p-4">
      <h2>{file.name}</h2>
      <textarea
        className="w-full h-64 border p-2"
        value={content}
        onChange={handleChange}
      />
      <button onClick={handleSave} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Save
      </button>
    </div>
  );
};

export default FileEditor;
