import { useLocation } from 'wouter';
import { Logo } from "@/components/ui/logo";

const Footer = () => {
  const [, navigate] = useLocation();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const services = [
    { name: 'In-Home & Community Support', path: '/services' },
    { name: 'Personal Care Assistance', path: '/services' },
    { name: 'Respite & Companionship', path: '/services' },
    { name: 'Employment & Skills Development', path: '/services' },
    { name: 'Allied Health & Therapy Support', path: '/services' }
  ];

  return (
    <footer className="bg-[#6b2d90] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                window.scrollTo(0, 0);
              }}
              aria-label="Go to home page"
            >
              <Logo className="h-20 mb-4 bg-white p-2 rounded" />
            </a>
            <p className="mb-4">
              Dedicated to enhancing lives through compassionate, professional care services.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8dc63f] transition-colors">
                <i className="ri-facebook-fill text-xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8dc63f] transition-colors">
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#8dc63f] transition-colors">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a 
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.path);
                      window.scrollTo(0, 0);
                    }}
                    className="hover:text-[#8dc63f] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.path}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(service.path);
                      window.scrollTo(0, 0);
                    }}
                    className="hover:text-[#8dc63f] transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                <span>123 Care Avenue, Melbourne VIC 3000</span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line mr-2"></i>
                <span>(03) 1234 5678</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line mr-2"></i>
                <span>info@valueaddedcare.com.au</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <a 
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/contact');
                  window.scrollTo(0, 0);
                }}
                className="bg-[#8dc63f] text-white font-montserrat px-6 py-2 rounded-full font-medium inline-block hover:bg-opacity-90 transition-all duration-300"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Value Added Care. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="/privacy" onClick={(e) => { e.preventDefault(); }} className="text-sm hover:text-[#8dc63f] transition-colors">Privacy Policy</a>
            <a href="/terms" onClick={(e) => { e.preventDefault(); }} className="text-sm hover:text-[#8dc63f] transition-colors">Terms of Service</a>
            <a href="/accessibility" onClick={(e) => { e.preventDefault(); }} className="text-sm hover:text-[#8dc63f] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
