import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Link } from 'react-router-dom';
import './App.css';

// Background animation component for Cloud Solutions
function CloudAnimation() {
  const particlesRef = React.useRef();

  const particlesCount = 2000;
  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.02;
      particlesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.05;
    }
  });

  return (
    <Points ref={particlesRef} positions={particlesPosition} stride={3} frustumCulled>
      <PointMaterial transparent color="#1e40af" size={0.05} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

function Internship() {
  return (
    <div className="relative font-sans antialiased overflow-hidden h-screen bg-gray-50">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <CloudAnimation />
        </Canvas>
      </div>
      <div className="relative z-10 p-10 max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold text-blue-800 mb-8">    
Internships</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Our internship program provides a valuable opportunity for individuals to gain practical experience in their field of interest Through our program, participants will have the chance to work on client-related alongside IT experts, receiving guidance and feedback from experienced professionals.

 

Our comprehensive program is designed to equip participants with the skills and knowledge necessary to succeed in the industry We welcome applications from students and recent graduates seeking to gain experience in areas such as software, data analysis, and project management.

 

Our program is highly, accepting only the most candidates. Participants will have the opportunity to work on cutting projects and collaborate with some of the most talented professionals in the industry. We are committed to providing our participants with the resources and support they need to achieve their goals and succeed in their careers. If you are looking to jumpstart your career in IT, we encourage you to apply to our internship program today.       </p>
        <button className="bg-black text-white py-2 px-6 rounded-full font-semibold hover:bg-gray-800 transition duration-300">
          Join Us
        </button>
        <div className="mt-4">
          <Link to="/" className="text-red-600 hover:underline"> &lt; Back</Link>
        </div>
      </div>
    </div>
  );
}

export default Internship;