import { useState } from 'react';
import { Phone, Mail, MessageSquare, CheckCircle2, ChevronRight } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

const SERVICE_OPTIONS = [
  'Residential Kitchen Deep Clean',
  'Morning After Party Clean',
  'New Build / Handover Clean',
  'Commercial Kitchen Sanitation',
  'Bakery Kitchen Cleaning',
  'Not sure — please advise',
];

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Your name is required';
    if (!form.email.trim()) newErrors.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Please include a brief message';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormState('submitting');

    const body = new URLSearchParams({
      'form-name': 'contact',
      name: form.name,
      email: form.email,
      phone: form.phone,
      serviceType: form.serviceType,
      message: form.message,
    });

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setFormState(res.ok ? 'success' : 'error');
    } catch {
      setFormState('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sky-600 text-xs font-semibold uppercase tracking-widest">Contact</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3 mb-5">Get a Free Quote</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Tell Angela about your kitchen and what you need — she'll get back to you promptly with a straightforward, no-obligation quote.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Portrait placeholder */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 aspect-square flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-14 h-14 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-500">Angela Mio Penn</p>
                  <p className="text-xs text-gray-400 mt-0.5">Upload portrait photo here</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-5">Reach Angela Directly</h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="tel:+64275135099"
                      className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-sky-300 hover:bg-sky-50 transition-all group"
                    >
                      <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-200 transition-colors">
                        <Phone size={18} className="text-sky-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Phone</p>
                        <p className="text-sm font-semibold text-gray-800">027 513 5099</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:mio0318angela@icloud.com"
                      className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-sky-300 hover:bg-sky-50 transition-all group"
                    >
                      <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-200 transition-colors">
                        <Mail size={18} className="text-sky-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</p>
                        <p className="text-sm font-semibold text-gray-800">mio0318angela@icloud.com</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200">
                      <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MessageSquare size={18} className="text-sky-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Response Time</p>
                        <p className="text-sm font-semibold text-gray-800">Within 24 hours</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Service Area</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Angela is based in New Zealand and available for residential and commercial enquiries. Contact to confirm availability in your area.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {formState === 'success' ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center py-16 px-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} className="text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h2>
                    <p className="text-gray-500 max-w-sm mx-auto">
                      Thank you for getting in touch. Angela will review your enquiry and respond within 24 hours.
                    </p>
                  </div>
                </div>
              ) : formState === 'error' ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center py-16 px-8">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail size={32} className="text-red-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Something went wrong</h2>
                    <p className="text-gray-500 max-w-sm mx-auto mb-6">
                      Your message couldn't be sent. Please try emailing Angela directly.
                    </p>
                    <a
                      href="mailto:mio0318angela@icloud.com"
                      className="inline-flex items-center gap-2 bg-sky-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-sky-700 transition-colors"
                    >
                      <Mail size={16} />
                      mio0318angela@icloud.com
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  name="contact"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5" htmlFor="name">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="e.g. 021 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5" htmlFor="email">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5" htmlFor="serviceType">
                      Service Required
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={form.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors text-gray-700"
                    >
                      <option value="">Select a service...</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5" htmlFor="message">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell Angela about your kitchen, its size, and what you need cleaned. Any extra detail helps her give you an accurate quote."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none ${
                        errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-sky-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-sky-700 transition-all duration-200 shadow-md hover:shadow-sky-600/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <ChevronRight size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    No spam, no hard sell. Just a prompt, professional response.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
