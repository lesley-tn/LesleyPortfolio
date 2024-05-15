import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import cChord from '../assets/audio/C-Major-Chord.mp3';
import aChord from '../assets/audio/AMajor.wav';
import bChord from '../assets/audio/BMajor.wav';
import dChord from '../assets/audio/DMajor.wav';
import eChord from '../assets/audio/EMajor.wav';
import fChord from '../assets/audio/FMajor.wav';
import gChord from '../assets/audio/GMajor.wav';

const chordMap = {
    C3: cChord,
    A3: aChord,
    B3: bChord,
    D3: dChord,
    E3: eChord,
    F3: fChord,
    G3: gChord,
};

function PianoKey({ position, color, size, note, pressedColor = 'blue', keyTrigger }) {
    const keyRef = useRef();
    const [keyColor, setKeyColor] = useState(color);
    const [listener] = React.useState(() => new THREE.AudioListener());
    const [audio] = React.useState(() => new THREE.Audio(listener));

    useEffect(() => {
        const audioLoader = new THREE.AudioLoader();
        audioLoader.load(chordMap[note], function (buffer) {
            audio.setBuffer(buffer);
        });

        const handleKeyDown = (event) => {
            if (event.key === keyTrigger) {
                keyRef.current.userData.isPressed = true;
                setKeyColor(pressedColor);
                setTimeout(() => setKeyColor(color), 200);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [keyTrigger, color, pressedColor, audio, note]);

    useFrame(() => {
        if (keyRef.current.userData.isPressed && !audio.isPlaying) {
            if (PianoKey.currentlyPlaying && PianoKey.currentlyPlaying !== audio) {
                PianoKey.currentlyPlaying.stop();
            }

            audio.play();
            keyRef.current.userData.isPressed = false;
            PianoKey.currentlyPlaying = audio;
        }
    });
  
  
    return (
      <mesh position={position} ref={keyRef}>
         <boxGeometry args={size} />
         <meshStandardMaterial color={keyColor} />
      </mesh>
    );
}  
  
PianoKey.currentlyPlaying = null;
  
export default function PianoKeys() {
    const naturalKeys = [
      { note: 'C3', position: [0, 0, 0], keyTrigger:'c' },
      { note: 'D3', position: [0.1, 0, 0], keyTrigger:'d' },
      { note: 'E3', position: [0.2, 0, 0], keyTrigger:'e' },
      { note: 'F3', position: [0.3, 0, 0], keyTrigger:'f' },
      { note: 'G3', position: [0.4, 0, 0], keyTrigger:'g' },
      { note: 'A3', position: [0.50, 0, 0], keyTrigger:'a'  },
      { note: 'B3', position: [0.60, 0, 0], keyTrigger:'b'  },
  
      { note: 'C3', position: [0.7, 0, 0] },
      { note: 'D3', position: [0.8, 0, 0] },
      { note: 'E3', position: [0.9, 0, 0] },
      { note: 'F3', position: [1.0, 0, 0] },
      { note: 'G3', position: [1.1, 0, 0] },
      { note: 'A3', position: [1.2, 0, 0] },
      { note: 'B3', position: [1.3, 0, 0] },

      { note: 'C3', position: [1.4 , 0, 0] },
      { note: 'D3', position: [1.5 , 0, 0] },
      { note: 'E3', position: [1.6 , 0, 0] },
      { note: 'F3', position: [1.7 , 0, 0] },
      { note: 'G3', position: [1.8 , 0, 0] },
      { note: 'A3', position: [1.9 , 0, 0] },
      { note: 'B3', position: [2.0 , 0, 0] },
  ];

  const flatKeys = [
    { note: 'Db3', position: [0.05, 0.04, -0.12] },
    { note: 'Eb3', position: [0.15, 0.04, -0.12] },
    { note: 'Gb3', position: [0.35, 0.04, -0.12] },
  ];

  return (
    <>
      {naturalKeys.map((key, index) => (
        <PianoKey
          key={`natural-${index}`}
          position={key.position}
          color="white"
          size={[0.09, 0.043, 0.6]}
          note={key.note}
          audioFile={`${key.note}.mp3`}
          keyTrigger={key.keyTrigger}
        />
      ))}
      {flatKeys.map((key, index) => (
        <PianoKey
          key={`flat-${index}`}
          position={key.position}
          color="black"
          size={[0.05, 0.05, 0.35]}
          audioFile={`${key.note}.mp3`}
        />
      ))}
    </>
  );
}
