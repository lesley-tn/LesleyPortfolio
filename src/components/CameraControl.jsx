import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useStore } from './index';

export function CameraControls() {
  const { camera, scene } = useThree();
  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const moveLeft = useRef(false);
  const moveRight = useRef(false);
  const store = useStore();

  useFrame(() => {
    if (!store.open) {
      const forwardDirection = new THREE.Vector3();
      const sideDirection = new THREE.Vector3();

      camera.getWorldDirection(forwardDirection);
      forwardDirection.y = 0;  // Normalize the forward vector to ignore vertical movement
      forwardDirection.normalize();

      sideDirection.crossVectors(forwardDirection, new THREE.Vector3(0, 1, 0)).normalize();  // Get the perpendicular right vector

      const forwardRaycaster = new THREE.Raycaster(camera.position.clone().add(new THREE.Vector3(0, -50, 0)), forwardDirection);
      const backwardRaycaster = new THREE.Raycaster(camera.position.clone().add(new THREE.Vector3(0, -50, 0)), forwardDirection.clone().negate());
      const leftRaycaster = new THREE.Raycaster(camera.position.clone().add(new THREE.Vector3(0, -50, 0)), sideDirection.clone().negate());
      const rightRaycaster = new THREE.Raycaster(camera.position.clone().add(new THREE.Vector3(0, -50, 0)), sideDirection);

      const forwardCollisions = forwardRaycaster.intersectObjects(scene.children, true);
      const backwardCollisions = backwardRaycaster.intersectObjects(scene.children, true);
      const leftCollisions = leftRaycaster.intersectObjects(scene.children, true);
      const rightCollisions = rightRaycaster.intersectObjects(scene.children, true);

      const collisionThreshold = 25; 

      if (moveForward.current && (!forwardCollisions.length || forwardCollisions[0].distance > collisionThreshold)) {
        camera.position.add(forwardDirection.multiplyScalar(0.8));
      }
      if (moveBackward.current && (!backwardCollisions.length || backwardCollisions[0].distance > collisionThreshold)) {
        camera.position.add(forwardDirection.clone().negate().multiplyScalar(0.8));
      }
      if (moveLeft.current && (!leftCollisions.length || leftCollisions[0].distance > collisionThreshold)) {
        camera.position.add(sideDirection.clone().negate().multiplyScalar(0.8));
      }
      if (moveRight.current && (!rightCollisions.length || rightCollisions[0].distance > collisionThreshold)) {
        camera.position.add(sideDirection.multiplyScalar(0.8));
      }
    }
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!store.open) { 
        switch(event.key) {
          case 'w': moveForward.current = true; break;
          case 's': moveBackward.current = true; break;
          case 'a': moveLeft.current = true; break;
          case 'd': moveRight.current = true; break;
        }
      }
    };

    const handleKeyUp = (event) => {
      switch(event.key) {
        case 'w': moveForward.current = false; break;
        case 's': moveBackward.current = false; break;
        case 'a': moveLeft.current = false; break;
        case 'd': moveRight.current = false; break;
      }
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
