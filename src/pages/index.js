// src/pages/index.js
import { useState } from 'react';
import FolderItem from '../components/FolderItem';
import FileEditor from '../components/FileEditor';
import ThemeToggle from '../components/ThemeToggle'; // Import ThemeToggle

const folderStructure = {
  id: 1,
  name: 'src',
  items: [
    { id: 2, name: 'File 1.js', type: 'file', content: "console.log('Hello World');" },
    {
      id: 3,
      name: 'components',
      type: 'folder',
      items: [
        { id: 4, name: 'File 2.js', type: 'file', content: "console.log('Hi SDC!!!');" },
      ],
    },
  ],
};

export default function Home() {
  const [openedFile, setOpenedFile] = useState(null);

  const handleOpenFile = (file) => {
    setOpenedFile(file);
  };

  const handleThemeToggle = (isDark) => {
    // You can implement additional logic here if needed
    console.log(`Theme is now ${isDark ? 'Dark' : 'Light'}`);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4">
        <ThemeToggle onToggle={handleThemeToggle} />
      </div>
      <div className="flex flex-grow">
        <div className="w-1/3 border-r p-4">
          <h1>Files</h1>
          <FolderItem folder={folderStructure} onOpen={handleOpenFile} />
        </div>
        <div className="w-2/3 p-4">
          {openedFile ? (
            <FileEditor file={openedFile} />
          ) : (
            <p>Select a file to view its content.</p>
          )}
        </div>
      </div>
    </div>
  );
}
