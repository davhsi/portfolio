import React, { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-12 text-center text-violet-300">Get in Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="card bg-slate-800/80 p-6">
            <h3 className="text-2xl font-bold mb-6 text-violet-300">Contact Information</h3>
            <div className="space-y-4">
              <a 
                href="mailto:davish.std@gmail.com" 
                className="flex items-center gap-3 text-violet-200 hover:text-violet-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>davish.std@gmail.com</span>
              </a>
              <a 
                href="mailto:davish.cs22@bitsathy.ac.in" 
                className="flex items-center gap-3 text-violet-200 hover:text-violet-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>davish.cs22@bitsathy.ac.in</span>
              </a>
              <a 
                href="tel:+919489483316" 
                className="flex items-center gap-3 text-violet-200 hover:text-violet-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 94894 83316</span>
              </a>
              <a 
                href="https://linkedin.com/in/edavish" 
                target="_blank" 
                className="flex items-center gap-3 text-violet-200 hover:text-violet-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>@edavish</span>
              </a>
              <a 
                href="https://github.com/davhsi" 
                target="_blank" 
                className="flex items-center gap-3 text-violet-200 hover:text-violet-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>@davhsi</span>
              </a>
            </div>
          </div>

          <div className="card bg-slate-800/80 p-6">
            <h3 className="text-2xl font-bold mb-6 text-violet-300">Personal Details</h3>
            <div className="space-y-2">
              <p className="text-violet-200"><span className="font-medium text-violet-300">Name:</span> Davish E</p>
              <p className="text-violet-200"><span className="font-medium text-violet-300">D.O.B:</span> 22.06.2004</p>
              <p className="text-violet-200"><span className="font-medium text-violet-300">Location:</span> Tirunelveli, Tamil Nadu</p>
              <p className="text-violet-200"><span className="font-medium text-violet-300">Languages:</span> Tamil (W,R,S), English (W,R,S)</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card bg-slate-800/80 p-6">
          <h3 className="text-2xl font-bold mb-6 text-violet-300">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-violet-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-700/80 border border-violet-400/30 rounded-lg text-violet-200 focus:outline-none focus:border-violet-400"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-violet-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-700/80 border border-violet-400/30 rounded-lg text-violet-200 focus:outline-none focus:border-violet-400"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-violet-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 bg-slate-700/80 border border-violet-400/30 rounded-lg text-violet-200 focus:outline-none focus:border-violet-400"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-500 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}