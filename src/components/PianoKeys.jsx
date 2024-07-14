import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { CameraMove } from './CameraMove';
import { useStore } from './index';

const flatkeys = [
  { note: 'Ab2', position: new Vector3(-28.35, -21.3, -32) },
  { note: 'Bb2', position: new Vector3(-26.25, -21.3, -32) },

  { note: 'Db3', position: new Vector3(-22.05, -21.3, -32) },
  { note: 'Eb3', position: new Vector3(-19.95, -21.3, -32) },
  { note: 'Gb3', position: new Vector3(-15.75, -21.3, -32) },
  { note: 'Ab3', position: new Vector3(-13.65, -21.3, -32) },
  { note: 'Bb3', position: new Vector3(-11.55, -21.3, -32) },

  { note: 'Db4', position: new Vector3(-7.35, -21.3, -32) },
  { note: 'Eb4', position: new Vector3(-5.25, -21.3, -32) },
  { note: 'Gb4', position: new Vector3(-1.05, -21.3, -32) },
  { note: 'Ab4', position: new Vector3(1.05, -21.3, -32) },
  { note: 'Bb4', position: new Vector3(3.15, -21.3, -32) },
  
  { note: 'Db5', position: new Vector3(7.35, -21.3, -32) },
  { note: 'Eb5', position: new Vector3(9.45, -21.3, -32) },
  { note: 'Gb5', position: new Vector3(13.65, -21.3, -32) },
  { note: 'Ab5', position: new Vector3(15.75, -21.3, -32) },
  { note: 'Bb5', position: new Vector3(17.85, -21.3, -32) },

  { note: 'Db6', position: new Vector3(22.05, -21.3, -32) },
  { note: 'Eb6', position: new Vector3(24.15, -21.3, -32) },

];

const naturalKeys = [
  { note: 'G2', position: new Vector3(-29.4, -22, -30.9) },
  { note: 'A2', position: new Vector3(-27.3, -22, -30.9) },
  { note: 'B2', position: new Vector3(-25.2, -22, -30.9) },

  { note: 'C3', position: new Vector3(-23.1, -22, -30.9) },
  { note: 'D3', position: new Vector3(-21, -22, -30.9) },
  { note: 'E3', position: new Vector3(-18.9, -22, -30.9) },
  { note: 'F3', position: new Vector3(-16.8, -22, -30.9) },
  { note: 'G3', position: new Vector3(-14.7, -22, -30.9) },
  { note: 'A3', position: new Vector3(-12.6, -22, -30.9) },
  { note: 'B3', position: new Vector3(-10.5, -22, -30.9) },

  { note: 'C4', position: new Vector3(-8.4, -22, -30.9) },
  { note: 'D4', position: new Vector3(-6.3, -22, -30.9) },
  { note: 'E4', position: new Vector3(-4.2, -22, -30.9) },
  { note: 'F4', position: new Vector3( -2.1, -22, -30.9) },
  { note: 'G4', position: new Vector3(0, -22, -30.9) },
  { note: 'A4', position: new Vector3(2.1, -22, -30.9) },
  { note: 'B4', position: new Vector3(4.2, -22, -30.9) },

  { note: 'C5', position: new Vector3(6.3, -22, -30.9) },
  { note: 'D5', position: new Vector3(8.4, -22, -30.9) },
  { note: 'E5', position: new Vector3(10.5, -22, -30.9) },
  { note: 'F5', position: new Vector3(12.6, -22, -30.9) },
  { note: 'G5', position: new Vector3(14.7, -22, -30.9) },
  { note: 'A5', position: new Vector3(16.8, -22, -30.9) },
  { note: 'B5', position: new Vector3(18.9, -22, -30.9) },

  { note: 'C6', position: new Vector3(21, -22, -30.9) },
  { note: 'D6', position: new Vector3(23.1, -22, -30.9) },
  { note: 'E6', position: new Vector3(25.2, -22, -30.9) },
 
];

export function PianoKeys() {
  const { camera } = useThree();
  const store = useStore();

  let currentAudio = null;

  const handleKeyDown = (event) => {
    if (store.open) return;
  
    const note = event.key.toUpperCase();
    if (['1', '2', '3'].includes(note)) {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
  
      let newAudio;
      switch (note) {
        case '3':
          CameraMove({ camera, position: { x: -87, y: 0, z: -30 }, targetPosition: { x: -87, y: 0, z: -32 } });
          store.open = true;
          store.currentModel = 'ContactMe';
          newAudio = new Audio('/audio/Nokia.mp3');
          newAudio.volume = 0.2; // Set volume to 20%
          newAudio.play();
          currentAudio = newAudio;
          document.exitPointerLock();
          break;
        case '2':
          CameraMove({ camera, position: {  x: -20, y: 0, z: 154 }, targetPosition: { x: -20, y: 0, z: 155 } });
          store.open = true;
          store.currentModel = 'Predict';
          newAudio = new Audio('/audio/bach.mp3');
          newAudio.volume = 0.6;
          newAudio.play();
          currentAudio = newAudio;
          document.exitPointerLock();
          break;
        case '1':
          CameraMove({ camera, position: { x: 135, y: 2, z: -30 }, targetPosition: { x: 135, y: 2, z: -32 } });
          store.open = true;
          store.currentModel = 'AboutMe';
          newAudio = new Audio('/audio/lesley.wav');
          newAudio.play();
          currentAudio = newAudio;
          document.exitPointerLock();
          break;

        default:
          break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <group>
      {naturalKeys.map(({ position }, index) => (
        <Box
          key={index}
          args={[2, 1.3, 7.5]}
          position={position}
        >
          <meshStandardMaterial castShadow receiveShadow color={'white'} />
        </Box>
      ))}

      {flatkeys.map(({ position }, index) => (
        <Box
          key={index}
          args={[1.5, 1.3, 5]}
          position={position}
        >
          <meshStandardMaterial castShadow receiveShadow color={'black'} />
        </Box>
      ))}

    </group>
  );
}