'use client';

import { useGLTF, OrbitControls } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function regionMatch(highlightedRegions, ...names) {
  // Normalize both highlightedRegions and names for robust matching
  const norm = s => s.toLowerCase().replace(/_lobe$/, '');
  return names.some(name => highlightedRegions.map(norm).includes(norm(name)));
}

function Arrow({ position, rotation, lookAt, color = '#1565c0' }) {
  const ref = useRef();
  useEffect(() => {
    if (lookAt && ref.current) {
      ref.current.lookAt(...lookAt);
    }
  }, [lookAt]);
  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <coneGeometry args={[0.15, 0.4, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
    </mesh>
  );
}

export default function BrainModel({ highlightedRegions = [] }) {
  const { scene } = useGLTF('/baldsphere/Brain.glb');
  const groupRef = useRef();
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.name && child.visible !== undefined) {
          const name = child.name.toLowerCase();
          const isArrowLike = name.includes('arrow') ||
                             name.includes('pointer') ||
                             name.includes('cone') ||
                             name.includes('cylinder') ||
                             name.includes('line') ||
                             name.includes('guide') ||
                             name.includes('marker') ||
                             name.includes('indicator') ||
                             name.includes('parital') ||
                             name.includes('parietal');
          if (isArrowLike) {
            child.visible = false;
          }
        }
      });
    }
  }, [scene]);

  // Debug: log highlightedRegions
  console.log('highlightedRegions:', highlightedRegions);

  // Slow auto-rotation
  useFrame((state) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  if (!scene) {
    return (
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
    );
  }

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.6} position={[0, -0.4, 0]} />
      {/* Arrows for highlighted regions (large, prominent, correct positions) */}
      {regionMatch(highlightedRegions, 'Frontal') && (
        <Arrow position={[0, 0, 0.7]} rotation={[-Math.PI / 2, 0, 0]} color={'#1565c0'} />
      )}
      {regionMatch(highlightedRegions, 'Parietal') && (
        <Arrow position={[0, 0.55, 0]} rotation={[Math.PI, 0, 0]} color={'#FFD600'} />
      )}
      {regionMatch(highlightedRegions, 'Temporal') && (
        <>
          <Arrow position={[-0.7, -0.2, 0]} rotation={[0, 0, -Math.PI / 2]} color={'#00C853'} />
          <Arrow position={[0.7, -0.2, 0]} rotation={[0, 0, Math.PI / 2]} color={'#00C853'} />
        </>
      )}
      {regionMatch(highlightedRegions, 'Occipital') && (
        <Arrow position={[0, 0, -0.7]} rotation={[Math.PI / 2, 0, 0]} color={'#D50000'} />
      )}
      {regionMatch(highlightedRegions, 'Central') && (
        <Arrow position={[0, 0.35, 0]} rotation={[0, 0, 0]} />
      )}
      <OrbitControls 
        enablePan={false} 
        minDistance={1.5} 
        maxDistance={3.5} 
        target={[0, -0.4, 0]}
        onStart={() => setAutoRotate(false)}
        onEnd={() => setAutoRotate(true)}
      />
    </group>
  );
}

useGLTF.preload('/baldsphere/Brain.glb'); 