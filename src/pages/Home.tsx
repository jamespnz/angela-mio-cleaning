import { ChevronRight, ShieldCheck, Star, Clock, CheckCircle2 } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const TRUST_ITEMS = [
  { icon: ShieldCheck, title: 'Food-Safe Certified', desc: 'NZMA Level 4 sanitation & hygiene training' },
  { icon: Star, title: 'Detail-Oriented', desc: 'Trained in structured Japanese cleaning discipline' },
  { icon: Clock, title: 'Reliable & On-Time', desc: 'Consistent, professional service every visit' },
];

const SERVICES_PREVIEW = [
  {
    title: 'Residential Deep Clean',
    desc: 'Thorough kitchen cleaning for existing homes — benchtops, appliances, cabinets, and more.',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Morning After Party Clean',
    desc: 'Wake up to a spotless kitchen. Angela restores and sanitises your kitchen the morning after any gathering — discreet, efficient, and available at short notice.',
    image: 'https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=800',
    badge: 'Popular',
  },
  {
    title: 'New Build Handover',
    desc: 'Spotless, move-in ready kitchens for property developers and new home owners.',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Commercial & Bakery',
    desc: 'Compliance-ready sanitation for cafes, bakeries, and commercial kitchen environments.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/60 to-gray-900/20" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <span className="inline-block text-sky-400 text-xs font-semibold uppercase tracking-widest mb-4 border border-sky-400/40 rounded-full px-3 py-1">
              Specialist Kitchen Cleaning — New Zealand
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Kitchens Cleaned to a{' '}
              <span className="text-sky-400">Higher Standard</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              From family homes to commercial bakeries, Angela Mio Cleaning Services brings formal sanitation training and meticulous attention to detail to every kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center justify-center gap-2 bg-sky-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-sky-700 transition-all duration-200 shadow-lg hover:shadow-sky-600/30 hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ChevronRight size={18} />
              </button>
              <button
                onClick={() => handleNav('services')}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-semibold px-6 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-200"
              >
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {TRUST_ITEMS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center">
                  <Icon size={20} className="text-sky-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sky-600 text-xs font-semibold uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Cleaning Services That Deliver Results</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Tailored kitchen cleaning solutions for residential, new build, and commercial clients throughout New Zealand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_PREVIEW.map(({ title, desc, image, badge }) => (
              <div key={title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group relative">
                {badge && (
                  <span className="absolute top-3 left-3 z-10 bg-sky-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {badge}
                  </span>
                )}
                <div className="h-44 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => handleNav('services')}
              className="inline-flex items-center gap-2 text-sky-600 font-semibold text-sm hover:text-sky-700 transition-colors group"
            >
              See all services
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Angela */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sky-600 text-xs font-semibold uppercase tracking-widest">Why Choose Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Cleaning with Purpose, <br />Training, and Precision
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Angela Mio Penn brings a rare combination of formal culinary sanitation training and a deeply ingrained work ethic shaped by years of structured daily cleaning in Japan. This isn't just tidying — it's systematic, food-safe kitchen hygiene.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'NZMA Level 4 Baking qualification including sanitation & food hygiene',
                  'Hands-on experience in high-standard kitchen environments',
                  'Understands the compliance needs of commercial food businesses',
                  'Reliable, punctual, and fully equipped for any kitchen size',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={17} className="text-sky-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleNav('about')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group"
              >
                Read Angela's story
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3692634/pexels-photo-3692634.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Clean professional kitchen"
                className="rounded-2xl w-full h-96 object-cover shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-sky-600 text-white rounded-2xl px-5 py-4 shadow-lg">
                <p className="text-2xl font-bold leading-none">100%</p>
                <p className="text-xs text-sky-100 mt-1">Food-Safe Focused</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-sky-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready for a Cleaner Kitchen?</h2>
          <p className="text-sky-100 text-lg mb-8 max-w-xl mx-auto">
            Whether you're a homeowner, builder, or cafe owner — get in touch for a no-obligation quote today.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 bg-white text-sky-700 font-bold px-8 py-4 rounded-xl hover:bg-sky-50 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Contact Angela Now
            <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
