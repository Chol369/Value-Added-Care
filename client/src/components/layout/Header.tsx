import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const Header = () => {
  const [location, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`} role="banner">
      {/* Skip navigation link for keyboard and screen reader users */}
      <a 
        href="#main-content" 
        className="skip-navigation focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#6b2d90] focus:font-bold focus:rounded-md focus:shadow-md sr-only"
      >
        Skip to main content
      </a>

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#6b2d90] focus:ring-offset-2 rounded-md"
          aria-label="Value Added Care - Back to home page"
        >
          <Logo className="h-14" alt="Value Added Care logo" />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <a 
              key={item.path}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.path);
                window.scrollTo(0, 0);
              }}
              className={`nav-link font-montserrat font-medium text-neutral-dark hover:text-primary-purple focus:outline-none focus:ring-2 focus:ring-[#6b2d90] focus:ring-offset-2 rounded-md p-2 ${location === item.path ? 'active font-semibold' : ''}`}
              aria-current={location === item.path ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button
            onClick={() => {
              navigate('/contact');
              window.scrollTo(0, 0);
            }}
            className="bg-gradient-to-r from-[#6b2d90] to-[#8dc63f] hover:from-[#5e2780] hover:to-[#7db52f] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            Book Consultation
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-dark focus:outline-none focus:ring-2 focus:ring-[#6b2d90] focus:ring-offset-2 p-2 rounded-md"
          onClick={() => setMobileMenuOpen(true)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Open menu"
        >
          <i className="ri-menu-line text-2xl" aria-hidden="true"></i>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        id="mobile-menu"
        className={`fixed top-0 left-0 bottom-0 w-4/5 bg-white shadow-lg z-50 p-6 flex flex-col transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-hidden={!mobileMenuOpen}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center mb-8">
          <Logo className="h-12" alt="Value Added Care logo" />
          <button 
            onClick={closeMobileMenu} 
            className="text-neutral-dark focus:outline-none focus:ring-2 focus:ring-[#6b2d90] p-2 rounded-md"
            aria-label="Close menu"
          >
            <i className="ri-close-line text-2xl" aria-hidden="true"></i>
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path);
                  closeMobileMenu();
                  window.scrollTo(0, 0);
                }}
                className="font-montserrat font-medium text-neutral-dark py-2 border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#6b2d90] focus:ring-offset-2 rounded-md"
                aria-current={location === item.path ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <div className="mt-auto">
          <Button
            onClick={() => {
              navigate('/contact');
              closeMobileMenu();
              window.scrollTo(0, 0);
            }}
            className="bg-gradient-to-r from-[#6b2d90] to-[#8dc63f] hover:from-[#5e2780] hover:to-[#7db52f] text-white px-6 py-2 rounded-full font-medium block text-center w-full"
          >
            Book Consultation
          </Button>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Navigation link styles moved to index.css */}
    </header>
  );
};

export default Header;
