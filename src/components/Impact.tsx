import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { GraduationCap, Users, Globe2 } from 'lucide-react';
import { Skeleton } from './ui/Skeleton';

function AnimatedCounter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Impact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { 
      value: 30000,
      suffix: "+",
      label: "Business Owners Trained",
      icon: <GraduationCap className="w-10 h-10 text-brand-green" />
    },
    { 
      value: 3000,
      suffix: "+",
      label: "Entrepreneurs Mentored",
      icon: <Users className="w-10 h-10 text-brand-green" />
    },
    { 
      value: 60,
      suffix: "+",
      label: "Countries Impacted",
      icon: <Globe2 className="w-10 h-10 text-brand-green" />
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col items-center justify-center">
                <Skeleton className="w-20 h-20 rounded-full mb-6" />
                <Skeleton className="w-32 h-12 mb-4" />
                <Skeleton className="w-40 h-6" />
              </div>
            ))
          ) : (
            stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 bg-[#f2fceb] dark:bg-brand-green/10 rounded-full flex items-center justify-center mb-6">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-brand-blue dark:text-white mb-4 tracking-tighter">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
