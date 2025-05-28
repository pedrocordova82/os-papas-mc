import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo size="medium" />
            <p className="text-gray-300 mt-4">
              Os Papas Motorcycle Club, established in 2014. United by our passion for the road and brotherhood.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full transition-colors"
              >
                <Facebook size={20} className="text-primary" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full transition-colors"
              >
                <Instagram size={20} className="text-primary" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full transition-colors"
              >
                <Youtube size={20} className="text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/our-story" className="text-gray-300 hover:text-primary transition-colors">
                  Nossa História
                </NavLink>
              </li>
              <li>
                <NavLink to="/head-office" className="text-gray-300 hover:text-primary transition-colors">
                  Sedes
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className="text-gray-300 hover:text-primary transition-colors">
                  Contatos
                </NavLink>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-primary transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading mb-4">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mr-2 mt-1 shrink-0" />
                <span className="text-gray-300">123 Ride Street, Motorcycle City, MC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-2 shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary mr-2 shrink-0" />
                <a href="mailto:info@ospapas.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@ospapas.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-heading mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter to get updates on events and news.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-primary focus:outline-none"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-primary text-dark py-2 rounded-md font-semibold hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Os Papas Motorcycle Club. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;