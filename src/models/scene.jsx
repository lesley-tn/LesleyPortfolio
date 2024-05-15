import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';

const Collider = ({ position, scale }) => {
    const [ref] = useBox(() => ({
      type: 'Static', 
      position,
      args: [scale[0] / 2, scale[1] / 2, scale[2] / 2], 
    }));
  
    return <mesh ref={ref} />;
  };

  export function Scene(props) {
    const groupRef = useRef()
    const { nodes, materials } = useGLTF('/models/scene.glb')
    return (
      <group ref={groupRef} {...props} dispose={null}>
        <mesh
          geometry={nodes.transparentWindowFront.geometry}
          material={materials['Material.008']}
          position={[-9.042, 224.123, -541.735]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[-1.196, -69.532, -0.001]}
        />
        <Collider
           position={[0, 30, 280]} 
           scale={[875, 437, 15]}        
        />
        <mesh
          geometry={nodes.transparentWindowLeft.geometry}
          material={materials['Material.004']}
          position={[-421.939, 224.123, -84.793]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[-1.067, -0.039, -1.059]}
        />
         <Collider
           position={[210, 45, 50]} 
           scale={[15, 437, 875]}        
        />
        <mesh
          geometry={nodes.transparentWindowRight.geometry}
          material={materials['Material.007']}
          position={[421.765, 224.123, -84.793]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[-1.067, -0.039, -1.059]}
        />
         <Collider
           position={[-215, 45, 50]} 
           scale={[15, 437, 875]}   
        />
        <group rotation={[-Math.PI / 2, 0, 0]} scale={48.593}>
          <mesh
            receiveShadow
            geometry={nodes.Floor_Material002_0.geometry}
            material={materials['Material.002']}
            scale={[1, 1.17, 1]}
          />
        </group>
        <group position={[-147.661, 128.821, -480]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Icosphere_Material009_0.geometry}
            material={materials['Material.009']}
            position={[0, 0.552, 0]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            geometry={nodes.Plane_roofthings_0.geometry}
            material={materials.roofthings}
            position={[0, -0.021, 0]}
            scale={[1, 1.17, 1]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[42.924, 48.593, 48.593]}>
          <mesh
            receiveShadow
            geometry={nodes.Rug_Material003_0.geometry}
            material={materials['Material.003']}
            position={[-0.048, 0, 0]}
            scale={[1.17, 1, 1]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={48.593}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wall_backwall_0.geometry}
            material={materials.backwall}
            position={[0, -0.043, 0]}
            scale={[1, 1.17, 1]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={48.593}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wall2_Walls_0.geometry}
            material={materials.Walls}
            position={[0, -0.043, 0]}
            scale={[1, 1.17, 1]}
          />
        </group>
        <group position={[-109.308, 2.085, -97.102]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WhiteWall_Material005_0.geometry}
            material={materials['Material.005']}
            position={[0, 0.145, 0]}
            scale={[1, 1.17, 1]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={48.593}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WindowCill_Material006_0.geometry}
            material={materials['Material.006']}
            position={[0, -0.043, 0]}
            scale={[1, 1.17, 1]}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={48.593}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.WoodWall_Material001_0.geometry}
            material={materials['Material.001']}
            position={[0, -0.043, 0]}
            scale={[1, 1.17, 1]}
          />
        </group>
        <group position={[0, 0, 198]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Column.geometry}
            material={materials.Podiums}
            position={[0, 0, -1.481]}
          />
        </group>
        <group name="ColumnRight" position={[-310.107, -10, 227.268]} scale={100}>
        <mesh
          name="Column002"
          castShadow
          receiveShadow
          geometry={nodes.Column002.geometry}
          material={materials.ColumnRight}
          position={[0, 0, 0.314]}
        />
      </group>
        <group position={[303.951, 0, 227.268]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Column004.geometry}
            material={materials['Podiums.003']}
            position={[0, 0, 0.314]}
          />
        </group>
        <mesh
          castShadow
          geometry={nodes.Ceiling_Ceiling_0.geometry}
          material={materials.Ceiling}
          position={[-2.691, -0.776, -2.678]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={48.593}
        />
        <mesh
          castShadow
          geometry={nodes.Plane001_Material010_0.geometry}
          material={materials['Material.010']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    )
  }
  
  useGLTF.preload('/models/scene.glb')