
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Piano(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/models/piano.glb');

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group position={[4.439, 59.384, 4.957]} rotation={[-Math.PI / 2, 0, -3.141]} scale={25}>
        <mesh
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.aiStandardSurface4SG}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.aiStandardSurface2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.aiStandardSurface12SG}
        />
        <mesh
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.aiStandardSurface2SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.aiStandardSurface13SG}
        />
        <mesh
          receiveShadow
          geometry={nodes.Object_54.geometry}
          material={materials.aiStandardSurface4SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_57.geometry}
          material={materials.aiStandardSurface6SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_58.geometry}
          material={materials.aiStandardSurface7SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_59.geometry}
          material={materials.aiStandardSurface9SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.aiStandardSurface15SG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.aiStandardSurface14SG}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sheet.geometry}
        material={materials['Material.011']}
        position={[4.612, 110.325, -41.382]}
        rotation={[-2.819, -0.047, 3.132]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.transparentWindowFront001.geometry}
        material={materials['Material.012']}
        position={[4.55, 85.415, 2.354]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={[-0.436, -11.696, -0.183]}
      />
    </group>
  );
}

useGLTF.preload('/models/piano.glb');
