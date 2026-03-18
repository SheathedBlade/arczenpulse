import { Canvas } from '@react-three/fiber';

// Placeholder for your R3F model
const Scene = () => {
  return (
    <Canvas
      className="absolute inset-0"
      style={{ width: '100%', height: '100%' }}
      frameloop="demand"
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshStandardMaterial color="#C96478" wireframe />
      </mesh>
    </Canvas>
  );
};

export default Scene;
