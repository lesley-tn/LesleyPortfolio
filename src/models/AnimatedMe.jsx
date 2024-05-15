import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Select } from '@react-three/postprocessing';

export function Me({ clip, triggerdAnimate, ...props }) {
  const { scene, animations } = useGLTF('/models/me.glb');
  const mixer = useRef(new THREE.AnimationMixer(scene)).current;
  const actionRef = useRef();
  const [hovered, setHover] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
      if (animations.length > 0) {
          const action = mixer.clipAction(animations[0]); 
          action.clampWhenFinished = true; 
          action.loop = THREE.LoopOnce; 
          actionRef.current = action;
      }

      return () => {
          if (actionRef.current) {
              actionRef.current.stop();
              mixer.uncacheAction(actionRef.current);
          }
      };
  }, [animations, mixer]);

  useFrame((state, delta) => {
      mixer.update(delta);
  });

  useEffect(() => {
      if (hovered && !animationPlayed) {
          actionRef.current.reset().play();
          setAnimationPlayed(true); 
      } else if (!hovered) {
          setAnimationPlayed(false); 
      }
  }, [hovered, animationPlayed]);

  return (
    <Select enabled={hovered}>
      <primitive 
        object={scene} 
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        position={[153,-20,-115]}
        scale={[5,5,5]}
        {...props} 
      />
    </Select>
  ); 
}
