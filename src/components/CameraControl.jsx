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

  useFrame((state, delta) => {
    if (!store.open) {
      const forwardDirection = new THREE.Vector3();
      const sideDirection = new THREE.Vector3();

      camera.getWorldDirection(forwardDirection);
      forwardDirection.y = 0;  // Normalize the forward vector to ignore vertical movement
      forwardDirection.normalize();

      sideDirection.crossVectors(forwardDirection, new THREE.Vector3(0, 1, 0)).normalize();  // Get the perpendicular right vector

      const collisionThreshold = 25;
      const moveSpeed = delta * 100; // Adjust movement speed based on delta

      const checkCollision = (direction) => {
        const raycaster = new THREE.Raycaster(camera.position.clone().add(new THREE.Vector3(0, -50, 0)), direction);
        const collisions = raycaster.intersectObjects(scene.children, true);
        return !collisions.length || collisions[0].distance > collisionThreshold;
      };

      if (moveForward.current && checkCollision(forwardDirection)) {
        camera.position.add(forwardDirection.multiplyScalar(moveSpeed));
      }
      if (moveBackward.current && checkCollision(forwardDirection.clone().negate())) {
        camera.position.add(forwardDirection.clone().negate().multiplyScalar(moveSpeed));
      }
      if (moveLeft.current && checkCollision(sideDirection.clone().negate())) {
        camera.position.add(sideDirection.clone().negate().multiplyScalar(moveSpeed));
      }
      if (moveRight.current && checkCollision(sideDirection)) {
        camera.position.add(sideDirection.multiplyScalar(moveSpeed));
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
