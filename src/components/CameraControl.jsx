import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useStore } from './index';

export function CameraControls(pointerLockRef ) {
  const { camera, scene } = useThree();
  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const store = useStore();
  
  useFrame(() => {
    if (!store.open) {
      const forwardDirection = new THREE.Vector3();
      const backwardDirection = new THREE.Vector3();

      camera.getWorldDirection(forwardDirection);
      forwardDirection.y = 0; 
      forwardDirection.normalize();
      backwardDirection.copy(forwardDirection).negate();

      const forwardRaycaster = new THREE.Raycaster(camera.position.clone().add(new THREE.Vector3(0, -50, 0)), forwardDirection); 
      const backwardRaycaster = new THREE.Raycaster(camera.position.clone().add(new THREE.Vector3(0, -50, 0)), backwardDirection); 

      const forwardCollisions = forwardRaycaster.intersectObjects(scene.children, true);
      const backwardCollisions = backwardRaycaster.intersectObjects(scene.children, true);

      const collisionThreshold = 20; 

      if (moveForward.current && (!forwardCollisions.length || forwardCollisions[0].distance > collisionThreshold)) {
        camera.position.add(forwardDirection.multiplyScalar(0.8)); 
      }

      if (moveBackward.current && (!backwardCollisions.length || backwardCollisions[0].distance > collisionThreshold)) {
        camera.position.add(backwardDirection.multiplyScalar(0.8)); 
      }
   }
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!store.open) { 
        if (event.key === 'w') moveForward.current = true;
        if (event.key === 's') moveBackward.current = true;
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === 'w') moveForward.current = false;
      if (event.key === 's') moveBackward.current = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [store.open]);

  return null;
}
