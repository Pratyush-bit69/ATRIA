import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import logoImage from './images/logo.png'; // Corrected path

const BlogPage = () => {
  const headerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      headerRef.current.clientWidth / headerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(headerRef.current.clientWidth, headerRef.current.clientHeight);
    headerRef.current.appendChild(renderer.domElement);

    // Load texture and create a rotating logo or placeholder
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load(logoImage);
    const logoMaterial = new THREE.MeshBasicMaterial({ map: logoTexture });
    const logoGeometry = new THREE.PlaneGeometry(10, 10);
    const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
    scene.add(logoMesh);

    const animate = () => {
      requestAnimationFrame(animate);
      logoMesh.rotation.z += 0.01; // Rotate logo
      renderer.render(scene, camera);
    };
    animate();

    return () => headerRef.current.removeChild(renderer.domElement);
  }, []);

  // Function to generate each blog card
  const BlogCard = ({ title, summary, date }) => (
    <div className="relative rounded-lg overflow-hidden shadow-lg p-4 bg-gray-800 text-white hover:shadow-2xl transition-transform duration-300 hover:scale-105">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm mt-2">{summary}</p>
      <p className="text-xs mt-4 text-gray-400">{date}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center p-8">
      {/* Header Section */}
      <div className="w-full h-40 mb-12 relative" ref={headerRef}>
        <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-3xl font-extrabold text-center text-white">
          Welcome to Mastersolis Blog
        </h1>
      </div>

      {/* Blog Cards Section */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard
          title="Internships at Mastersolis"
          summary="Discover our internship programs designed to launch your career in tech."
          date="Nov 8, 2024"
        />
        <BlogCard
          title="Coding Tips for Beginners"
          summary="Essential coding practices and tips to help you get started on the right foot."
          date="Nov 10, 2024"
        />
        <BlogCard
          title="Company Updates"
          summary="Stay updated on Mastersolis and our latest news in the tech world."
          date="Nov 12, 2024"
        />
      </div>
    </div>
  );
};

export default BlogPage;
