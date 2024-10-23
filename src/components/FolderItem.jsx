// src/components/FolderItem.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import FileItem from './FileItem'; // Import FileItem

const FolderItem = ({ folder, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => setIsOpen(!isOpen);

  return (
    <div>
      <div onClick={toggleFolder} className="cursor-pointer">
        📁 {folder.name}
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {folder.items.map((item) => (
            item.type === 'folder' ? (
              <FolderItem key={item.id} folder={item} onOpen={onOpen} /> // Pass onOpen to FolderItem
            ) : (
              <FileItem key={item.id} file={item} onOpen={onOpen} /> // Ensure onOpen is passed to FileItem
            )
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default FolderItem;
