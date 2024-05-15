import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Scroll, ScrollControls, Preload} from '@react-three/drei';

import { Manual, Card1, Card2, Card3 } from '../models';
import {CatanText} from '../components/text'
export function Catan() {
 
  return (
    <div className='catan'>
      <Canvas>
        <ScrollControls pages={4} >
        <Scroll>
       
       <CatanText />
        
          <ambientLight intensity={2}/>
          <Manual />
          <Card1 />
          <Card2 />
          <Card3 />
          
          
          </Scroll>
          </ScrollControls>
          <Preload all/>
      </Canvas>
   
    </div>
  );
  }
