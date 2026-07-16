import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { personalInfo } from '../data';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-paper/70 mb-2">Name</label>
          <input
            type="text"
            id="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-paper/20 bg-paper/5 text-paper placeholder-paper/40 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-paper/70 mb-2">Email</label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-paper/20 bg-paper/5 text-paper placeholder-paper/40 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-paper/70 mb-2">Message</label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-paper/20 bg-paper/5 text-paper placeholder-paper/40 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 bg-accent hover:bg-accent-strong text-paper rounded-xl font-medium flex items-center justify-center gap-2 transition-colors"
      >
        <Send size={18} />
        Send Message
      </button>
    </form>
  );
}
