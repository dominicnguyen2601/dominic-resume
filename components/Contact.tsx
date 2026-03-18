import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto px-1">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3 theme-text uppercase tracking-tight">Get In Touch</h2>
        <p className="theme-text-muted max-w-lg mx-auto leading-relaxed">Feel free to reach out for collaborations or opportunities. I'll get back to you as soon as possible.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl border transition-colors theme-bg-card theme-border-subtle hover:theme-border">
            <h3 className="text-xl font-bold mb-6 theme-text uppercase tracking-widest text-sm">Contact Information</h3>
            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-start space-x-4 group no-theme-transition">
                <div className="p-3 rounded-lg transition-colors theme-bg-secondary group-hover:theme-primary-bg group-hover:text-white theme-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest theme-text-dimmed mb-1">Email</p>
                  <p className="font-medium transition-colors theme-text group-hover:theme-primary">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              
              <div className="flex items-start space-x-4 group no-theme-transition">
                <div className="p-3 rounded-lg theme-bg-secondary theme-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest theme-text-dimmed mb-1">Phone</p>
                  <p className="font-medium theme-text">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group no-theme-transition">
                <div className="p-3 rounded-lg theme-bg-secondary" style={{ color: 'var(--color-primary)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest theme-text-dimmed mb-1">Location</p>
                  <p className="font-medium theme-text">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mock Form */}
        <div className="p-8 rounded-xl border theme-bg-card theme-border-subtle">
          <h3 className="text-xl font-bold mb-6 theme-text uppercase tracking-widest text-sm text-center md:text-left">Send a Message</h3>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 theme-text-dimmed">Name</label>
                <input 
                  type="text" 
                  className="w-full border rounded-lg px-4 py-2.5 outline-none transition-all theme-bg-input theme-text theme-border-subtle focus:theme-border"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 theme-text-dimmed">Email</label>
                <input 
                  type="email" 
                  className="w-full border rounded-lg px-4 py-2.5 outline-none transition-all theme-bg-input theme-text theme-border-subtle focus:theme-border"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 theme-text-dimmed">Subject</label>
              <input 
                type="text" 
                className="w-full border rounded-lg px-4 py-2.5 outline-none transition-all theme-bg-input theme-text theme-border-subtle focus:theme-border"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 theme-text-dimmed">Message</label>
              <textarea 
                rows={4} 
                className="w-full border rounded-lg px-4 py-2.5 outline-none transition-all theme-bg-input theme-text theme-border-subtle focus:theme-border resize-none"
                placeholder="Hello, I'd like to discuss..."
              ></textarea>
            </div>
            <button className="w-full font-bold py-3.5 rounded-lg transition-all flex items-center justify-center space-x-2 theme-primary-bg theme-primary-hover text-white shadow-lg shadow-primary-shadow active:scale-[0.98]">
              <Send size={18} />
              <span className="uppercase tracking-widest text-xs">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;