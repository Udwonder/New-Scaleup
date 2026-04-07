import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface GetInvolvedFormProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'Volunteer' | 'Partner';
}

export function GetInvolvedForm({ isOpen, onClose, type }: GetInvolvedFormProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/mgopdvgd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, type }),
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl max-w-lg w-full relative"
          >
            <button onClick={onClose} aria-label="Close modal" className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 dark:hover:text-white">
              <X size={24} />
            </button>
            <h2 id="modal-title" className="text-2xl font-bold text-brand-blue dark:text-white mb-6">
              Sign Up as {type}
            </h2>
            {status === 'success' ? (
              <div className="text-center py-8">
                <p className="text-green-500 font-semibold">Thank you! Your application has been submitted.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" aria-labelledby="modal-title">
                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    disabled={status === 'submitting'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input
                    required
                    type="email"
                    id="email"
                    disabled={status === 'submitting'}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    id="message"
                    disabled={status === 'submitting'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white disabled:opacity-50"
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
