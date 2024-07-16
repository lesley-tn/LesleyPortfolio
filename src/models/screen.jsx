import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { extend } from '@react-three/fiber';

import FocuStudyScreen from '/models/screen.glb';

extend({ ShaderMaterial: THREE.ShaderMaterial });

export function VideoScreen(props) {
  const { nodes } = useGLTF(FocuStudyScreen);
  const videoRef = useRef(null);
  const meshRef = useRef();

  useEffect(() => {
    const video = document.createElement('video');
    video.src = "/img/focuStudy.mp4";
    video.crossOrigin = "Anonymous";
    video.loop = true;
    video.muted = true;

    video.play()

    videoRef.current = video;

    const texture = new THREE.VideoTexture(video);
    texture.encoding = THREE.sRGBEncoding;


    const vertexShader = `
      precision highp float;
      precision highp int;
    
      #include <common>
      #include <logdepthbuf_pars_vertex>

      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        #include <logdepthbuf_vertex>
      }
    `;

    const fragmentShader = `
      precision highp float;
      precision highp int;
      uniform float time;
      uniform float speed;

      #include <common>
      #include <logdepthbuf_pars_fragment>

      uniform sampler2D videoTexture;
      varying vec2 vUv;

      void main() {
        #include <logdepthbuf_fragment>
        vec4 videoColor = texture2D(videoTexture, vUv);

        // Reduce the brightness further
        videoColor *= 1.0;
      
        // Apply gamma correction
        float gamma = 2.0;
        videoColor.rgb = pow(videoColor.rgb, vec3(gamma));
      
        // Set the final color, considering the gamma correction
        gl_FragColor = videoColor;
      }
    `;

    const customMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        videoTexture: { value: texture }
      },
      depthTest: true,
      depthWrite: true
    });

    if (meshRef.current) {
      meshRef.current.material = customMaterial;
    }
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.screen.geometry}
        position={[0.01, 0.17, -0.001]}
        rotation={[1.571, -1.179, 1.571]}
        scale={[0.21, 0.206, 0.2]}
      />
    </group>
  );
}

useGLTF.preload(FocuStudyScreen);
