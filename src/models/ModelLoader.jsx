import { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Select } from '@react-three/postprocessing';

export const ModelLoader = ({ modelPath, position, rotation, scale, ...props }) => {
    const ref = useRef();
    const [hovered, hover] = useState(false);
    const gltf = useLoader(GLTFLoader, modelPath);

    return gltf ? (
        <Select enabled={hovered}>
            <primitive 
                ref={ref}
                onPointerOver={() => hover(true)}
                onPointerOut={() => hover(false)}
                object={gltf.scene}
                position={position}
                rotation={rotation}
                scale={scale}
                {...props}
            />
        </Select>
    ) : null;
}

