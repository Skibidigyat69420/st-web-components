import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/philosophy' },
      { label: 'Our Team', path: '/philosophy#team' },
      { label: 'Careers', path: '#' },
      { label: 'Contact', path: '#' },
    ],
    research: [
      { label: 'Thesis Notes', path: '/thesis-notes' },
      { label: 'Mutual Funds', path: '/thesis-notes#mutual-funds' },
      { label: 'PMS Analysis', path: '/thesis-notes#pms' },
      { label: 'AIF Research', path: '/thesis-notes#aif' },
    ],
    services: [
      { label: 'Wealth Management', path: '/services' },
      { label: 'Research Access', path: '/services' },
      { label: 'Portfolio Services', path: '/services' },
      { label: 'Fee Structure', path: '/services#fees' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
      { label: 'Disclosures', path: '#' },
      { label: 'SEBI Registration', path: '#' },
    ],
  };

  return (
    <footer className="bg-near-black text-white">
      {/* Main Footer */}
      <div className="container-brand py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="4" fill="#326891" />
                <path
                  d="M8 20L12 14L16 18L20 10L24 16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="8" cy="20" r="2" fill="white" />
                <circle cx="12" cy="14" r="2" fill="white" />
                <circle cx="16" cy="18" r="2" fill="white" />
                <circle cx="20" cy="10" r="2" fill="white" />
                <circle cx="24" cy="16" r="2" fill="white" />
              </svg>
              <span className="text-xl font-semibold">
                Sound<span className="text-navy">Thesis</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Democratized financial research and accessible wealth management. No minimum investment barriers.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-navy transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-navy transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Research
            </h4>
            <ul className="space-y-3">
              {footerLinks.research.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-navy mt-1 flex-shrink-0" />
                <a
                  href="mailto:research@soundthesis.com"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  research@soundthesis.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-navy mt-1 flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-navy mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-brand py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              {currentYear} SoundThesis. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-gray-500 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-black/50 py-4">
        <div className="container-brand">
          <p className="text-gray-600 text-xs text-center">
            Disclaimer: SoundThesis operates on a distribution basis. All research is for informational 
            purposes only and does not constitute investment advice. Past performance is not indicative 
            of future results. Please read all scheme-related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
