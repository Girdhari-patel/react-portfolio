// src/components/Contact.js
import React, { useRef, useState,} from 'react';
import emailjs from '@emailjs/browser';
 const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



const templateParams = {
  to_name: 'Girdhari',
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message,
};
const service_id = 'service_7inxbsf';
const template_id = 'template_qz0adxy';
const publicKey = 'ASE30loEWvZwXpHao';


const sentEmail = () => { 
  emailjs
    .send(service_id, template_id, templateParams, {
      publicKey: publicKey,
    })
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        return 1;
      },
      (err) => {
        console.log('FAILED...', err);
        return 0;
      },
    );
};
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name=='' || formData.email=='' || formData.message == ''){
      alert("Please fill out the entire form.");
      return
    }
    sentEmail();
    console.log(formData.email);
    alert('Message sent to Girdhari');
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
