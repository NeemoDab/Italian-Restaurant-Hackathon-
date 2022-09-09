import React, { useState, useEffect } from 'react';
import './Darkmode.css';
function Darkmode() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
    
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default Darkmode;