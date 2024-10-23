const FileEditor = ({ file }) => (
    <div className="border p-4">
      <h2>{file.name}</h2>
      <p>{file.content}</p> 
    </div>
  );
  
  export default FileEditor;
  