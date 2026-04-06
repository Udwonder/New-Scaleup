import { motion } from 'motion/react';

const partnerLogos = [
  "https://imgur.com/r27St9Z.png",
  "https://imgur.com/PSarp5f.png",
  "https://imgur.com/qued5Sa.png",
  "https://imgur.com/AMiRcHA.png",
  "https://imgur.com/n1DT031.png",
  "https://imgur.com/XAUoFTg.png",
  "https://imgur.com/5m2xQiC.png",
  "https://imgur.com/NcWSeoq.png",
  "https://imgur.com/KjCTu0G.png",
  "https://imgur.com/2V7f1Cf.png",
  "https://imgur.com/4JbyI23.png",
  "https://imgur.com/oW9okuH.png",
  "https://imgur.com/EUxqZ1i.png",
  "https://imgur.com/fncaoSj.png",
  "https://imgur.com/R8lPrZr.png"
];

export function StrategicPartners() {
  // Duplicate the array to create a seamless loop
  const duplicatedPartners = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-16 bg-white border-t border-slate-100 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
          Strategic Partners
        </h2>
      </div>
      
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-marquee hover:pause">
          {duplicatedPartners.map((url, index) => (
            <div 
              key={index} 
              className="mx-8 flex items-center justify-center w-32 h-20 md:w-40 md:h-24 transition-all duration-300 opacity-100"
            >
              <img 
                src={url}
                alt={`Partner ${index + 1}`}
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
