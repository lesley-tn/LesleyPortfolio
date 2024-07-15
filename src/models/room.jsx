import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Room(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/models/room.glb')
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.transparentWindowFront.geometry}
        material={materials['Material.008']}
        position={[-9.042, 224.123, -562.819]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={[-1.196, -58.058, -0.001]}
      />
      <mesh
        geometry={nodes.transparentWindowLeft.geometry}
        material={materials['Material.004']}
        position={[-351.126, 224.123, -184.366]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={[-1.067, -0.039, -0.852]}
      />
      <mesh
        geometry={nodes.transparentWindowRight.geometry}
        material={materials['Material.007']}
        position={[351.419, 224.123, -185.5]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={[-1.067, -0.039, -0.852]}
      />
      <group position={[-2.691, -0.776, -2.678]} rotation={[-Math.PI / 2, 0, 0]} scale={48.593}>
        <mesh
          castShadow
          geometry={nodes.Ceiling_Ceiling_0.geometry}
          material={materials.Ceiling}
          position={[0, 2.215, 0]}
          scale={[0.807, 0.814, 1]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={48.593}>
        <mesh
          receiveShadow
          geometry={nodes.Floor_Material002_0.geometry}
          material={materials['Material.002']}
          position={[0, 2.111, 0]}
          scale={[0.8, 0.971, 1]}
        />
      </group>
      <group position={[-147.661, 128.821, -500.762]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere_Material009_0.geometry}
          material={materials['Material.009']}
          position={[0, 0.552, 0]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 106.171, 100]}>
        <mesh
          castShadow
          geometry={nodes.Plane_roofthings_0.geometry}
          material={materials.roofthings}
          position={[0, 1.047, 0]}
          scale={[0.642, 0.912, 1]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[100, 106.171, 100]}>
        <mesh
          geometry={nodes.Plane001_Material010_0.geometry}
          material={materials['Material.010']}
          position={[0, 1.052, 0]}
          scale={[0.642, 0.912, 1]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[42.924, 48.593, 48.593]}>
        <mesh
          castShadow
          geometry={nodes.Rug_Material003_0.geometry}
          material={materials['Material.003']}
          position={[2.398, 0, 0]}
          scale={[0.981, 1, 1]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={48.593}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_backwall_0.geometry}
          material={materials.backwall}
          position={[0, 3.521, 0]}
          scale={[0.807, 1.17, 1]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={48.593}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall2_Walls_0.geometry}
          material={materials.Walls}
          position={[0, 2.126, 0]}
          scale={[0.799, 0.97, 1]}
        />
      </group>
      <group position={[-109.308, 2.085, -97.102]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WhiteWall_Material005_0.geometry}
          material={materials['Material.005']}
          position={[0, 1.052, 0]}
          scale={[1, 0.957, 1]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={48.593}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WindowCill_Material006_0.geometry}
          material={materials['Material.006']}
          position={[0, 2.1, 0.023]}
          scale={[0.805, 0.973, 1]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={48.593}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.WoodWall_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0, 2.06, 0]}
          scale={[1, 0.973, 1]}
        />
      </group>
      <group position={[0, 0, 150]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Column.geometry}
          material={materials.Podiums}
          position={[0, 0, -1.481]}
        />
      </group>
      <group position={[-310.107, 0, 227.268]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Column002.geometry}
          material={materials.ColumnRight}
          position={[0.846, 0, -1.3]}
        />
      </group>
      <group position={[303.951, 0, 227.268]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Column004.geometry}
          material={materials['Podiums.003']}
          position={[-0.851, 0, -1.3]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/room.glb')