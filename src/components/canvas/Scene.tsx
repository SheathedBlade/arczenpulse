import { Canvas } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

const getDpr = () => Math.min(window.devicePixelRatio ?? 1, 2);

// Placeholder for your R3F model
const Scene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [dpr, setDpr] = useState(getDpr);

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

  useEffect(() => {
    const handleResize = () => {
      const next = getDpr();
      setDpr(prev => (prev !== next ? next : prev));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <div ref={canvasContainerRef} className="absolute inset-0">
        <Canvas
          style={{ width: '100%', height: '100%' }}
          frameloop="demand"
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={dpr}
          resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
          role="img"
          aria-label="3D torus knot decorative element"
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <meshBasicMaterial
              color="#c8b8bc"
              wireframe
              transparent
              opacity={0.25}
            />
          </mesh>
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
