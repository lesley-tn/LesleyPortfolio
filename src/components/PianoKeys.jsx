import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { CameraMove } from './CameraMove';
import { useStore } from './index';

const flatkeys = [
  { note: 'Ab2', position: new Vector3(-28.35, -21.3, -74.8) },
  { note: 'Bb2', position: new Vector3(-26.25, -21.3, -74.8) },

  { note: 'Db3', position: new Vector3(-22.05, -21.3, -74.8) },
  { note: 'Eb3', position: new Vector3(-19.95, -21.3, -74.8) },
  { note: 'Gb3', position: new Vector3(-15.75, -21.3, -74.8) },
  { note: 'Ab3', position: new Vector3(-13.65, -21.3, -74.8) },
  { note: 'Bb3', position: new Vector3(-11.55, -21.3, -74.8) },

  { note: 'Db4', position: new Vector3(-7.35, -21.3, -74.8) },
  { note: 'Eb4', position: new Vector3(-5.25, -21.3, -74.8) },
  { note: 'Gb4', position: new Vector3(-1.05, -21.3, -74.8) },
  { note: 'Ab4', position: new Vector3(1.05, -21.3, -74.8) },
  { note: 'Bb4', position: new Vector3(3.15, -21.3, -74.8) },
  
  { note: 'Db5', position: new Vector3(7.35, -21.3, -74.8) },
  { note: 'Eb5', position: new Vector3(9.45, -21.3, -74.8) },
  { note: 'Gb5', position: new Vector3(13.65, -21.3, -74.8) },
  { note: 'Ab5', position: new Vector3(15.75, -21.3, -74.8) },
  { note: 'Bb5', position: new Vector3(17.85, -21.3, -74.8) },

  { note: 'Db6', position: new Vector3(22.05, -21.3, -74.8) },
  { note: 'Eb6', position: new Vector3(24.15, -21.3, -74.8) },

];

const naturalKeys = [
  { note: 'G2', position: new Vector3(-29.4, -22, -73.7) },
  { note: 'A2', position: new Vector3(-27.3, -22, -73.7) },
  { note: 'B2', position: new Vector3(-25.2, -22, -73.7) },

  { note: 'C3', position: new Vector3(-23.1, -22, -73.7) },
  { note: 'D3', position: new Vector3(-21, -22, -73.7) },
  { note: 'E3', position: new Vector3(-18.9, -22, -73.7) },
  { note: 'F3', position: new Vector3(-16.8, -22, -73.7) },
  { note: 'G3', position: new Vector3(-14.7, -22, -73.7) },
  { note: 'A3', position: new Vector3(-12.6, -22, -73.7) },
  { note: 'B3', position: new Vector3(-10.5, -22, -73.7) },

  { note: 'C4', position: new Vector3(-8.4, -22, -73.7) },
  { note: 'D4', position: new Vector3(-6.3, -22, -73.7) },
  { note: 'E4', position: new Vector3(-4.2, -22, -73.7) },
  { note: 'F4', position: new Vector3( -2.1, -22, -73.7) },
  { note: 'G4', position: new Vector3(0, -22, -73.7) },
  { note: 'A4', position: new Vector3(2.1, -22, -73.7) },
  { note: 'B4', position: new Vector3(4.2, -22, -73.7) },

  { note: 'C5', position: new Vector3(6.3, -22, -73.7) },
  { note: 'D5', position: new Vector3(8.4, -22, -73.7) },
  { note: 'E5', position: new Vector3(10.5, -22, -73.7) },
  { note: 'F5', position: new Vector3(12.6, -22, -73.7) },
  { note: 'G5', position: new Vector3(14.7, -22, -73.7) },
  { note: 'A5', position: new Vector3(16.8, -22, -73.7) },
  { note: 'B5', position: new Vector3(18.9, -22, -73.7) },

  { note: 'C6', position: new Vector3(21, -22, -73.7) },
  { note: 'D6', position: new Vector3(23.1, -22, -73.7) },
  { note: 'E6', position: new Vector3(25.2, -22, -73.7) },
 
];

const naturalKeyColors = {
  color: 'white',
  hoverColor: '#a16da8',
  activeColor: '#724178',
};

const flatKeyColors = {
  color: 'black',
  hoverColor: '#2b4e8f',
  activeColor: '#1d3869',
};

export function PianoKeys() {
  const { camera } = useThree();
  const store = useStore();
  const [keyColors, setKeyColors] = useState(
    [...naturalKeys, ...flatkeys].reduce((acc, { note }) => {
      acc[note] = note.includes('b') ? flatKeyColors.color : naturalKeyColors.color;
      return acc;
    }, {})
  );
  const [playingNote, setPlayingNote] = useState(null);

  const audioMap = useRef(
    Object.fromEntries(
      [...naturalKeys, ...flatkeys].map(({ note }) => [
        note,
        new Audio(`/audio/pianoNotes/${note}.mp3`),
      ])
    )
  );

  const handlePointerDown = (note) => {
    if (playingNote) {
      audioMap.current[playingNote].pause();
      audioMap.current[playingNote].currentTime = 0; 
    }

    audioMap.current[note].play();
    setPlayingNote(note);

    const keyColorType = note.includes('b') ? flatKeyColors : naturalKeyColors;
    setKeyColors((prevColors) => ({
      ...prevColors,
      [note]: keyColorType.activeColor,
    }));
  };

  const handleKeyDown = (event) => {
    if (store.open) return;

    const note = event.key.toUpperCase();
    if (['C', 'E', 'A'].includes(note)) {
      switch (note) {
        case 'C':
          CameraMove({ camera, position: { x: -130, y: 0, z: -82 }, targetPosition: { x: -130, y: 0, z: -82 } });
          store.open = true;
          store.currentModel = 'ContactMe';
          new Audio('/audio/Nokia.mp3').play();
          document.exitPointerLock();
          break;
        case 'E':
          CameraMove({ camera, position: { x: -20, y: 0, z: 162 }, targetPosition: { x: -20, y: 0, z: 182 } });
          store.open = true;
          store.currentModel = 'Predict';
          new Audio('/audio/EMajor.wav').play();
          document.exitPointerLock();
          break;
        case 'A':
          CameraMove({ camera, position: { x: 170, y: 2, z: -82 }, targetPosition: { x: 170, y: 2, z: -82 } });
          store.open = true;
          store.currentModel = 'AboutMe';
          new Audio('/audio/AMajor.wav').play();
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
      {naturalKeys.map(({ note, position }, index) => (
        <Box
          key={index}
          args={[2, 1.3, 7.5]}
          position={position}
          onPointerOver={() => setKeyColors((prevColors) => ({ ...prevColors, [note]: naturalKeyColors.hoverColor }))}
          onPointerOut={() => setKeyColors((prevColors) => ({ ...prevColors, [note]: naturalKeyColors.color }))}
          onPointerDown={() => handlePointerDown(note)}
        >
          <meshStandardMaterial castShadow receiveShadow color={keyColors[note]} />
        </Box>
      ))}

{flatkeys.map(({ note, position }, index) => (
        <group key={index}>
          {/* Buffer around flat keys */}
          <Box
            args={[1.7, 1.5, 5.5]} // Slightly larger than the flat key
            position={[position.x, position.y - 0.2, position.z ]} // Adjust the z position to create a buffer
            onPointerOver={(e) => e.stopPropagation()}
            onPointerOut={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <meshStandardMaterial transparent opacity={0} />
          </Box>
          {/* Flat key */}
          <Box
            args={[1.5, 1.3, 5]}
            position={position}
            onPointerOver={() => setKeyColors((prevColors) => ({ ...prevColors, [note]: flatKeyColors.hoverColor }))}
            onPointerOut={() => setKeyColors((prevColors) => ({ ...prevColors, [note]: flatKeyColors.color }))}
            onPointerDown={() => handlePointerDown(note)}
          >
            <meshStandardMaterial castShadow receiveShadow color={keyColors[note]} />
          </Box>
        </group>
      ))}
    </group>
  );
}