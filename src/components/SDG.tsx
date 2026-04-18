import { motion } from 'motion/react';
import { BookOpen, Briefcase, Lightbulb, Scale } from 'lucide-react';

export function SDG() {
  const sdgs = [
    { 
      num: "4", 
      title: "Quality Education", 
      description: "We provide accessible, high-quality training and mentorship to bridge the knowledge gap for aspiring entrepreneurs across Africa and beyond.",
      color: "bg-brand-blue",
      icon: <BookOpen className="w-8 h-8 text-brand-green" />
    },
    { 
      num: "8", 
      title: "Decent Work and Economic Growth", 
      description: "By empowering individuals with practical business skills, we stimulate job creation and foster sustainable economic growth in local communities.",
      color: "bg-brand-blue",
      icon: <Briefcase className="w-8 h-8 text-brand-green" />
    },
    { 
      num: "9", 
      title: "Innovation & Infrastructure", 
      description: "We equip innovators with the tools, knowledge, and networks needed to build resilient enterprises and drive technological advancement.",
      color: "bg-brand-blue",
      icon: <Lightbulb className="w-8 h-8 text-brand-green" />
    },
    { 
      num: "10", 
      title: "Reduced Inequalities", 
      description: "Our programs democratize access to resources and opportunities, ensuring underrepresented groups have an equal chance to succeed and scale.",
      color: "bg-brand-blue",
      icon: <Scale className="w-8 h-8 text-brand-green" />
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 text-brand-blue dark:text-white relative transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue dark:text-white"
          >
            Our Global Alignment
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
          >
            We don't just train; we transform. Our programs are strategically designed to solve the United Nations' Sustainable Development Goals, creating lasting impact across communities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sdgs.map((sdg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${sdg.color} p-8 sm:p-10 rounded-3xl flex flex-col border border-[#0a0a8a] shadow-xl hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 bg-white/5 group-hover:bg-white/10 transition-colors rounded-2xl flex items-center justify-center">
                  {sdg.icon}
                </div>
                <div className="text-brand-green font-bold text-2xl bg-brand-green/10 px-4 py-2 rounded-full">
                  SDG {sdg.num}
                </div>
              </div>
              <h3 className="text-white font-bold text-2xl sm:text-3xl mb-4">{sdg.title}</h3>
              <p className="text-slate-300 text-lg leading-relaxed flex-grow">
                {sdg.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
