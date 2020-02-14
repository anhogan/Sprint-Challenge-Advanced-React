import React from 'react';
import useDarkMode from './hooks/useDarkMode';

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  
  return (
    <div className="header">
      <h1>Women's World Cup Players</h1>
      <div className="dark-mode-toggle">
        <div 
          onClick={toggleMode} 
          className={darkMode ? 'darkMode on' : 'darkMode'} />
      </div>
    </div>
  );
};

export default Header;