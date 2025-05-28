import { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Youtube, ChevronUp } from 'lucide-react';
import Logo from './Logo';
import Footer from './Footer';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        if (window.scrollY > 500) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating
    setIsMenuOpen(false);
    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <NavLink to="/" className="z-10">
            <Logo size={scrolled ? 'small' : 'medium'} />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `nav-link text-white hover:text-primary transition-colors ${isActive ? 'active' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/our-story" 
              className={({isActive}) => 
                `nav-link text-white hover:text-primary transition-colors ${isActive ? 'active' : ''}`
              }
            >
              Nossa História
            </NavLink>
            <NavLink 
              to="/head-office" 
              className={({isActive}) => 
                `nav-link text-white hover:text-primary transition-colors ${isActive ? 'active' : ''}`
              }
            >
              Sedes
            </NavLink>
            <NavLink 
              to="/contacts" 
              className={({isActive}) => 
                `nav-link text-white hover:text-primary transition-colors ${isActive ? 'active' : ''}`
              }
            >
              Contatos
            </NavLink>
          </nav>

          {/* Social Media Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <Youtube size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white z-10" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          <div 
            className={`fixed inset-0 bg-dark flex flex-col justify-center items-center transition-all duration-300 ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <nav className="flex flex-col items-center space-y-8">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/our-story" 
                className={({isActive}) => 
                  `text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
                }
              >
                Nossa História
              </NavLink>
              <NavLink 
                to="/head-office" 
                className={({isActive}) => 
                  `text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
                }
              >
                Sedes
              </NavLink>
              <NavLink 
                to="/contacts" 
                className={({isActive}) => 
                  `text-2xl text-white hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
                }
              >
                Contatos
              </NavLink>
            </nav>

            {/* Social Media - Mobile */}
            <div className="flex items-center space-x-6 mt-12">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-primary p-3 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="text-dark" size={24} />
      </button>
    </div>
  );
};

export default Layout;