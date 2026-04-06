import { Facebook, Linkedin, Instagram, Twitter, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const sections = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Donate', href: '/donate' },
  ];

  return (
    <footer className="bg-[#020230] text-slate-400 py-12 border-t border-[#04045e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="text-center md:text-left">
            <Link to="/" className="mb-4 inline-block">
              <img 
                src="https://i.imgur.com/xrmdocL.png" 
                alt="Scaleup Foundation" 
                className="h-20 w-auto"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </Link>
            <p className="text-sm">
              Empowering communities through education and innovation.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-4">Sections</h4>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.name}>
                  <Link to={section.href} className="text-sm hover:text-brand-green transition-colors">
                    {section.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-sm mb-4 flex items-start">
              <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0 text-brand-green" />
              <span>
                25 Yakubu Gowon Crescent,<br />
                Asokoro, Abuja, Nigeria.
              </span>
            </p>
            <a href="https://share.google/PG0s3cVNsmnXhsa9I" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm hover:text-brand-green transition-colors">
              <MapPin size={16} className="mr-2" />
              Google Business Profile
            </a>
          </div>

          <div className="flex justify-center md:justify-end space-x-6 items-start">
            <a href="https://web.facebook.com/profile.php?id=61560600090403" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
              <span className="sr-only">Facebook</span>
              <Facebook size={20} />
            </a>
            <a href="https://www.linkedin.com/company/scaleupfoundation1/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/scaleup.foundation/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram size={20} />
            </a>
            <a href="https://x.com/Scaleupfound" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter size={20} />
            </a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-[#0a0a8a] text-center text-sm text-slate-500">
          <p>Built with ❤️ by <a href="https://www.scaleupfoundation.org/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:text-brand-green transition-colors">Scaleup Foundation</a></p>
        </div>
      </div>
    </footer>
  );
}
