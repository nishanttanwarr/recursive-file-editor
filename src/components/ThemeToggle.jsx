// src/components/ThemeToggle.jsx
import { useState, useEffect } from 'react';

const ThemeToggle = ({ onToggle }) => {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
    onToggle(!isDark);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <button
      onClick={handleToggle}
      className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded transition"
    >
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
