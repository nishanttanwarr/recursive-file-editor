const AddFileButton = ({ onAddFile }) => {
    return (
      <button 
        onClick={onAddFile} 
        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 ml-2"
      >
        Add File
      </button>
    );
  };
  
  export default AddFileButton;
  