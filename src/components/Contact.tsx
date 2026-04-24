import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/mgopdvgd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand-blue dark:text-white mb-4"
          >
            Contact Us
          </motion.h2>
          <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a question, want to partner with us, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-8">Get in Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#f2fceb] dark:bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <MapPin className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-blue dark:text-white mb-1">Our Headquarters</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    25 Yakubu Gowon Crescent,<br />
                    Asokoro, Abuja, Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#f2fceb] dark:bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <Mail className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-blue dark:text-white mb-1">Email Us</h4>
                  <a href="mailto:meetus@scaleupfoundation.org" className="text-slate-600 dark:text-slate-400 hover:text-brand-green transition-colors">
                    meetus@scaleupfoundation.org
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#f2fceb] dark:bg-brand-green/10 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                  <Phone className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-blue dark:text-white mb-1">Call Us</h4>
                  <a href="tel:+2348121264563" className="text-slate-600 dark:text-slate-400 hover:text-brand-green transition-colors">
                    +234 812 126 4563
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {status === 'success' && <p className="text-green-500 text-center">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-500 text-center">Failed to send message. Please try again.</p>}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    disabled={status === 'submitting'}
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all disabled:opacity-50"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    disabled={status === 'submitting'}
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all disabled:opacity-50"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  disabled={status === 'submitting'}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all disabled:opacity-50"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  disabled={status === 'submitting'}
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all disabled:opacity-50"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  disabled={status === 'submitting'}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all resize-none disabled:opacity-50"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <motion.button 
                type="submit"
                disabled={status === 'submitting'}
                whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-blue hover:bg-[#0a0a8a] dark:bg-brand-green dark:hover:bg-[#6bc239] dark:text-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
