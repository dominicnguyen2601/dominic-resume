import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <p className="text-slate-400">Feel free to reach out for collaborations or opportunities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-dark-card p-6 rounded-xl border border-slate-700/50 hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-start space-x-4 group">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-medium group-hover:text-primary transition-colors">{PERSONAL_INFO.email}</p>
                </div>
              </a>
              
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-slate-800 rounded-lg text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-white font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-slate-800 rounded-lg text-purple-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mock Form */}
        <div className="bg-dark-card p-8 rounded-xl border border-slate-700/50">
          <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Subject</label>
              <input 
                type="text" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
              <textarea 
                rows={4} 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Hello, I'd like to discuss..."
              ></textarea>
            </div>
            <button className="w-full bg-primary hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <Send size={18} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;