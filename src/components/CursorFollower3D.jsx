import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Component for the character with eyes
function EyeCharacter({ mousePosition }) {
  const headRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();

  useFrame(({ camera }) => {
    // Use headRef to get the character's position and orient eyes relative to it
    if (leftEyeRef.current && rightEyeRef.current && headRef.current) {
      // Calculate the 3D position of the mouse in the scene
      const vector = new THREE.Vector3(mousePosition.current.x, mousePosition.current.y, 0.5);
      vector.unproject(camera);

      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      // Make the eyes look at the calculated 3D mouse position
      leftEyeRef.current.lookAt(vector); // Look directly at the unprojected mouse vector
      rightEyeRef.current.lookAt(vector); // Look directly at the unprojected mouse vector

      console.log('Mouse Position in useFrame:', mousePosition.current); // Debugging log - Added back

      // Optional: subtle head movement
      // headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mousePosition.current.x * Math.PI / 24, 0.05);
      // headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, mousePosition.current.y * Math.PI / 24, 0.05);
    }
  });

  return (
    // Adjust position further to the upper right and slightly back
    <group ref={headRef} position={[5, 2, -1.5]}> {/* Adjusted X, Y, and Z position */}
      {/* Head (main body) */}
      <Sphere args={[1.5, 32, 32]} >
        <meshStandardMaterial color="#8B5CF6" /> {/* Violet color for the head */}
      </Sphere>

      {/* Eyes - positioned relative to the head */}
      {/* Left Eye (Sphere) */}
      <Sphere args={[0.3, 32, 32]} position={[-0.5, 0.3, 1.4]} ref={leftEyeRef}> {/* Adjust position and make it a sphere */}
         <meshStandardMaterial color="#ffffff" /> {/* White eye */}
         {/* Left Pupil */}
         <Sphere args={[0.1, 16, 16]} position={[0, 0, 0.2]}> {/* Position relative to the eye surface */}
           <meshStandardMaterial color="#000000" /> {/* Black pupil */}
         </Sphere>
      </Sphere>
      {/* Right Eye (Sphere) */}
      <Sphere args={[0.3, 32, 32]} position={[0.5, 0.3, 1.4]} ref={rightEyeRef}> {/* Adjust position and make it a sphere */}
        <meshStandardMaterial color="#ffffff" /> {/* White eye */}
        {/* Right Pupil */}
        <Sphere args={[0.1, 16, 16]} position={[0, 0, 0.2]}> {/* Position relative to the eye surface */}
           <meshStandardMaterial color="#000000" /> {/* Black pupil */}
         </Sphere>
      </Sphere>

    </group>
  );
}

export default function CursorFollower3D() {
  const containerRef = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mousePosition.current = { x, y };
      console.log('Mouse Position:', mousePosition.current); // Keep debugging log
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {/* Use the new EyeCharacter component */}
        <EyeCharacter mousePosition={mousePosition} /> 
      </Canvas>
    </div>
  );
} 