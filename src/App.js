// App.js
import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContactForm from "D:/hackathon_atria/the merger/my-project/src/contact.js";
import BlogPage from "./blog.js"
import Grouped from "./Grouped"
import HomePage from './home';
import CloudSolutions from './CloudSolutions';
import Services from './Services';
import Webdev from './Webdev';
import FullStack from './FullStack';
import Projects from './Projects';
import Internship from './Internship';
import UpcomingEvents from './Events'
import LoginForm from './login.js';
import InternshipCard from './InternshipCard.js';
import ElevateSection from './ElevateSection.js';
import Logo3D from './main';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let closeTimeout;

  const openDropdown = () => {
    clearTimeout(closeTimeout);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    closeTimeout = setTimeout(() => setIsDropdownOpen(false), 500); // 500ms delay
  };

  return (
    <header className="bg-gradient-to-r from-[#265073] to-[#2D9596] text-white p-6 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-4">
        <Logo3D /> {/* 3D logo component */}      </div>
      <nav className="flex space-x-8 text-lg"></nav>
      <nav className="flex space-x-8 text-lg">
        <Link to="/home" className="hover:text-[#9AD0C2] transition duration-300">Home</Link>
        <a href="#services" className="hover:text-[#9AD0C2] transition duration-300">Our Services</a>
        <a href="#products" className="hover:text-[#9AD0C2] transition duration-300">Products</a>
        <Link to="/courr" className="hover:text-[#9AD0C2] transition duration-300">Courses</Link>
        <Link to="/interns" className="hover:text-[#9AD0C2] transition duration-300">Internships</Link>

        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="hover:text-[#9AD0C2] transition duration-600">More</button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-[#F1FADA] text-[#265073] rounded-lg shadow-lg w-44 z-10">
              <Link to="/events" className="block px-4 py-2 hover:bg-[#9AD0C2]">Events</Link>
              <Link to="/blogs" className="block px-4 py-2 hover:bg-[#9AD0C2]">Blogs</Link>
              <a href="#resources" className="block px-4 py-2 hover:bg-[#9AD0C2]">Resources</a>
              <Link to="/groups" className="block px-4 py-2 hover:bg-[#9AD0C2]">Groups</Link>
              <Link to="/contact" className="block px-4 py-2 hover:bg-[#9AD0C2]">Contact Us</Link>
              <a href="#account" className="block px-4 py-2 hover:bg-[#9AD0C2]">My Account</a>
              <a href="#signup" className="block px-4 py-2 hover:bg-[#9AD0C2]">Sign Up</a>
              <Link to="/login" className="block px-4 py-2 hover:bg-[#9AD0C2]">Login</Link>
            </div>
          )}
        </div>
      </nav>
      <button className="bg-[#F1FADA] text-[#265073] px-4 py-2 rounded-full hover:bg-[#9AD0C2] transition duration-300">Get Started</button>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#265073] text-white mt-auto py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-wrap justify-between">
            {/* Logo Section */}
            <div className="w-full md:w-1/5 mb-10">
              <img
                src={require('./images/logo.png')}
                alt="Company Logo"
                className="h-12 mb-4"
              />
            </div>

            {/* Links Sections */}
            <div className="w-full md:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-10">
              {/* Products */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Products</h3>
                <ul className="space-y-2">
                  <li><a href="#document" className="hover:text-gray-300">Document & Email Management</a></li>
                  <li><a href="#security" className="hover:text-gray-300">Security & Governance</a></li>
                  <li><a href="#risk" className="hover:text-gray-300">Risk & Compliance</a></li>
                  <li><a href="#knowledge" className="hover:text-gray-300">Knowledge Search & Management</a></li>
                </ul>
              </div>

              {/* Success & Services */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Success & Services</h3>
                <ul className="space-y-2">
                  <li><a href="#consulting" className="hover:text-gray-300">Consulting Services</a></li>
                  <li><a href="#education" className="hover:text-gray-300">Education & Training</a></li>
                  <li><a href="#change" className="hover:text-gray-300">Change Management</a></li>
                  <li><a href="#support" className="hover:text-gray-300">Support</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-semibold mb-6">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#partners" className="hover:text-gray-300">Partners</a></li>
                  <li><a href="#stories" className="hover:text-gray-300">Customer Stories</a></li>
                  <li><a href="#library" className="hover:text-gray-300">Content Library</a></li>
                  <li><a href="#events" className="hover:text-gray-300">Events & Webinars</a></li>
                </ul>
              </div>

              {/* About */}
              <div>
                <h3 className="text-lg font-semibold mb-6">About</h3>
                <ul className="space-y-2">
                  <li><a href="#company" className="hover:text-gray-300">The Company</a></li>
                  <li><a href="#team" className="hover:text-gray-300">Meet the Team</a></li>
                  <li><a href="#careers" className="hover:text-gray-300">Careers</a></li>
                  <li><a href="#contact" className="hover:text-gray-300">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start mt-12 space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" alt="LinkedIn" className="h-8 w-8" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src='./images' alt="Twitter" className="h-8 w-8" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" className="h-8 w-8" />
            </a>
          </div>
        </div>
      </footer>
  );
}


function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/groups" element={<Grouped />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/services" element={<Services />} />
            <Route path="/webdev" element={<Webdev />} />
            <Route path="/fullstack" element={<FullStack />} />
            <Route path="/proj" element={<Projects />} />
            <Route path="/intern" element={<Internship />} />
            <Route path="/events" element={<UpcomingEvents />} />
            <Route path="/interns" element={<InternshipCard />} />
            <Route path="/courr" element={<ElevateSection />} />
            {/* Add other routes here if needed */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
