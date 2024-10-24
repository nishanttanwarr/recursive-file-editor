const AddFolderButton = ({ onAddFolder }) => {
    return (
      <button 
        onClick={onAddFolder} 
        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
      >
        Add Folder
      </button>
    );
  };
  
  export default AddFolderButton;
  