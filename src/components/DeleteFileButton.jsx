import React from 'react';

const DeleteFileButton = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="text-red-600 hover:text-red-800 ml-2"
    >
      🗑️ Delete
    </button>
  );
};

export default DeleteFileButton;
