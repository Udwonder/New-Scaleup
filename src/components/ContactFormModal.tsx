import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: 'volunteer' | 'partner';
}

export function ContactFormModal({ isOpen, onClose, formType }: ContactFormModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const url = formType === 'partner' ? 'https://formspree.io/f/xwvwyvej' : 'https://formspree.io/f/meepneql';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formType, ...formData }),
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({ name: '', email: '', message: '' });
        }, 2000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl w-full max-w-md shadow-2xl relative">
              <button onClick={onClose} aria-label="Close modal" className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 dark:hover:text-white">
                <X size={24} />
              </button>
              <h2 id="modal-title" className="text-2xl font-bold text-brand-blue dark:text-white mb-6">
                {formType === 'volunteer' ? 'Become a Volunteer' : 'Become a Corporate Partner'}
              </h2>
              {status === 'success' ? (
                <div className="text-center py-8">
                  <p className="text-green-500 font-semibold">Thank you! Your application to {formType === 'volunteer' ? 'Become a Volunteer' : 'Become a Corporate Partner'} has been submitted.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" aria-labelledby="modal-title">
                  {status === 'error' && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      required
                      disabled={status === 'submitting'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      disabled={status === 'submitting'}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      placeholder="Your Message"
                      required
                      disabled={status === 'submitting'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 h-32 disabled:opacity-50"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-green text-brand-blue py-3 rounded-full font-semibold hover:bg-[#6bc239] transition-colors disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
