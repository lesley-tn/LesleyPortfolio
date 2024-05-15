import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useDrag } from '@use-gesture/react';
import CatanManualModel from '../assets/3dModel/CatanManual.glb';
import ActionCardModel1 from '../assets/3dModel/ActionCard1.glb';
import ActionCardModel2 from '../assets/3dModel/ActionCard2.glb';
import ActionCardModel3 from '../assets/3dModel/ActionCard3.glb';

function modelRotation () {
  const ref = useRef();

  const bind = useDrag(({ offset: [x, y] }) => {
    const [,, z] = ref.current.rotation.toArray(); // Keep the current Z rotation
    ref.current.rotation.set(y / 100, x / 100, z); // Update X and Y rotation based on drag
  }, { pointerEvents: true });

  return { ref, bind };
}

function Manual() {
  const { scene } = useGLTF(CatanManualModel);
  const { ref, bind } = modelRotation();

  return (
    <>
      <primitive 
          ref={ref}
          object={scene }  
          scale={4} 
          position={[0, -15, 0]}
          {...bind()}
        />
    </>
  );
}

 function Card1 () {
    const { scene } = useGLTF(ActionCardModel1);
    const { ref, bind } = modelRotation();

    return (
      <>
        <primitive 
          ref={ref}
          object={scene }  
          scale={2.5} 
          position={[0, -18.5, 0]}
          {...bind()}
        />
      </>
    )
  }

  function Card2 () {
    const { scene } = useGLTF(ActionCardModel2);
    const { ref, bind } = modelRotation();

    return (
      <>
        <primitive 
          ref={ref}
          object={scene }  
          scale={2.5} 
          position={[0, -21, 0]}
          {...bind()}
        />
      </>
    )
  }

  function Card3 () {
    const { scene } = useGLTF(ActionCardModel3);
    const { ref, bind } = modelRotation();

    return (
      <>
        <primitive 
          ref={ref}
          object={scene }  
          scale={2.5} 
          position={[0, -23.5, 0]}
          {...bind()}
        />
      </>
    )
  }

export { Manual, Card1, Card2, Card3 };