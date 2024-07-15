import React, { Suspense, useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Environment, PointerLockControls, Preload, useProgress, Html, Billboard  } from '@react-three/drei';
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
                
                <Selector modelInfo="Twentee" label="Unity Game" textPosition={[-75, 6, 72.5]} position={{ x: -50, y: 0, z: 55 }} target={{ x: -75, y: 0, z: 55 }}>
                  <ModelLoader
                    modelPath="/models/Twentee.glb"
                    position={[-75, -16, 78.2]}
                    rotation={[0, -Math.PI / 2, 0]}
                    scale={90}
                  />
                </Selector>

                <Selector modelInfo="FocuStudy"  label="UX/UI Design" textPosition={[78, 9, 137.5]} position={{ x: 50, y: 0, z: 156 }} target={{ x: 75, y: 0, z: 156 }}>
                  <ModelLoader
                    modelPath="/models/FocuStudy.glb"
                    position={[75, -16, 137]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={120}
                  />
                  <VideoScreen scale={120} position={[75, -16, 137]} rotation={[0, Math.PI / 2, 0]} />
                </Selector>

                <Selector modelInfo="Predict" label="Webapp Development" textPosition={[ 0,  8, 180]} position={{ x: -20, y: 0, z: 154 }} target={{ x: -20, y: 0, z: 170}}>
                  <ModelLoader
                    modelPath="/models/predict.glb"
                    position={[0, -16, 176]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={5}
                  />
                </Selector>

                <Selector modelInfo="Kennispunt" label="UX Research" textPosition={[ -75, 14, 135]} position={{ x: -50, y: 0, z: 120 }} target={{ x: -75, y: 0, z: 120 }}>
                  <ModelLoader
                    modelPath="/models/kennispunt.glb"
                    position={[-75, -15, 136]}
                    rotation={[0, 0, 0]}
                    scale={0.25}
                  />
                </Selector>

                <Selector modelInfo="Catan" label="Board Game Design" textPosition={[ 78,  8, 72.5]} position={{ x: 50, y: 0, z: 88 }} target={{ x: 75, y: 0, z: 88 }}>
                  <ModelLoader
                    modelPath="/models/corposOfCatanBox.glb"
                    position={[75, -6, 73.5]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={2.5}
                  />
                </Selector>

                <Selector modelInfo="ContactMe" label="Contact Me" textPosition={[ -109.5,  5, -65]} position={{ x: -87, y: 0, z: -30 }} target={{ x: -87, y: 0, z: -32 }}>
                  <ModelLoader
                    modelPath="/models/phone.glb"
                    position={[-111, -17, -65]}
                    rotation={[0, 0, 0]}
                    scale={1}
                  />
                </Selector>

                <Selector modelInfo="AboutMe" label="About Me" textPosition={[111.5, 30,-65]} position={{ x: 135, y: 2, z: -30 }} target={{ x: 135, y: 2, z: -32 }}>
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

  function Selector({ children, modelInfo, position, target, label, textPosition }) {
    const { camera } = useThree();
    const store = useStore();
    const [hovered, setHovered] = useState(false);

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
            setTimeout(() => store.setModelSelectionEnabled(modelInfo, true),0);
        }, [camera, modelInfo, position, store, target]);
    });

    return (
      <group onPointerDown={handlePointerDown} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
          {children}
          {hovered && (
              <Billboard position={textPosition}>
                  <Html transform occlude>
                      <div className="model-info-label">
                          {label}
                      </div>
                  </Html>
              </Billboard>
          )}
      </group>
  );
}
  

