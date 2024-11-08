import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import atriaPhoto from 'D:/hackathon_atria/the merger/my-project/src/images/atria phot.jpeg';

const EventCard = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Texture loader
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(atriaPhoto);

    // Create plane geometry (3D card)
    const geometry = new THREE.PlaneGeometry(5, 3);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.3,
      metalness: 0.5,
    });
    const card = new THREE.Mesh(geometry, material);
    scene.add(card);

    // Improved ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    // Variables for smooth rotation
    let targetRotationX = 0;
    let targetRotationY = 0;

    // Animation loop for smooth rotation
    const animate = () => {
      card.rotation.x += (targetRotationX - card.rotation.x) * 0.05;
      card.rotation.y += (targetRotationY - card.rotation.y) * 0.05;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Mouse move interaction with damping for smooth effect
    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      targetRotationY = (clientX / innerWidth - 0.5) * 0.5; // Smooth and limited rotation on Y-axis
      targetRotationX = -(clientY / innerHeight - 0.5) * 0.3; // Smooth and limited rotation on X-axis
    };
    window.addEventListener('mousemove', onMouseMove);

    // Clean up function
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative max-w-lg mx-auto rounded-lg overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105"
      style={{ height: '500px', width: '100%', cursor: 'pointer', perspective: '1000px' }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#2c3e50] via-[#34495e]/90 to-transparent text-center text-white transition-opacity duration-300 ease-out"
        style={{
          opacity: 0.95,
          backdropFilter: 'blur(6px)',
        }}
      >
        <h2 className="text-2xl font-bold tracking-wide mb-2">Hackathon - Atria</h2>
        <p className="text-md mb-1">
          Nov 07, 2024, 4:00 PM - Nov 08, 2024, 1:00 PM
        </p>
        <p className="text-sm font-light mb-4">Bengaluru, Karnataka, India</p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
          style={{ transition: 'background-color 0.3s ease, transform 0.3s ease' }}
        >
          RSVP Now
        </button>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <div className="my-10">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Upcoming Events</h1>
      <EventCard />
    </div>
  );
};

export default UpcomingEvents;
