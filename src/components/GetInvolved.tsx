import { useState } from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Building2 } from 'lucide-react';
import { ContactFormModal } from './ContactFormModal';

export function GetInvolved() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<'volunteer' | 'partner'>('volunteer');

  const openModal = (type: 'volunteer' | 'partner') => {
    setFormType(type);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue dark:text-white mb-4">Get Involved</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Volunteers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col h-full"
          >
            <div className="w-16 h-16 bg-[#f2fceb] dark:bg-brand-green/10 rounded-full flex items-center justify-center mb-8">
              <HeartHandshake className="w-8 h-8 text-brand-green" />
            </div>
            <h3 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-2">For Volunteers</h3>
            <h4 className="text-3xl font-bold text-brand-blue dark:text-white mb-4">Lend Your Skills to the Movement.</h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
              Whether you are a developer, a mentor, or a strategist, your time can change a life. Join our network of global volunteers and help us scale our impact.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal('volunteer')}
              className="w-full sm:w-auto bg-brand-blue hover:bg-[#0a0a8a] dark:bg-brand-green dark:hover:bg-[#6bc239] dark:text-brand-blue text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Sign Up to Volunteer
            </motion.button>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-brand-blue p-10 rounded-3xl border border-[#0a0a8a] flex flex-col h-full text-white"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-8">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-2">For Partners</h3>
            <h4 className="text-3xl font-bold text-white mb-4">Let's Scale Together.</h4>
            <p className="text-slate-300 leading-relaxed mb-8 flex-grow">
              We collaborate with corporations, NGOs, and governments to create sustainable systems of growth. Partner with us to fund a project or co-create a training program.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal('partner')}
              className="w-full sm:w-auto bg-brand-green hover:bg-[#6bc239] text-brand-blue px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Become a Corporate Partner
            </motion.button>
          </motion.div>
        </div>
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} formType={formType} />
    </section>
  );
}
