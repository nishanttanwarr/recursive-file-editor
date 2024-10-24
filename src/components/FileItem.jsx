import React from 'react';

const FileItem = ({ file, onOpen, onDeleteFile }) => {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-200 transition duration-200">
      <span onClick={() => onOpen(file)} className="cursor-pointer">
        📄 {file.name}
      </span>
      <button
        onClick={() => onDeleteFile(file.id)} // Call the delete function with file ID
        className="ml-2 text-red-500 hover:text-red-700"
      >
        🗑️ Delete
      </button>
    </div>
  );
};

export default FileItem;
