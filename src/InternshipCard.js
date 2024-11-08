// src/App.js
import React from "react";
import aiMlImage from "./images/aiml.jpg";
import djangoImage from "./images/django.jpg";
import frontendImage from "./images/stack.jpg";

// Sample internships data with local image imports
const internships = [
  {
    title: "AI, ML using Python",
    participants: 8,
    image: aiMlImage,
    link: "#",
  },
  {
    title: "Django Using Python",
    participants: 4,
    image: djangoImage,
    link: "#",
  },
  {
    title: "Frontend - HTML, CSS, React",
    participants: 12,
    image: frontendImage,
    link: "#",
  },
];

function InternshipCard({ title, participants, image, link }) {
  return (
    <div className="group relative bg-[#F1FADA] shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <div className="relative overflow-hidden rounded-lg shadow-inner">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#265073] opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 bg-[#F1FADA] relative z-10">
        <h3 className="text-xl font-semibold text-[#2D9596] tracking-wide group-hover:text-[#265073] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#9AD0C2] mt-1">{participants} Participants</p>
        <p className="text-[#2D9596] font-semibold mt-2">Free</p>
        <a
          href={link}
          className="mt-6 inline-block text-center bg-gradient-to-r from-[#265073] to-[#2D9596] text-[#F1FADA] font-semibold py-2 px-5 rounded-lg shadow-md hover:from-[#2D9596] hover:to-[#265073] transition-all duration-300 transform group-hover:scale-105"
        >
          Join Now
        </a>
      </div>
    </div>
  );
}

export default function InternshipSection() {
  return (
    <section className="bg-[#9AD0C2] py-20 px-5">
      <h2 className="text-5xl font-extrabold text-center text-[#265073] mb-16 tracking-wider">
        Internships
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {internships.map((internship, index) => (
          <InternshipCard
            key={index}
            title={internship.title}
            participants={internship.participants}
            image={internship.image}
            link={internship.link}
          />
        ))}
      </div>
    </section>
    );
}
