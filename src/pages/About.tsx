import { ChevronRight, GraduationCap, Globe as Globe2, ClipboardCheck, Heart } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

const VALUES = [
  {
    icon: ClipboardCheck,
    title: 'Systematic & Thorough',
    desc: 'Every clean follows a consistent method — nothing is left to chance. Angela works through a kitchen the same way each time, ensuring no surface or corner is overlooked.',
  },
  {
    icon: GraduationCap,
    title: 'Formally Trained in Hygiene',
    desc: 'Her NZMA Level 4 Baking qualification covered food safety, cross-contamination prevention, and sanitation standards used in professional food environments.',
  },
  {
    icon: Globe2,
    title: 'Shaped by Japanese Cleaning Culture',
    desc: 'Growing up in Japan, cleaning wasn\'t optional — it was daily school discipline. That ingrained habit of care and precision is at the core of how Angela approaches every job.',
  },
  {
    icon: Heart,
    title: 'Genuinely Invested in the Result',
    desc: 'Angela takes pride in the finished result, not just the time spent. She won\'t leave until a kitchen meets the standard she\'d expect in her own home.',
  },
];

export default function About({ onNavigate }: AboutProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sky-600 text-xs font-semibold uppercase tracking-widest">About</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-5">
            The Person Behind the Clean
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Angela Mio Penn is not a general cleaner who happens to clean kitchens. She is a kitchen specialist — trained in food hygiene, shaped by discipline, and committed to an exacting standard.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Portrait placeholder */}
            <div className="sticky top-24">
              <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-[3/4] flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center px-8">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-500">Portrait Photo</p>
                  <p className="text-xs text-gray-400 mt-1">Upload your professional photo here</p>
                </div>
              </div>
              <div className="mt-6 bg-sky-50 border border-sky-100 rounded-xl p-5">
                <h4 className="text-sm font-semibold text-sky-900 mb-3">Credentials at a Glance</h4>
                <ul className="space-y-2">
                  {[
                    'NZMA Level 4 — Baking & Pastry',
                    'Food Safety & Sanitation Trained',
                    'Commercial Kitchen Experience',
                    'Residential Specialist',
                    'New Build Handover Experience',
                  ].map((item) => (
                    <li key={item} className="text-xs text-sky-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Story */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">A Foundation Built in Japan</h2>
                <p>
                  Angela Mio Penn grew up in Japan, where cleaning isn't considered a chore — it's a structured part of daily life. As a school student, cleaning classrooms and common areas was a routine discipline: methodical, thorough, and taken seriously. This wasn't occasional tidying. It was a daily practice that instilled lasting habits of precision and care.
                </p>
                <p className="mt-4">
                  That foundation has shaped the way Angela cleans to this day. She doesn't rush through tasks or cut corners — she works through a kitchen systematically, the same way every time, because that consistency is what produces a reliably excellent result.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Trained in Food Safety & Sanitation</h2>
                <p>
                  After arriving in New Zealand, Angela completed a Level 4 NZMA Baking qualification — a professional culinary course that goes well beyond learning to bake. It covers food safety legislation, cross-contamination prevention, correct sanitation procedures for food-contact surfaces, and hygiene standards required for commercial food environments.
                </p>
                <p className="mt-4">
                  This training is what separates Angela from general cleaning services. She doesn't just clean kitchens to look clean — she cleans them to be safe. For café owners, bakeries, and food businesses, that distinction matters enormously.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Kitchens — and Why Cleaning?</h2>
                <p>
                  Angela has spent significant time working in and around kitchens — in homes, in baking environments, and in professional food preparation settings. She understands the work that happens there, and she understands what it takes to keep those spaces truly clean.
                </p>
                <p className="mt-4">
                  Starting Angela Mio Cleaning Services was a natural extension of skills she had already developed and honed over years. She brings the same high standard to a residential kitchen in a family home as she does to a commercial bakery — because both deserve the same level of care.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">A Service You Can Rely On</h2>
                <p>
                  As a sole trader, Angela personally delivers every service. There are no subcontractors, no variable quality — when you book Angela Mio Cleaning Services, you get Angela. She is punctual, communicates clearly, and won't leave until the job meets her standard.
                </p>
                <p className="mt-4">
                  For homeowners wanting a genuinely deep clean, developers needing a flawless handover, or food businesses requiring hygiene they can depend on — Angela Mio Cleaning Services is built for exactly that.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleNav('contact')}
                  className="inline-flex items-center gap-2 bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-sky-700 transition-all duration-200 shadow-md hover:-translate-y-0.5"
                >
                  Book a Clean
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sky-600 text-xs font-semibold uppercase tracking-widest">What Drives the Work</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">The Values Behind Every Clean</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-sky-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
