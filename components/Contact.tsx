import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

// EmailJS configuration from environment variables
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
};

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Basic validation
    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    // Check if EmailJS is configured
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
      setStatus('error');
      setErrorMessage('Email service not configured. Please contact directly.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      );

      setStatus('success');
      formRef.current.reset();

      // Reset to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or email directly.');
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="mb-8 px-1">
        <h2 className="text-2xl font-bold theme-text uppercase tracking-tight">Get In Touch</h2>
        <p className="theme-text-muted mt-1">Feel free to reach out for collaborations or opportunities</p>
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

        {/* Contact Form */}
        <div className="p-8 rounded-xl border theme-bg-card theme-border-subtle">
          <h3 className="text-xl font-bold mb-6 theme-text uppercase tracking-widest text-sm text-center md:text-left">Send a Message</h3>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3">
              <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
              <p className="text-green-500 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3">
              <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
              <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* Hidden field for time - auto-generated */}
            <input type="hidden" name="time" value={new Date().toLocaleString('vi-VN')} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 theme-text-dimmed">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  disabled={status === 'sending'}
                  className="w-full border rounded-lg px-4 py-2.5 outline-none transition-all theme-bg-input theme-text theme-border-subtle focus:theme-border disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 theme-text-dimmed">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  disabled={status === 'sending'}
                  className="w-full border rounded-lg px-4 py-2.5 outline-none transition-all theme-bg-input theme-text theme-border-subtle focus:theme-border disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 theme-text-dimmed">Subject</label>
              <input
                type="text"
                name="title"
                disabled={status === 'sending'}
                className="w-full border rounded-lg px-4 py-2.5 outline-none transition-all theme-bg-input theme-text theme-border-subtle focus:theme-border disabled:opacity-50"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest mb-1.5 theme-text-dimmed">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                rows={4}
                required
                disabled={status === 'sending'}
                className="w-full border rounded-lg px-4 py-2.5 outline-none transition-all theme-bg-input theme-text theme-border-subtle focus:theme-border resize-none disabled:opacity-50"
                placeholder="Hello, I'd like to discuss..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full font-bold py-3.5 rounded-lg transition-all flex items-center justify-center space-x-2 theme-primary-bg theme-primary-hover text-white shadow-lg shadow-primary-shadow active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span className="uppercase tracking-widest text-xs">Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span className="uppercase tracking-widest text-xs">Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
