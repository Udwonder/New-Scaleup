import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Globe, Code2, Cpu, Users } from 'lucide-react';
import { Skeleton } from './ui/Skeleton';

export function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      icon: <Globe className="w-8 h-8 text-brand-green" />,
      title: "Project Leap",
      description: <>Building 5,000 <strong className="text-brand-green bg-brand-green/10 px-1 rounded">free</strong> websites for business owners to ensure no SME is left behind in the digital economy.</>
    },
    {
      icon: <Code2 className="w-8 h-8 text-brand-green" />,
      title: "Coding for Kids",
      description: "Nurturing young minds with the logic and creativity of code to prepare them for the jobs of tomorrow."
    },
    {
      icon: <Cpu className="w-8 h-8 text-brand-green" />,
      title: "Core AI Skills",
      description: "Demystifying Artificial Intelligence through basic and advanced training programs for a future-ready workforce."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-green" />,
      title: "Global Mentorship",
      description: "Free, world-class business mentorship connecting local talent with global industry veterans."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-brand-blue dark:text-white mb-4"
          >
            Our Core Projects
          </motion.h2>
          <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <Skeleton className="w-16 h-16 rounded-2xl mb-6" />
                <Skeleton className="w-3/4 h-8 mb-4" />
                <Skeleton className="w-full h-20" />
              </div>
            ))
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-md dark:shadow-none transition-shadow border border-slate-100 dark:border-slate-800"
              >
                <div className="w-16 h-16 bg-[#f2fceb] dark:bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-blue dark:text-white mb-4">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
