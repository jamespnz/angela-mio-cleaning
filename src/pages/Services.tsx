import { ChevronRight, Home, Building2, UtensilsCrossed, ChefHat, PartyPopper, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const SERVICES = [
  {
    icon: Home,
    title: 'Residential Kitchen Deep Clean',
    tagline: 'For homeowners who want genuinely clean kitchens',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=900',
    description:
      'A thorough, systematic clean of your entire kitchen — not just the visible surfaces. Angela works through every area with care, using food-safe products that are effective without leaving harsh chemical residues.',
    includes: [
      'Oven, stovetop, and rangehood degreasing',
      'Benchtop and splashback sanitisation',
      'Inside and outside cabinet wipe-down',
      'Sink, tap, and drainage cleaning',
      'Refrigerator exterior and handles',
      'Microwave interior and exterior',
      'Floor cleaning and detailing',
    ],
    ideal: 'Homeowners, rental properties, pre-sale or post-tenancy clean',
  },
  {
    icon: Building2,
    title: 'New Build & Handover Clean',
    tagline: 'Move-in ready kitchens for developers and buyers',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=900',
    description:
      'New builds often leave behind construction dust, adhesive residue, and installation grime. Angela delivers a detailed handover clean that ensures kitchens are immaculate for new owners — a service that reflects positively on every builder and developer.',
    includes: [
      'Removal of construction dust from all surfaces',
      'Adhesive and grout residue removal',
      'Cabinet interiors — dust and debris removal',
      'Appliance sanitisation before first use',
      'Window sill and frame wipe-down',
      'Full floor detail clean',
      'Final inspection standard finish',
    ],
    ideal: 'Property developers, builders, new homeowners before move-in',
  },
  {
    icon: UtensilsCrossed,
    title: 'Commercial Kitchen Sanitation',
    tagline: 'Hygiene compliance for food service businesses',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=900',
    description:
      'Commercial kitchens operate under strict food safety regulations. Angela brings specialist hygiene knowledge — including an understanding of cross-contamination risk, food-contact surface standards, and the cleaning routines used in professional food environments.',
    includes: [
      'Grease trap surrounds and hood filter cleaning',
      'Stainless steel sanitisation to food-safe standard',
      'Prep surface deep-clean and disinfection',
      'Floor drains and tile grouting',
      'Cold room and storage area cleaning',
      'End-of-service or periodic scheduled cleans',
    ],
    ideal: 'Cafes, restaurants, food preparation businesses',
  },
  {
    icon: PartyPopper,
    title: 'Morning After Party Clean',
    tagline: 'Back to normal before the day gets going',
    image: 'https://images.pexels.com/photos/5824901/pexels-photo-5824901.jpeg?auto=compress&cs=tinysrgb&w=900',
    description:
      'Hosting a party is fun — waking up to a wrecked kitchen is not. Angela offers a dedicated morning-after service that gets your kitchen fully restored, sanitised, and smelling clean again. Discreet, efficient, and available with short notice for post-event bookings.',
    includes: [
      'Removal of all food debris and spills',
      'Bench, stovetop, and oven clean-down',
      'Sink, drain, and tap sanitisation',
      'Disposal of waste and recycling sorting',
      'Floor sweep, mop, and detail clean',
      'Fridge wipe-down and leftover tidying',
      'Full surface disinfection — odour-free finish',
    ],
    ideal: 'Homeowners after dinner parties, birthdays, celebrations, or holiday gatherings',
  },
  {
    icon: ChefHat,
    title: 'Bakery & Pastry Kitchen Cleaning',
    tagline: 'Specialised cleaning for flour-heavy environments',
    image: 'https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&w=900',
    description:
      'Bakery environments have unique cleaning challenges — airborne flour, sticky dough residue, and high-frequency oven use demand a targeted approach. With her NZMA baking background, Angela understands these environments from the inside, making her uniquely qualified to clean them properly.',
    includes: [
      'Flour dust removal from all surfaces and equipment',
      'Proofing cabinet and dough bowl cleaning',
      'Commercial oven rack and cavity degreasing',
      'Benchtop and rolling surface sanitisation',
      'Extraction and ventilation cleaning',
      'Food-safe disinfection of all contact surfaces',
    ],
    ideal: 'Bakeries, patisseries, home bakers turning commercial',
  },
];

export default function Services({ onNavigate }: ServicesProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sky-400 text-xs font-semibold uppercase tracking-widest">Services</span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-5">Kitchen Cleaning, Done Right</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Every service is delivered with formal hygiene training and hands-on expertise. No shortcuts, no missed corners — just thorough, reliable cleaning you can trust.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map(({ icon: Icon, title, tagline, image, description, includes, ideal }, idx) => (
            <div
              key={title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <img
                  src={image}
                  alt={title}
                  className="rounded-2xl w-full h-80 object-cover shadow-md"
                />
              </div>
              <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-sky-600" />
                  </div>
                  <span className="text-xs text-sky-600 font-semibold uppercase tracking-wide">{tagline}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{description}</p>
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">What's included</p>
                  <ul className="space-y-2">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={16} className="text-sky-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-gray-500 bg-gray-100 rounded-lg px-3 py-2 inline-block">
                  <span className="font-semibold text-gray-700">Ideal for: </span>{ideal}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-gray-500 mb-8">
            Get in touch and Angela will help you figure out exactly what your kitchen needs — no obligation, no pressure.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 bg-sky-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-sky-700 transition-all duration-200 shadow-md hover:shadow-sky-600/30 hover:-translate-y-0.5"
          >
            Get a Free Quote
            <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
