import React, { Suspense, useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Physics, Debug } from '@react-three/cannon';
import { Environment, PointerLockControls, Preload, useProgress } from '@react-three/drei';
import { Selection,  EffectComposer, Outline } from '@react-three/postprocessing'

import {Light, CameraControls, CameraMove, useStore, PianoKeys, Loading} from './components'
import 
    {
     Piano, 
     VideoScreen, 
     ModelLoader,
     Me,
     Room
} from './models';
  
export default function App() {
    const [start, setStart] = useState(false);
    const { progress } = useProgress();
  
    return (
      <>
        <Canvas 
          shadows 
          gl={{ logarithmicDepthBuffer: true }} 
          camera={{ fov: 75, near: 0.01, far: 1000 }}
          performance= {{
            current: 1,
            min: 0.1,
            max: 1,
            debounce: 200}
          }
        >
          
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <Light />
            <CameraControls />
            <Physics  broadphase="SAP" gravity={[0, -9.81, 0]}>
              <Environment files="./img/amsterdam.hdr" background />
              <Room scale={0.5} position={[0, -56, -20]} rotation={[0, Math.PI, 0]} />
              <Piano scale={[0.5, 0.5, 0.5]} position={[0, -56, -70]} rotation={[0, Math.PI, 0]} />
              <PianoKeys />
              <Selection>
                <EffectComposer multisampling={8} autoClear={false}>
                  <Outline blur visibleEdgeColor="white" edgeStrength={10} width={500} />
                </EffectComposer>
                <Selector modelInfo="Twentee" position={{ x: -50, y: 0, z: 60 }} target={{ x: -75, y: 0, z: 60 }}>
                  <ModelLoader
                    modelPath="/models/Twentee.glb"
                    position={[-75, -16, 84]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={90}
                  />
                </Selector>
                <Selector modelInfo="FocuStudy" position={{ x: 50, y: 0, z: 160 }} target={{ x: 75, y: 0, z: 160 }}>
                  <ModelLoader
                    modelPath="/models/FocuStudy.glb"
                    position={[75, -16, 143]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={120}
                  />
                  <VideoScreen scale={120} position={[75, -16, 143]} rotation={[0, Math.PI / 2, 0]} />
                </Selector>
                <Selector modelInfo="Predict" position={{ x: -20, y: 0, z: 162 }} target={{ x: -20, y: 0, z: 182 }}>
                  <ModelLoader
                    modelPath="/models/predict.glb"
                    position={[0, -16, 182]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={5}
                  />
                </Selector>
                <Selector modelInfo="Kennispunt" position={{ x: -50, y: 0, z: 120 }} target={{ x: -75, y: 0, z: 120 }}>
                  <ModelLoader
                    modelPath="/models/kennispunt.glb"
                    position={[-75, -15, 143]}
                    rotation={[0, 0, 0]}
                    scale={0.25}
                  />
                </Selector>
                <Selector modelInfo="Catan" position={{ x: 50, y: 0, z: 95 }} target={{ x: 75, y: 0, z: 95 }}>
                  <ModelLoader
                    modelPath="/models/corposOfCatanBox.glb"
                    position={[75, -6, 79]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={2.5}
                  />
                </Selector>
                <Selector modelInfo="ContactMe" position={{ x: -130, y: 0, z: -80 }} target={{ x: -130, y: 0, z: -82 }}>
                  <ModelLoader
                    modelPath="/models/phone.glb"
                    position={[-154, -17, -115]}
                    rotation={[0, 0, 0]}
                    scale={1}
                  />
                </Selector>
                <Selector modelInfo="AboutMe" position={{ x: 170, y: 2, z: -80 }} target={{ x: 170, y: 2, z: -82 }}>
                  <Me />
                </Selector>
              </Selection>
            </Physics>
          </Suspense>
          <PointerLockControls />
          <Preload all />
        </Canvas>
        <Loading started={start} progress={progress} onStarted={() => setStart(true)} />
        <div className='dot' />
      </>
    );
  }

function Selector({ children, modelInfo, position, target }) {
    const { camera } = useThree();
    const store = useStore();

    const handlePointerDown = useCallback(() => { 
      if (!store.modelSelectionEnabled[modelInfo]) return;
  
      CameraMove({
        camera: camera,
        position: position,
        targetPosition: target,
      });
      setTimeout(() => {
        store.open = true;
        store.currentModel = modelInfo;
        document.exitPointerLock();
        store.setModelSelectionEnabled(modelInfo, false);
        setTimeout(() => store.setModelSelectionEnabled(modelInfo, true), 5000);
      });
    }, [camera, modelInfo, position, store, target]);

    return (
      <group onPointerDown={handlePointerDown}>
        {children}
      </group>
    );
  }
  

