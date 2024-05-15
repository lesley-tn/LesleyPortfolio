import React, {useState} from 'react';
import { useStore } from '../components'
import {Catan, FocuStudy, Twentee, Predict, Kennispunt, AboutMe} from './index'
import { ContactMe } from './ContactMe';

export function Overlay() {
  const state = useStore();
  const [clicked, setClicked] = useState(false);
  
  const getModelContent = () => {
    switch (state.currentModel) {
      case 'Twentee':
        return <Twentee />;
      case 'FocuStudy':
        return <FocuStudy />;
      case 'Predict':
        return <Predict />;
      case 'Kennispunt':
        return <Kennispunt />;
      case 'Catan':
        return <Catan />;
      case 'AboutMe':
        return <AboutMe />;
      case 'ContactMe':
        return <ContactMe />;
        
    }
  };

  const CloseOverlay = () => {
    setClicked(true); 
    setTimeout(() => {
      state.setOpen(false); 
      setClicked(false); 
    }, 1000); 
  };


  return (
    <div className={`overlay ${state.open ? "active" : ""} ${clicked ? "clicked" : ""}`} onClick={(e) => e.stopPropagation()}>
      {state.open && (
          <>
          {getModelContent()}   
              <div className="close-button-container">
                <button onClick={CloseOverlay}>Back to Home</button>
              </div>
                        
          </>
      )}
    </div>
  );
}
