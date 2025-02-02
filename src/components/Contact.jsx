// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-800 py-16 px-6 text-white">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 bg-gray-700 text-white rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 bg-gray-700 text-white rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-4 bg-gray-700 text-white rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
          />
          <button type="submit" className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
