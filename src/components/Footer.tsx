import { Phone, Mail, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <span className="block text-sm font-bold text-white leading-tight">Angela Mio</span>
                <span className="block text-xs text-sky-400 leading-tight tracking-wide uppercase font-medium">Kitchen Cleaning</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Specialist kitchen cleaning services for homes, new builds, and commercial kitchens across New Zealand.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNav(item.toLowerCase())}
                    className="text-sm text-gray-400 hover:text-sky-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+64275135099" className="flex items-center gap-2 text-sm text-gray-400 hover:text-sky-400 transition-colors">
                  <Phone size={14} />
                  027 513 5099
                </a>
              </li>
              <li>
                <a href="mailto:mio0318angela@icloud.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-sky-400 transition-colors">
                  <Mail size={14} />
                  mio0318angela@icloud.com
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">Based in New Zealand &bull; Available for residential &amp; commercial enquiries</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Angela Mio Cleaning Services. All rights reserved.</p>
          <p className="text-xs text-gray-600">Sole Trader &bull; New Zealand</p>
        </div>
      </div>
    </footer>
  );
}
