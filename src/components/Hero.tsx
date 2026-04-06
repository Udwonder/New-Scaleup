import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-blue pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          style={{ y }}
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          alt="Abstract technology background"
          className="w-full h-[120%] object-cover opacity-30"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/60 to-brand-blue"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight"
          >
            Scaling Potential, <br className="hidden md:block" />
            <span className="text-brand-green">Empowering Africa's</span> Digital Future.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            We are a global non-profit dedicated to bridging the digital divide. From building 5,000 SME websites to training the next generation of AI leaders, we turn local potential into global impact.
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/projects"
            className="w-full sm:w-auto bg-brand-green hover:bg-[#6bc239] text-brand-blue px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Our Projects
            <ArrowRight size={20} />
          </Link>
          <Link
            to="/get-involved"
            className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}
