import { useLocation } from 'wouter';
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

const Services = () => {
  const [, navigate] = useLocation();

  return (
    <main id="main-content" tabIndex={-1}>
      <section id="services" className="page-container min-h-screen py-16 animate-fadeIn" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 id="services-heading" className="font-montserrat font-bold text-4xl md:text-5xl mb-4">Our Services</h1>
            <p className="text-lg text-neutral-dark max-w-3xl mx-auto mb-8">
              We offer a comprehensive range of NDIS-registered services to support individuals with diverse needs across all aspects of life.
            </p>
            <div className="relative rounded-xl overflow-hidden max-w-4xl mx-auto shadow-xl mb-10 h-[16.5rem] md:h-[19.8rem]">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60" 
                alt="Care professional assisting person with disability" 
                className="w-full h-full object-cover"
                loading="eager"
                width="1200"
                height="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white text-xl font-montserrat font-medium p-6">Empowering independence through personalized support</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {SERVICES.map((service, index) => (
              <article 
                key={index} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden service-card ${service.fullWidth ? 'md:col-span-2' : ''}`}
                aria-labelledby={`service-title-${index}`}
              >
                <div className="p-8">
                  <header className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${service.bgColor} bg-opacity-20 rounded-full flex items-center justify-center mr-4`} aria-hidden="true">
                      <i className={`${service.icon} text-2xl ${service.bgColor === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : service.bgColor === 'bg-[#8dc63f]' ? 'text-[#8dc63f]' : 'text-[#5e8db3]'}`}></i>
                    </div>
                    <h2 id={`service-title-${index}`} className="font-montserrat font-semibold text-2xl">{service.title}</h2>
                  </header>
                  <p className="text-neutral-dark mb-6">
                    {service.description}
                  </p>
                  <ul className={`mb-6 ${service.fullWidth ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-2'}`} aria-label={`${service.title} features`}>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <i className="ri-check-line text-[#8dc63f] text-xl mr-2 mt-1" aria-hidden="true"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => {
                      navigate('/contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-[#6b2d90] to-[#8dc63f] hover:from-[#5e2780] hover:to-[#7db52f] text-white px-6 py-2 rounded-full font-medium transition-all duration-300"
                    aria-label={`Enquire about ${service.title} service`}
                  >
                    Enquire Now
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-[#6b2d90] rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-montserrat font-bold text-2xl md:text-3xl text-white mb-4">Not sure which service you need?</h3>
                <p className="text-white mb-6">
                  Our team can help assess your needs and recommend the right supports for you or your loved one. Contact us for a free consultation.
                </p>
                <Button
                  onClick={() => {
                    navigate('/contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white text-[#6b2d90] font-montserrat px-8 py-3 rounded-full font-medium hover:bg-neutral-light transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
                  aria-label="Book free consultation"
                >
                  Book Your Free Consultation
                </Button>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                  alt="Support coordinator consulting with client" 
                  className="rounded-lg shadow-lg mx-auto max-h-80 object-cover w-full"
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;