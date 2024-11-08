// src/App.js
import React from 'react';
import { FaThumbsUp, FaPlus, FaShare } from 'react-icons/fa';
import './group.css';

function Grouped() {
  return (
    <div className="flex bg-gray-100 min-h-screen p-4 space-x-6 animate-fadeIn">
      {/* Left Sidebar Feed */}
      <div className="hidden lg:block w-1/4 bg-white shadow-lg rounded-lg p-4 animate-slideInLeft">
        <h2 className="text-lg font-semibold mb-4">Relevant Feed</h2>
        <div className="three-d-card">
          <div className="card-content">
            <h3 className="text-sm font-medium">New UI/UX Trends</h3>
            <p className="text-xs text-gray-500">November 8, 2024</p>
          </div>
        </div>
        <div className="three-d-card">
          <div className="card-content">
            <h3 className="text-sm font-medium">Top 10 JavaScript Libraries</h3>
            <p className="text-xs text-gray-500">November 7, 2024</p>
          </div>
        </div>
        <div className="three-d-card">
          <div className="card-content">
            <h3 className="text-sm font-medium">AI in Web Development</h3>
            <p className="text-xs text-gray-500">November 5, 2024</p>
          </div>
        </div>
        <div className="three-d-card">
          <div className="card-content">
            <h3 className="text-sm font-medium">How to Master CSS</h3>
            <p className="text-xs text-gray-500">November 4, 2024</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="three-d-card">
          <div className="card-content">
            <div className="flex items-center mb-4">
              <span className="text-gray-500 text-lg font-medium">Sayandeep Ghosh</span>
              <span className="text-gray-400 text-sm ml-4">6 hours ago</span>
            </div>
            <p className="text-gray-700 mb-4">joined FrontEnd Internship</p>
            <div className="flex items-center space-x-4">
              <button className="button-effect">
                <FaThumbsUp className="mr-1" /> Like
              </button>
              <button className="button-effect">
                <FaPlus className="mr-1" /> Add
              </button>
              <button className="button-effect">
                <FaShare className="mr-1" /> Share
              </button>
            </div>
            <input
              type="text"
              placeholder="Write a comment..."
              className="mt-4 w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="three-d-card">
          <div className="card-content">
            <div className="flex items-center mb-4">
              <span className="text-gray-500 text-lg font-medium">Praveen Pc</span>
              <span className="text-gray-400 text-sm ml-4">December 10, 2023</span>
            </div>
            <p className="text-gray-700 mb-4">
              Welcome to our group FrontEnd Internship! A space for us to connect and share with each other. Start by posting your thoughts, sharing media, or creating a poll.
            </p>
            <div className="flex items-center space-x-4">
              <button className="button-effect">
                <FaThumbsUp className="mr-1" /> Like
              </button>
              <button className="button-effect">
                <FaPlus className="mr-1" /> Add
              </button>
              <button className="button-effect">
                <FaShare className="mr-1" /> Share
              </button>
            </div>
            <input
              type="text"
              placeholder="Write a comment..."
              className="mt-4 w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Right Sidebar for Suggested Groups */}
      <div className="hidden lg:block w-1/4 sticky-sidebar bg-white shadow-lg rounded-lg p-4 animate-slideInRight">
        <h2 className="text-lg font-semibold mb-4">Suggested Groups</h2>
        <div className="three-d-card">
          <div className="card-content">
            <div className="flex justify-between items-center p-2 mb-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-200 animate-fadeIn">
              <div>
                <h3 className="text-sm font-medium">FrontEnd Internship</h3>
                <p className="text-xs text-gray-500">2 members</p>
              </div>
              <button className="join-button">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="three-d-card">
          <div className="card-content">
            <div className="flex justify-between items-center p-2 mb-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-200 animate-fadeIn">
              <div>
                <h3 className="text-sm font-medium">AI, ML using Python</h3>
                <p className="text-xs text-gray-500">3 members</p>
              </div>
              <button className="join-button">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="three-d-card">
          <div className="card-content">
            <div className="flex justify-between items-center p-2 mb-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-200 animate-fadeIn">
              <div>
                <h3 className="text-sm font-medium">Backend using Django</h3>
                <p className="text-xs text-gray-500">2 members</p>
              </div>
              <button className="join-button">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="three-d-card">
          <div className="card-content">
            <div className="flex justify-between items-center p-2 mb-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-transform transform hover:scale-105 duration-200 animate-fadeIn">
              <div>
                <h3 className="text-sm font-medium">Students</h3>
                <p className="text-xs text-gray-500">1 student</p>
              </div>
              <button className="join-button">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grouped;
