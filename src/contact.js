import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="contact-form-container">
        <h1 className="text-center text-xl font-semibold text-gray-800 mb-4">Contact Us</h1>
        <form className="space-y-3">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name *</label>
            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email *</label>
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message *</label>
            <textarea
              placeholder="Your Message"
              rows="3"
              className="form-input"
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            Send Message
          </button>
        </form>
        <div className="contact-details text-center text-gray-600 mt-4">
          <p>Email: <a href="mailto:mastersolisinfotech@gmail.com" className="text-blue-600 hover:underline">mastersolisinfotech@gmail.com</a></p>
          <p>Phone: <a href="tel:9440965396" className="text-blue-600 hover:underline">944-0965-396</a></p>
          <p>Location: Hebbal, Bangalore, Karnataka, IN</p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
