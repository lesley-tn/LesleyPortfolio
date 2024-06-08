import React from 'react';
import { useStore } from '../components';

export function CloseButton() {
  const state = useStore();
  
  const handleClose = () => {
    state.setOpen(false); 
  };

  return (
    <div className="close-button-container">
      <button onClick={handleClose} className="close-button">
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );
}