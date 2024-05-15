// Light.jsx
import React, { useRef, useEffect } from 'react';


export const Light = () => {
  const directionalRef = useRef();

  useEffect(() => {
    if (directionalRef.current) {
      const shadowCamera = directionalRef.current.shadow.camera;
      shadowCamera.near = 0.0001; // Closer bound of the shadow frustum
      shadowCamera.far = 1500; // Farther bound of the shadow frustum
      shadowCamera.left = -500; // Left bound of the shadow frustum
      shadowCamera.right = 500; // Right bound of the shadow frustum
      shadowCamera.top = 2500; // Top bound of the shadow frustum
      shadowCamera.bottom = -500; // Bottom bound of the shadow frustum

      shadowCamera.updateProjectionMatrix();
    }
  });


  return (
    <directionalLight
      ref={directionalRef}
      position={[-250, 200, -10]}
      color="#e68f30" 
      castShadow
      intensity={6}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-bias={-0.001}
    />
  );
};


