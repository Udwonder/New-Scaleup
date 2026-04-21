import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DeepDive() {
  const projects = [
    {
      title: "Project Leap: 5,000 Websites Initiative",
      copy: <>A website is more than a URL; it's a gateway to the global market. Project Leap is our ambitious commitment to build and host 5,000 professional websites for small and medium business owners for <strong className="text-brand-green bg-brand-green/10 px-1 rounded">free</strong>, giving them the digital presence they deserve.</>,
      features: [
        "Free design cost",
        "E-commerce ready platforms",
        "Search Engine Optimization (SEO)",
        "Mobile-responsive design"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      metrics: [
        { label: "Average Load Time", value: "< 1.5s" },
        { label: "Mobile Optimization", value: "100%" },
        { label: "Avg. Conversion Increase", value: "45%" },
        { label: "Uptime Guarantee", value: "99.9%" }
      ]
    },
    {
      title: "Coding for Kids",
      copy: "We believe every child should speak the language of the future. Our curriculum focuses on Python, Web Development, and Logic, turning \"consumers of tech\" into \"creators of tech.\"",
      features: [
        "Python and Web Development fundamentals",
        "Logic and problem-solving exercises",
        "Interactive, project-based learning",
        "Guidance from experienced mentors"
      ],
      image: "https://i.imgur.com/fv03zS1.jpeg"
    },
    {
      title: "AI & Future Skills",
      copy: "From prompt engineering to core machine learning concepts, we equip professionals with AI skills that ensure they remain competitive and innovative in the age of automation.",
      features: [
        "Prompt engineering best practices",
        "Core machine learning concepts",
        "Workflow automation tools",
        "Career readiness for the AI era"
      ],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-brand-blue dark:text-white mb-4">Scale Your Impact</h1>
          <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={index % 2 !== 0 ? 'lg:order-1' : ''}
              >
                <h3 className="text-3xl font-bold text-brand-blue dark:text-white mb-6">{project.title}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {project.copy}
                </p>

                {project.features && (
                  <ul className="space-y-3 mb-8">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {project.metrics && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="text-2xl font-bold text-brand-green mb-1">{metric.value}</div>
                        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {project.title === "Project Leap: 5,000 Websites Initiative" && (
                  <div className="mt-8 flex gap-4">
                    <a 
                      href="https://forms.gle/GtF6PLJzcG1Sexq26" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block bg-brand-green text-brand-blue font-bold px-8 py-4 rounded-full hover:bg-[#6bc239] transition-colors"
                    >
                      Apply for a free website
                    </a>
                    <Link 
                      to="/projects/leap-portfolio"
                      className="inline-block bg-brand-blue text-white font-bold px-8 py-4 rounded-full hover:bg-[#0a0a8a] transition-colors"
                    >
                      View Portfolio
                    </Link>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
