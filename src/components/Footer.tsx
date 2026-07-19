import { Link } from 'react-router-dom';
import { Pill, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">MedNova</span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Your trusted neighborhood pharmacy committed to providing premium healthcare products and exceptional service since 2010.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/appointment" className="text-slate-400 hover:text-primary transition-colors">Book Appointment</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-slate-400">Prescription Medicines</li>
              <li className="text-slate-400">OTC Products</li>
              <li className="text-slate-400">Home Delivery</li>
              <li className="text-slate-400">Health Checkups</li>
              <li className="text-slate-400">Medical Equipment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">123 Health Avenue, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400 shrink-0" />
                <span className="text-slate-400">care@mednova.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MedNova Pharmacy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
