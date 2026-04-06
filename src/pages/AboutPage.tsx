import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';

export function AboutPage() {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <About />
      <Testimonials />
    </div>
  );
}
