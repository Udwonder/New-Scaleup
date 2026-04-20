import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const websites = [
  { name: "Scaleup Foundation", url: "https://www.scaleupfoundation.org/" },
  { name: "EFG Concept", url: "https://www.efgconcept.com/" },
  { name: "HFA Initiative", url: "https://www.hfainitiative.org/" },
  { name: "Dynamic Service Timer", url: "https://dynamic-service-timer-906752647479.us-west1.run.app/" },
];

export function LeapPortfolioPage() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-brand-blue dark:text-white mb-6">Project Leap Portfolio</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A showcase of some of the professional websites we've built for small and medium enterprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((site, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-4">{site.name}</h3>
              <a 
                href={site.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-brand-green font-semibold hover:underline"
              >
                Visit Website <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
