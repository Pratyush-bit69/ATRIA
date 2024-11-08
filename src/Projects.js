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

function Projects() {
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
        Final Year/ Mini Projects</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Our service provides professional assistance to students who require help with their final or mini projects. We understand the significance of these projects and the importance of meeting deadlines. Our team of experts has extensive experience in various fields can offer tailored guidance and support to ensure that your project is completed to the highest standard.

 

Our services include project planning, proposal writing, data analysis, research, writing, and editing. We are committed to providing you with high-quality work that your expectations, and we offer revisions to ensure your complete satisfaction. Our service is confidential secure, and we take pride in our exceptional customer service.

 

We are available to answer any questions you may have throughout the process. Our pricing is competitive and affordable, making our service accessible to all students. Don't let the stress of your final or mini project overwhelm you - contact us today to learn more about our services and how we can assist you.
                    </p>
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

export default Projects;