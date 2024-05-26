import React, { forwardRef, useEffect, useState } from 'react';

const controlOptions = [
    { keys: ['W'], action: 'Forward' },
    { keys: ['A'], action: 'Left' },
    { keys: ['D'], action: 'Right' },
    { keys: ['S'], action: 'Backward' },
  ];
  
export function ControlKeys() {
  return (
    <div className="control">
      <div className="control-item">
        <div className="control-keys-wasd">
          <div className="key-row top-row">
            <span className="key">W</span>
          </div>
          <div className="key-row bottom-row">
            <span className="key">A</span>
            <span className="key">S</span>
            <span className="key">D</span>
          </div>
        </div>
        <div className="description">Move</div>
      </div>
      <div className="control-item">
        <img src="/img/mouse.png" className="key-mouse" />
        <div className="description">Rotate View</div>
      </div>
    </div>
  );
}

export function Loading({ started, progress, onStarted }) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setIsComplete(true);
    }
  }, [progress]);

  return (
    <div 
      className={`loading ${started ? "loading--started" : ""} ${isComplete ? "loading--complete" : ""}`} 
      onClick={isComplete ? onStarted : null}
    >
      <div className="loading__board bubblegum-sans-regular" >
        <h1>Welcome to Lesley's Portfolio</h1>

        <ControlKeys />

        <h2> ! <span className='audio_message'>Turn Audio On for Best Experience </span> !</h2>

        <div className="loading__progress">
          <div
            className="loading__progress__value"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
        {isComplete && <div className="loading__message">Click Anywhere to Continue</div>}
      </div>
    </div>
  );
}