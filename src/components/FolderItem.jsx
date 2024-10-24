import { useState } from 'react';
import { motion } from 'framer-motion';
import FileItem from './FileItem';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import AddFolderButton from './AddFolderButton'; // Ensure correct import
import AddFileButton from './AddFileButton'; // Ensure correct import

const FolderItem = ({ folder, onOpen, onAddFolder, onAddFile, onDeleteFile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFolder = () => setIsOpen(!isOpen);

  return (
    <div>
      <div onClick={toggleFolder} className="cursor-pointer flex items-center p-2 hover:bg-gray-200 transition duration-200">
        {isOpen ? <FaChevronDown className="text-gray-600" /> : <FaChevronRight className="text-gray-600" />}
        <span className="ml-2">📁 {folder.name}</span>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="ml-4 bg-gray-50 border-l border-gray-300 rounded transition duration-200"
        >
          {/* Render the add buttons only in the root folder */}
          <div className="flex items-center mb-2">
            <AddFolderButton onAddFolder={() => onAddFolder(folder.id)} />
            <AddFileButton onAddFile={() => onAddFile(folder.id)} />
          </div>

          {folder.items.map((item) => (
            item.type === 'folder' ? (
              <FolderItem
                key={item.id}
                folder={item}
                onOpen={onOpen}
                onAddFolder={onAddFolder} // Pass down the function to add folders
                onAddFile={onAddFile}     // Pass down the function to add files
                onDeleteFile={onDeleteFile} // Pass down the delete function
              />
            ) : (
              <FileItem
                key={item.id}
                file={item}
                onOpen={onOpen}
                onDeleteFile={onDeleteFile} // Pass down the delete function to FileItem
              />
            )
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default FolderItem;


