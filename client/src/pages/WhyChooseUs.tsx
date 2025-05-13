import { useLocation } from 'wouter';
import { Button } from "@/components/ui/button";
import { DIFFERENTIATORS, QUALITY_ASSURANCE, WHY_CHOOSE_US_TESTIMONIALS } from "@/lib/constants";
import { FaUserCheck, FaShieldAlt, FaComments } from 'react-icons/fa';
import { FaCalendarCheck, FaHeadset, FaCertificate, FaUserCircle, FaQuoteLeft } from 'react-icons/fa';

const WhyChooseUs = () => {
  const [, navigate] = useLocation();

  return (
    <section id="why-choose-us" className="page-container min-h-screen py-16 bg-neutral-light animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">Why Choose Value Added Care</h1>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            Discover what sets us apart and why families and individuals trust us with their care needs.
          </p>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Support worker and participant smiling together" 
              className="rounded-lg shadow-xl w-full h-auto object-cover mb-8 lg:mb-0"
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-6 text-[#6b2d90]">Our Commitment to Excellence</h2>
            
            <div className="space-y-6">
              {DIFFERENTIATORS.map((item, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className={`w-12 h-12 ${item.bgColor} bg-opacity-20 rounded-full flex items-center justify-center`}>
                      {item.title === "Personalized Matching" && (
                        <FaUserCheck className={`text-2xl ${item.bgColor === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : item.bgColor === 'bg-[#8dc63f]' ? 'text-[#8dc63f]' : 'text-[#5e8db3]'}`} />
                      )}
                      {item.title === "Ethical Care Standards" && (
                        <FaShieldAlt className={`text-2xl ${item.bgColor === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : item.bgColor === 'bg-[#8dc63f]' ? 'text-[#8dc63f]' : 'text-[#5e8db3]'}`} />
                      )}
                      {item.title === "Flexible Support Options" && (
                        <FaCalendarCheck className={`text-2xl ${item.bgColor === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : item.bgColor === 'bg-[#8dc63f]' ? 'text-[#8dc63f]' : 'text-[#5e8db3]'}`} />
                      )}
                      {item.title === "Dedicated Support Team" && (
                        <FaHeadset className={`text-2xl ${item.bgColor === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : item.bgColor === 'bg-[#8dc63f]' ? 'text-[#8dc63f]' : 'text-[#5e8db3]'}`} />
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-neutral-dark">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-10 text-center">Our Quality Assurance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {QUALITY_ASSURANCE.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 service-card">
              <div className={`w-16 h-16 mx-auto mb-6 ${item.bgColor} bg-opacity-20 rounded-full flex items-center justify-center`}>
                {item.title === "NDIS Registered Provider" && (
                  <FaCertificate className={`text-3xl ${item.bgColor === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : item.bgColor === 'bg-[#8dc63f]' ? 'text-[#8dc63f]' : 'text-[#5e8db3]'}`} />
                )}
                {item.title === "Thorough Staff Vetting" && (
                  <FaUserCheck className={`text-3xl ${item.bgColor === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : item.bgColor === 'bg-[#8dc63f]' ? 'text-[#8dc63f]' : 'text-[#5e8db3]'}`} />
                )}
                {item.title === "Continuous Improvement" && (
                  <FaComments className={`text-3xl ${item.bgColor === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : item.bgColor === 'bg-[#8dc63f]' ? 'text-[#8dc63f]' : 'text-[#5e8db3]'}`} />
                )}
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3 text-center">{item.title}</h3>
              <p className="text-neutral-dark text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-10 text-center">What Families Say About Us</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE_US_TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="flex flex-col">
                <div className="mb-4">
                  <FaQuoteLeft className={`text-4xl ${testimonial.iconBg === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : 'text-[#8dc63f]'}`} />
                </div>
                <p className="text-neutral-dark italic mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="mr-4">
                    <div className={`w-12 h-12 ${testimonial.iconBg} bg-opacity-20 rounded-full flex items-center justify-center`}>
                      <FaUserCircle className={`text-xl ${testimonial.iconBg === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : 'text-[#8dc63f]'}`} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#6b2d90] to-[#8dc63f] rounded-lg shadow-lg p-8 md:p-12 text-white text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">Ready to Experience the Difference?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Let's work together to create a care plan that perfectly suits your unique needs and empowers you to live your best life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white text-[#6b2d90] font-montserrat px-8 py-3 rounded-full font-medium hover:bg-neutral-light transition-all duration-300 text-center transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Us Today
            </Button>
            <Button
              onClick={() => {
                navigate('/services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="custom-outline-button border-2 border-white text-white font-montserrat px-8 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-center"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* WhyChooseUs page styles are in index.css */}
    </section>
  );
};

export default WhyChooseUs;
