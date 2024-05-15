import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

const useResize = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const handleResize = () => {
      // Update camera
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      // Update renderer
      gl.setSize(window.innerWidth, window.innerHeight);
    };

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Call the resize function to set initial size
    handleResize();

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, [camera, gl]); // Only re-run if camera or gl changes
};

export function ResizeComponent() {
    useResize();

    return null;
}