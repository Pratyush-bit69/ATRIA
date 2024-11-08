import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { Link } from 'react-router-dom';
import './home.css';
import Services from './Services';
import CloudSolutions from './CloudSolutions';
import Webdev from './Webdev';
import FullStack from './FullStack';
import Projects from './Projects';
import Internship from './Internship';

// Background animation component
function AnimatedParticles() {
  const particlesRef = React.useRef();
  const particlesCount = 3000;
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

function BackgroundCanvas() {
  return (
    <Canvas className="absolute inset-0 h-full" camera={{ position: [0, 0, 7], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <AnimatedParticles />
    </Canvas>
  );
}

function TeamMemberCard({ imageSrc, name, title, description }) {
  return (
    <div className="team-member-card">
      <img src={imageSrc} alt={name} className="team-member-image" />
      <div className="team-member-info">
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-title">{title}</p>
        <p className="team-member-description">{description}</p>
      </div>
    </div>
  );
}

function TeamSection() {
  return (
    <section className="team-section">
      <h2 className="team-section-heading">Meet Our Talented Team: Experts in Their Fields</h2>
      <p className="team-section-subheading">
        "Our team is composed of passionate individuals who are dedicated to providing service to our clients."
      </p>
      <div className="team-grid">
        <TeamMemberCard
          imageSrc="path-to-image1.jpg"
          name="Chavon Ulman Farias"
          title="Managing Director"
          description="Responsible for overseeing day-to-day operations and ensuring the efficiency of each department."
        />
        <TeamMemberCard
          imageSrc="path-to-image2.jpg"
          name="Reddy Pawan A"
          title="Corporate Relations Manager"
          description="Responsible for maintaining and enhancing relationships between the company and its stakeholders."
        />
      </div>
    </section>
  );
}

// Testimonial Component
function Testimonial() {
  return (
    <section className="testimonial-section bg-gray-100 py-12 text-center">
      <p className="text-gray-700 text-lg italic max-w-2xl mx-auto">
        "I had a great experience working with this company. The team was professional, responsive, and went above and beyond to ensure that my project was completed on time and to my satisfaction. I would definitely work with them again in the future."
      </p>
      <p className="mt-4 text-gray-800 font-semibold">- Mander V</p>
    </section>
  );
}

// Call to Action Component
function CallToAction() {
  return (
    <section className="cta-section bg-gray-50 py-12 text-center">
      <h2 className="text-4xl font-bold text-blue-800 mb-6">Ready to find out more?</h2>
      <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
        Are you ready to take your business to the next level? Look no further than MasterSolis InfoTech! We’re here to help you revolutionize the way you do business and achieve your goals. Contact us today to find out more!
      </p>
      <button className="bg-red-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-red-700 transition duration-300">
        Get Free Consultation
      </button>
    </section>
  );
}

// HomePage Component with the main content
function HomePage() {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 h-full">
          <BackgroundCanvas />
        </div>
        
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="relative z-20 max-w-lg px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-100">Experience Digital Excellence with MasterSolis</h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            MasterSolis InfoTech believes in connecting corporate professionals to excel students professionally and make them industry-ready.
          </p>
        </div>
      </section>
      
      <section className="p-10 md:p-16 bg-gray-50 relative z-10">
        <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
          MasterSolis InfoTech provides courses, internships, and services that bridge the gap between academic knowledge and industry demands.
        </p>
      </section>

      <section id="services" className="py-16 bg-gray-100 text-gray-800">
  <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Our Services</h2>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="service-card bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4">Cloud Solutions</h3>
      <p className="text-gray-600">We offer cloud solutions that allow you to store, manage, and process your data on a remote server.</p>
      <Link to="/cloud-solutions" className="text-red-600 hover:underline mt-4 block">Learn More</Link>
    </div>
    <div className="service-card bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4">IT Services</h3>
      <p className="text-gray-600">Our IT services provide cutting-edge technology to improve business efficiency.</p>
      <Link to="/services" className="text-red-600 hover:underline mt-4 block">Learn More</Link>
    </div>
    <div className="service-card bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4">Web Development</h3>
      <p className="text-gray-600">We design dynamic, user-friendly websites that promote your business’s growth.</p>
      <Link to="/webdev" className="text-red-600 hover:underline mt-4 block">Learn More</Link>
    </div>
    <div className="service-card bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4">Full Stack Training</h3>
      <p className="text-gray-600">Our training equips you with skills in front-end and back-end development.</p>
      <Link to="/fullstack" className="text-red-600 hover:underline mt-4 block">Learn More</Link>
    </div>
    <div className="service-card bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4">Projects</h3>
      <p className="text-gray-600">Join projects that bridge the gap between academic learning and industry practice.</p>
      <Link to="/proj" className="text-red-600 hover:underline mt-4 block">Learn More</Link>
    </div>
    <div className="service-card bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold text-blue-800 mb-4">Internships</h3>
      <p className="text-gray-600">Our internships provide real-world experience in IT to make you industry-ready.</p>
      <Link to="/intern" className="text-red-600 hover:underline mt-4 block">Learn More</Link>
    </div>
  </div>
</section>

      <TeamSection />
      <Testimonial />
      <CallToAction />
    </div>
  );
}

export default HomePage;
