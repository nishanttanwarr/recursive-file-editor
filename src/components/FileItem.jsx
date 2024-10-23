// components/FileItem.jsx
const FileItem = ({ file, onOpen }) => (
    <div className="cursor-pointer" onClick={() => onOpen(file)}>
      📄 {file.name}
    </div>
  );
  
  export default FileItem;
  