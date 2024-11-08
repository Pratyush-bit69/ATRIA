// src/ElevateSection.js
import React from "react";
import dsaImage from "./images/dsa.jpg";
import reactJsImage from "./images/react.jpg";
import frontendImage from "./images/front.jpg";

function ElevateSection() {
  const courses = [
    {
      title: "DSA Using Python",
      description:
        "Become proficient in data structures and algorithms using Python with hands-on projects and expert guidance.",
      price: "₹4000",
      duration: "8 weeks",
      imgSrc: dsaImage,
    },
    {
      title: "React JS with Project",
      description:
        "Master frontend development with React through comprehensive projects designed for real-world skills.",
      price: "₹5500",
      duration: "24 weeks",
      imgSrc: reactJsImage,
    },
    {
      title: "Front End - HTML, CSS, JS",
      description:
        "Learn the fundamentals of frontend development to prepare for advanced frameworks like React or Angular.",
      price: "₹2500",
      duration: "6 weeks",
      imgSrc: frontendImage,
    },
  ];

  return (
    <div className="bg-[#265073] min-h-screen p-10 text-[#F1FADA]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#F1FADA]">
          Elevate Your Skills with MasterSolis InfoTech
        </h2>
        <p className="text-[#9AD0C2] mt-4 text-lg">
          Explore our courses to upskill and achieve your career goals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#F1FADA] text-[#265073] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={course.imgSrc}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
              <p className="text-[#2D9596] mb-4">{course.description}</p>
              <div className="flex justify-between items-center text-[#265073] mb-4">
                <div>
                  <span className="block font-semibold">Price</span>
                  <span>{course.price}</span>
                </div>
                <div>
                  <span className="block font-semibold">Duration</span>
                  <span>{course.duration}</span>
                </div>
              </div>
              <a
                href="#"
                className="inline-block w-full text-center px-4 py-2 bg-[#265073] text-[#F1FADA] font-semibold rounded-lg hover:bg-[#9AD0C2] transition-colors duration-300 shadow-md"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElevateSection;
