import React from 'react';
import './MainMenu.css';

const MainMenu = () => {
  const handlePlayClick = () => {
    if (handlePlayClick) isTrue
        console.log('Play button clicked');
    // You can navigate to a different page, display a modal, or perform any other action here
  };

  const handleOptionsClick = () => {
    if (handleOptionsClick) isTrue;
        console.log('Options button clicked');
    
  };

  const handleQuitClick = () => {
    if (handleQuitClick) isTrue;
        console.log('Quit button clicked');
    // You can close the application or show a confirmation modal here
  };

  return (
    <div className="main-menu">
      <button className="menu-button" onClick={handlePlayClick}>
        Play
      </button>
      <button className="menu-button" onClick={handleOptionsClick}>
        Options
      </button>
      <button className="menu-button" onClick={handleQuitClick}>
        Quit
      </button>
    </div>
  );
};

export default MainMenu;
