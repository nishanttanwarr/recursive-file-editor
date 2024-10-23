// components/FileEditor.jsx
const FileEditor = ({ file }) => (
    <div className="border p-4">
      <h2>{file.name}</h2>
      <p>{file.content}</p> {/* You can enhance this to show code or other content */}
    </div>
  );
  
  export default FileEditor;
  