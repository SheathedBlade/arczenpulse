import { Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

// Placeholder for your R3F model
const Scene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (canvasContainerRef.current) {
          canvasContainerRef.current.style.width = `${width}px`;
          canvasContainerRef.current.style.height = `${height}px`;
        }
      }
    });

    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <div ref={canvasContainerRef} className="absolute inset-0">
        <Canvas
          style={{ width: '100%', height: '100%' }}
          frameloop="demand"
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={Math.min(window.devicePixelRatio, 2)}
          resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <meshStandardMaterial color="#C96478" wireframe />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
