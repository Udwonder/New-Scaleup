import { motion } from 'motion/react';
import { Target, Eye, Users, Leaf, Zap, Rocket, Linkedin } from 'lucide-react';
import { Carousel } from './Carousel';

export function About() {
  const journeyImages = [
    "https://i.imgur.com/oMFyZ6B.jpeg",
    "https://i.imgur.com/cTOdH8l.jpeg"
  ];

  const teamMembers = [
    { name: "Enomfon Akpan", role: "Project Manager", image: "https://imgur.com/gGLga5c.png", linkedin: "https://www.linkedin.com/in/enomfon-akpan-a9552594/" },
    { name: "Enomfon Essien", role: "Operations Lead", image: "https://imgur.com/KMWjpMh.png", linkedin: "https://web.facebook.com/richnora.essien" },
    { name: "Jedidiah Gabriel", role: "Director of Engineering", image: "https://imgur.com/fo6hdGJ.png", linkedin: "https://www.linkedin.com/in/jedshock/" },
    { name: "Kpeta Toyo", role: "Business Development Lead", image: "https://imgur.com/hbJ21Y0.png", linkedin: "https://www.linkedin.com/in/kpeta-toyo-b9983673/" },
    { name: "Joshua Smooth", role: "Tech Lead", image: "https://imgur.com/rJToo6b.png", linkedin: "https://www.linkedin.com/in/smjosh/" },
    { name: "Priscila", role: "Legal Lead", image: "https://imgur.com/qRvS5MJ.png", linkedin: "https://www.linkedin.com/in/priscilla-yakubu-7448b5277/" },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-brand-blue dark:text-white mb-6">About Us</h1>
          <div className="w-24 h-1 bg-brand-green mx-auto rounded-full mb-12"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-6">
            At Scaleup Foundation, we empower individuals and communities by addressing critical skill gaps through targeted training and education. We equip people with the tools they need to thrive in today's evolving job market and foster economic empowerment.
          </p>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We are saddled with a responsibility at Scaleup Foundation to bridge the gap between potential and opportunity. We believe that everyone deserves the chance to develop their skills and contribute meaningfully to society, regardless of their background or circumstances.
          </p>
        </div>
        
        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-brand-blue dark:text-white text-center mb-16">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl text-center flex flex-col items-center border border-slate-200"
              >
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-300 dark:border-slate-700">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue dark:text-white mb-1">{member.name}</h3>
                <p className="text-brand-green font-medium mb-4">{member.role}</p>
                <a href={member.linkedin} className="text-brand-blue dark:text-white hover:text-brand-green transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="bg-slate-50 dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-16 h-16 bg-[#f2fceb] dark:bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6"
            >
              <Target className="w-8 h-8 text-brand-green" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold text-brand-blue dark:text-white mb-4"
            >
              Our Mission
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl font-semibold text-brand-green mb-4"
            >
              Bridging the Gap Between Ambition and Opportunity.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              Scaleup Foundation was born from a simple truth: talent is universal, but opportunity is not. We provide the tools, technology, and training necessary for individuals in underserved communities to thrive in a rapidly evolving world. By democratizing access to digital skills and resources, we empower the next generation of innovators to turn their local potential into global impact.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="bg-slate-50 dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-16 h-16 bg-[#f2fceb] dark:bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6"
            >
              <Eye className="w-8 h-8 text-brand-green" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold text-brand-blue dark:text-white mb-4"
            >
              Our Vision
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl font-semibold text-brand-green mb-4"
            >
              A Digitally Empowered Africa.
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              We envision a world where every young person, regardless of their background or geography, has the digital fluency to shape their own future.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-3">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-blue dark:text-white mb-6 leading-tight">
              Empowering the Next Generation of Leaders.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              What started as a grassroots initiative has grown into a global movement. We believe that by investing in human capital, we can solve some of the world's most pressing challenges. From building digital infrastructure for small businesses to mentoring aspiring tech professionals, our work is rooted in sustainable, long-term impact.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Carousel images={journeyImages} />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#f2fceb] dark:bg-brand-green/10 rounded-full -z-10"></div>
          </motion.div>
        </div>

        <div className="mt-24 bg-gradient-to-br from-brand-blue to-slate-900 p-12 rounded-3xl text-white">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Partner With Scaleup Foundation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <Users className="w-12 h-12 text-brand-green mb-6" />
              <h4 className="text-xl font-bold mb-4">A Unified Vision</h4>
              <p className="text-slate-200">We don't just collaborate; we align. Together, we bridge the digital divide, turning shared ambitions into tangible, life-changing opportunities for underserved communities.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <Leaf className="w-12 h-12 text-brand-green mb-6" />
              <h4 className="text-xl font-bold mb-4">Sustainable Impact</h4>
              <p className="text-slate-200">We focus on long-term, scalable solutions. Our partnerships are designed to create lasting change, ensuring that the impact of our work resonates for generations.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <Zap className="w-12 h-12 text-brand-green mb-6" />
              <h4 className="text-xl font-bold mb-4">Empowering Communities</h4>
              <p className="text-slate-200">We provide the essential digital tools and training that allow communities to take control of their own growth, prosperity, and digital future.</p>
            </div>
          </div>
          <div className="bg-white text-brand-blue p-10 rounded-2xl shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <Rocket className="w-10 h-10 text-brand-green" />
              <h4 className="text-3xl font-bold">Impact in Action: Project Leap</h4>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              Project Leap is more than an initiative, it's a catalyst. By providing robust digital infrastructure to hundreds of SMEs, we've turned local potential into global impact. Partnering with us means being part of this transformative journey, where your support directly translates into tangible business growth and digital empowerment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
