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

function Services() {
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
Managed
IT Services</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Our Managed IT Service is here to make your life easier. We offer seamless IT solutions for your business, so you can focus your time and energy on growing your business. Our team of experts provides effective and efficient support for all your IT needs. Say goodbye to IT-related headaches, and hello to hassle-free IT with our Managed IT Service.



Let us handle your IT needs with our Managed IT Service. Our dedicated team will work with you to ensure that your business runs smoothly and effectively. Our efficient solutions guarantee hassle-free IT, which means you can focus on what matters most—your business. See our plans below and choose the one that suits your business today.
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

export default Services;