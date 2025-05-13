import { Link } from "wouter";
import { SERVICES } from "@/lib/constants";

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-montserrat font-bold text-4xl text-vac-purple mb-4">Our Services</h2>
        <p className="text-xl max-w-3xl mx-auto">Comprehensive support tailored to your unique needs and preferences.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Cards */}
        {SERVICES.map((service) => (
          <div key={service.id} className="bg-vac-light p-8 rounded-lg custom-shadow service-card transition duration-300">
            <div className={`w-16 h-16 bg-vac-${service.color} rounded-full flex items-center justify-center mb-6`}>
              <i className={`fas fa-${service.icon} text-2xl text-white`}></i>
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-4">{service.title}</h3>
            <p className="mb-6">{service.description}</p>
            <Link href="/contact" className={`text-vac-${service.color} font-semibold inline-flex items-center`}>
              Learn More <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        ))}
        
        {/* Book a Consultation Card */}
        <div className="bg-vac-purple p-8 rounded-lg custom-shadow service-card transition duration-300">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
            <i className="fas fa-calendar-check text-2xl text-vac-purple"></i>
          </div>
          <h3 className="font-montserrat font-semibold text-xl mb-4 text-white">Book a Consultation</h3>
          <p className="mb-6 text-white">Not sure which service is right for you? Contact us for a personalized consultation to discuss your specific needs.</p>
          <Link href="/contact" className="bg-white text-vac-purple font-semibold px-6 py-2 rounded-full inline-block hover:bg-opacity-90 transition duration-300">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
