import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Scroll, ScrollControls, Preload, OrbitControls, useGLTF} from '@react-three/drei';

import {  Card1, Card2, Card3 } from '../models';
import {CatanText} from '../components/text'

function Manual1() {
  const { scene } = useGLTF('./models/CatanManual.glb');

  return (
    <>
      <primitive 
          object={scene }  
          scale={6} 
          position={[0, 0, 0]}
        />
    </>
  );
}

export function Catan() {
 
  return (
    <div className='catan'>
      <h1>The Corpos Of Catan</h1>
    
      <p>The Corporates of Catan is a strategic board game that 
        transcends traditional resource management by incorporating elements of change theory to 
        challenge and engage players in the dynamics of a corporate environment.
        In this adaptation of the classic Catan game, players strive to master new cooperative 
        and competitive strategies to navigate through constant change and achieve corporate dominance.
      </p>

      <h2>Game Design Showcase</h2>
      <h3>Game Board:</h3>
      <img src="/img/gameBoard.png" alt="gameBoard" />

      <h3>Game Manual:</h3>
      <div className='manual-container'>
        <Canvas>
          <ambientLight intensity={2} />
          <Manual1 />
          <OrbitControls enableZoom={false}/>
        </Canvas>
      </div>
      <h3>Action Cards:</h3>
      <div className='actioncard-container'>
        <Canvas>
          <ambientLight intensity={2} />
          <Card1 />
          <Card2 />
          <Card3 />       
        </Canvas>
      </div>

      <h2> Gameplay</h2>
      <ul>
        <li><strong>Resource Collection:</strong> Roll dice to determine resource generation.</li>
        <li><strong>Trading:</strong> Exchange resources strategically with other players.</li>
        <li><strong>Action Cards:</strong> Drawn periodically to change the state of play.</li>
        <li><strong>Objective:</strong> Players aim to accumulate 5 points to win the game. Points can be gained through building settlements, upgrading to headquarters, and achieving specific goals set by action cards.</li>
      </ul>

      <h2> Elements of Change</h2>
      <ul>
        <li> <strong>Changing the Playground:</strong> Modify board layout and piece positions.</li>
        <li> <strong>Resource Shuffling:</strong> Swap and reallocate resources among players.</li>
        <li> <strong>Colored Dice:</strong> Introduce variability in resource collection.</li>
      </ul>
      <h2>Game Dynamics</h2>
     <img src='img/c1.png' />
    </div>
  );
}