import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Project Leap completely transformed my small business. Having a professional website allowed me to reach customers I never thought possible.",
    author: "Sarah O.",
    role: "Local Artisan & Business Owner",
    image: "https://i.imgur.com/pX4o2fB.jpeg"
  },
  {
    id: 2,
    quote: "The Coding for Kids program gave my daughter the confidence to pursue a career in technology. She's now building her own apps!",
    author: "David M.",
    role: "Parent of Beneficiary",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "Partnering with Scaleup Foundation has been incredibly rewarding. Their commitment to empowering the next generation is truly inspiring.",
    author: "Elena R.",
    role: "Corporate Partner",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-blue dark:text-white">
            Voices of Impact
          </h3>
        </div>

        <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-brand-green/20" />
          
          <div className="relative h-64 md:h-48 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center w-full"
              >
                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 italic mb-8 relative z-10">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-green"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <div className="font-bold text-brand-blue dark:text-white">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-sm text-brand-green">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-green dark:hover:text-brand-green transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-brand-green' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-brand-green dark:hover:text-brand-green transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
