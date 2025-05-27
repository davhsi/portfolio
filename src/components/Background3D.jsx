import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null; // Silently fail and don't render the background
    }
    return this.props.children;
  }
}

function Particles({ count = 2000 }) {
  const points = useRef();
  const { invalidate } = useThree();
  
  // Generate points in a sphere
  const positions = useMemo(() => {
    try {
      const positions = new Float32Array(count * 3);
      const radius = 15;
      
      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
      }
      
      return positions;
    } catch (error) {
      console.error('Error generating particles:', error);
      return new Float32Array(0);
    }
  }, [count]);

  useFrame((state, delta) => {
    try {
      if (points.current) {
        points.current.rotation.x += delta * 0.05;
        points.current.rotation.y += delta * 0.075;
        invalidate();
      }
    } catch (error) {
      console.error('Error in animation frame:', error);
    }
  });

  return (
    <group>
      <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <ErrorBoundary>
      <div className="fixed inset-0 -z-10 opacity-50">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 20], fov: 75 }}
            gl={{ 
              antialias: true, 
              alpha: true,
              powerPreference: 'high-performance',
              failIfMajorPerformanceCaveat: true
            }}
            dpr={[1, 2]}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0);
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
          >
            <ambientLight intensity={0.5} />
            <Particles />
          </Canvas>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
} 