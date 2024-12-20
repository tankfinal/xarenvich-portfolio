import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';

const Computers = () => {
  const { theme } = useTheme();

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={theme === 'dark' ? 'black' : 'white'} />
      <pointLight intensity={1} />
      <mesh>
        <torusGeometry args={[2, 0.5, 16, 100]} />
        <meshStandardMaterial
          color={theme === 'dark' ? "#915eff" : "#2563eb"}
          wireframe
        />
      </mesh>
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 10], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: '100%' }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={5}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
