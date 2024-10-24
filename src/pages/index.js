import { useState } from 'react';
import FolderItem from '../components/FolderItem';
import FileEditor from '../components/FileEditor';
import AddFolderButton from '../components/AddFolderButton';
import AddFileButton from '../components/AddFileButton';

const initialFolderStructure = {
  id: 1,
  name: 'src',
  type: 'folder',
  items: [] // No initial files or folders
};

export default function Home() {
  const [folderStructure, setFolderStructure] = useState(initialFolderStructure);
  const [openedFile, setOpenedFile] = useState(null);

  const handleOpenFile = (file) => {
    setOpenedFile(file);
  };

  const addFolder = (parentId) => {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
      const newFolder = {
        id: Date.now(),
        name: folderName,
        type: 'folder',
        items: [],
      };
      setFolderStructure((prev) => addToStructure(prev, parentId, newFolder));
    }
  };

  const addFile = (parentId) => {
    const fileName = prompt("Enter file name:");
    if (fileName) {
      const newFile = {
        id: Date.now(),
        name: fileName,
        type: 'file',
        content: "", 
      };
      setFolderStructure((prev) => addToStructure(prev, parentId, newFile));
    }
  };

  const deleteFile = (fileId) => {
    const removeFileRecursive = (folders) => {
      return folders.reduce((acc, folder) => {
        if (folder.type === 'folder') {
          const updatedItems = removeFileRecursive(folder.items);
     
          if (updatedItems.length > 0) {
            acc.push({ ...folder, items: updatedItems });
          } else {
       
            acc.push({ ...folder, items: [] });
          }
        } else if (folder.id !== fileId) {
          acc.push(folder);
        }
        return acc;
      }, []);
    };

    setFolderStructure(prev => ({
      ...prev,
      items: removeFileRecursive(prev.items)
    }));

    
    if (openedFile && openedFile.id === fileId) {
      setOpenedFile(null);
    }
  };

  const addToStructure = (structure, parentId, newItem) => {
    if (structure.id === parentId) {
      return { ...structure, items: [...structure.items, newItem] };
    }
    return {
      ...structure,
      items: structure.items.map((item) =>
        item.type === 'folder' ? addToStructure(item, parentId, newItem) : item
      ),
    };
  };

  const handleSaveFileContent = (fileId, newContent) => {
    const updateFileContentRecursive = (folders) => {
      return folders.map(folder => {
        if (folder.items) {
          return {
            ...folder,
            items: updateFileContentRecursive(folder.items)
          };
        }
        if (folder.id === fileId) {
          return { ...folder, content: newContent }; 
        }
        return folder;
      });
    };

    setFolderStructure(prev => ({
      ...prev,
      items: updateFileContentRecursive(prev.items)
    }));

    if (openedFile && openedFile.id === fileId) {
      setOpenedFile(prev => ({ ...prev, content: newContent })); 
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow">
        <div className="w-1/3 border-r p-4">
          <h1>Files</h1>
          <div className="flex items-center mb-2">
            <AddFolderButton onAddFolder={() => addFolder(1)} />
            <AddFileButton onAddFile={() => addFile(1)} />
          </div>
          <FolderItem
            folder={folderStructure}
            onOpen={handleOpenFile}
            onAddFolder={addFolder}
            onAddFile={addFile}
            onDeleteFile={deleteFile} 
          />
        </div>
        <div className="w-2/3 p-4">
          {openedFile ? (
            <FileEditor file={openedFile} onSave={handleSaveFileContent} />
          ) : (
            <p>Select a file to view its content.</p>
          )}
        </div>
      </div>
    </div>
  );
}
