import * as THREE from 'three';
import cChord from '../assets/audio/C-Major-Chord.mp3';
import aChord from '../assets/audio/AMajor.wav';
import bChord from '../assets/audio/BMajor.wav';
import dChord from '../assets/audio/DMajor.wav';
import eChord from '../assets/audio/EMajor.wav';
import fChord from '../assets/audio/FMajor.wav';
import gChord from '../assets/audio/GMajor.wav';
import React, { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';



class Key{
    static Playing = null;

    constructor (keyName, input, xOffset ) {    
        this.input = input; 
        this.keyGroup = new THREE.Group();
        
        this.keyName = keyName;

        if(keyName.length === 3){
            const geometry = new THREE.BoxGeometry(0.05,0.28,0.06);
            const material = new THREE.MeshStandardMaterial({ color: 0x000000});
            
            this.mesh = new THREE.Mesh(geometry, material);
            this.isFlat = true;
            this.mesh.position.x = xOffset;
            this.mesh.position.y = 0.72;
            this.mesh.position.z = -0.76;
            this.keyGroup.rotation.x = Math.PI / 2;

            this.keyGroup.add(this.mesh);

        } else {
            const geometry = new THREE.BoxGeometry(0.09,0.043,0.6);
            const material = new THREE.MeshMatcapMaterial({ color: 0xffffff});

            
            this.mesh = new THREE.Mesh(geometry, material);
            this.isFlat = false;
            this.mesh.position.x = xOffset;
            this.mesh.position.y = -0.72;
            this.mesh.position.z = -0.78
            this.keyGroup.rotation.x = Math.PI / 1;
            this.keyGroup.add(this.mesh);

            switch(keyName) {
                case 'A3':
                  this.audio = new Audio(aChord);
                  break;
                case 'B3':
                  this.audio = new Audio(bChord);
                  break;
                case 'C3':
                  this.audio = new Audio(cChord);
                  break;
                case 'D3':
                  this.audio = new Audio(dChord);
                  break;
                case 'E3':
                  this.audio = new Audio(eChord);
                  break;
                case 'F3':
                  this.audio = new Audio(fChord);
                  break;
                case 'G3':
                  this.audio = new Audio(gChord);
                  break;
              }
              
        }
        
    };
    
    playKey() {
      if (Key.Playing === this.audio){
          this.audio.pause();
          this.audio.currentTime = 0;
          Key.Playing = null;
      } else {
          if (Key.Playing) {
              Key.Playing.pause();
              Key.Playing.currentTime = 0;
          }
  
          this.mesh.material.color.set('#D694D3');
          if (this.audio) {
              this.audio.play();
              Key.Playing = this.audio;
          }
      }
  }
     
    releaseKey() {
        if (this.isFlat) {
            this.mesh.material.color.set('#000000');
        } else {
            this.mesh.material.color.set('#ffffff');
        }
    }
    
    getKeyGroup() {
        return this.keyGroup;
    }
    
}


class Keys {
    constructor() {
        this.pianoGroup = new THREE.Group();
        this.addNaturalKeys();
        this.addFlatKeys()      
    }

    validKey(input){
        const flatKey = this.flatKeys.find((key) => key.input === input)
        const naturalKey = this.naturalKeys.find((key) => key.input === input)
        return flatKey || naturalKey || undefined;
    }

    releaseKey(input){
        const validKey = this.validKey(input.toLowerCase());
        if (validKey !== undefined) {
            validKey.releaseKey();
        }
    }
    
    pressKey(input){
        const validKey = this.validKey(input.toLowerCase());
        if (validKey !== undefined) {
            validKey.playKey();
        }
    }

    
   

    addFlatKeys(){
        this.flatKeys = [
            new Key ( 'Db3', '1', -0.95  ),
            new Key ( 'Eb3', '2', -0.85 ),
            new Key ( 'Gb3', '3', -0.65 ),
            new Key ( 'Ab3', '4', -0.55 ),
            new Key ( 'Bb3', '5', -0.45 ),
            
            new Key ( 'Db4', '1', -0.25  ),
            new Key ( 'Eb4', '2', -0.15 ),
            new Key ( 'Gb4', '3', 0.05 ),
            new Key ( 'Ab4', '4', 0.15 ),
            new Key ( 'Bb4', '5', 0.25 ),
            
            new Key ( 'Db5', '1', 0.45  ),
            new Key ( 'Eb5', '2', 0.55 ),
            new Key ( 'Gb5', '3', 0.75 ),
            new Key ( 'Ab5', '4', 0.85 ),
            new Key ( 'Bb5', '5', 0.95 ),
        ];

        this.flatKeys.forEach((flatKey) => {
          
            this.pianoGroup.add(flatKey.getKeyGroup());
        });
    }

    addNaturalKeys(){
        this.naturalKeys = [
            new Key ( 'C3', 'c', -1.00 ),
            new Key ( 'D3', 'd', -0.90 ),
            new Key ( 'E3', 'e', -0.80 ),
            new Key ( 'F3', 'f', -0.70 ),
            new Key ( 'G3', 'g', -0.60 ),
            new Key ( 'A3', 'a', -0.50 ),
            new Key ( 'B3', 'b', -0.40 ),
            
            new Key ( 'C3', 'c', -0.30  ),
            new Key ( 'D3', 'd', -0.20 ),
            new Key ( 'E3', 'e', -0.10 ),
            new Key ( 'F3', 'f', 0.00 ),
            new Key ( 'G3', 'g', 0.10 ),
            new Key ( 'A3', 'a', 0.20 ),
            new Key ( 'B3', 'b', 0.30 ),
            
            new Key ( 'C5', 'c', 0.40  ),
            new Key ( 'D5', 'd', 0.50 ),
            new Key ( 'E5', 'e', 0.60 ),
            new Key ( 'F5', 'f', 0.70 ),
            new Key ( 'G5', 'g', 0.80 ),
            new Key ( 'A5', 'a', 0.90 ),
            new Key ( 'B5', 'b', 1.00 )
        ];
        this.naturalKeys.forEach((naturalKey) => {
            this.pianoGroup.add(naturalKey.getKeyGroup());
        });
       
    }

    initEventListeners() {
        window.addEventListener('keydown', (event) => this.onKeyDown(event));
        window.addEventListener('keyup', (event) => this.onKeyUp(event));
    }

    removeEventListeners() {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('keyup', this.onKeyUp);
    }

    onKeyDown(event) {
        if (event.repeat) return;
        this.pressKey(event.key);
    }

    onKeyUp(event) {
        this.releaseKey(event.key);
    }

    getPianoGroup(){
        return this.pianoGroup;
    }
}

const PianoKeys = () => {
    const { scene } = useThree(); // Access the Three.js scene from R3F
    const keysRef = useRef(null); // Create a ref to store the Keys instance

    useEffect(() => {
        const keys = new Keys();
        scene.add(keys.getPianoGroup());
        keysRef.current = keys; 

        keys.initEventListeners();
        return () => {
            scene.remove(keys.getPianoGroup());
            keys.removeEventListeners();
        };
    }, [scene]);

    return null; 
};

export default PianoKeys;