import { motion } from 'motion/react';
import { Contact } from '../components/Contact';

export function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Contact />
    </motion.div>
  );
}
