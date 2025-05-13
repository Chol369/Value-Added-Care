import { useLocation } from 'wouter';
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { CONTACT_INFO, JOB_BENEFITS } from "@/lib/constants";

const Contact = () => {
  const [, navigate] = useLocation();

  return (
    <section id="contact" className="page-container min-h-screen py-16 animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">Let's Connect</h1>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            Whether you're looking for support services, career opportunities, or just have questions, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-6 text-[#6b2d90]">Get in Touch</h2>
            <p className="mb-8 text-neutral-dark">
              Let's work together for quality, compassionate care. Fill out the form below and one of our team members will get back to you within 24 hours.
            </p>
            
            <ContactForm />
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-neutral-light rounded-lg shadow-lg p-8 mb-8">
              <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-6 text-[#8dc63f]">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-[#6b2d90] bg-opacity-20 rounded-full flex items-center justify-center">
                      <i className="ri-map-pin-line text-xl text-[#6b2d90]"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-1">Office Location</h3>
                    <p className="text-neutral-dark">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-[#8dc63f] bg-opacity-20 rounded-full flex items-center justify-center">
                      <i className="ri-phone-line text-xl text-[#8dc63f]"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-neutral-dark">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-[#5e8db3] bg-opacity-20 rounded-full flex items-center justify-center">
                      <i className="ri-mail-line text-xl text-[#5e8db3]"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-1">Email</h3>
                    <p className="text-neutral-dark">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-[#6b2d90] bg-opacity-20 rounded-full flex items-center justify-center">
                      <i className="ri-time-line text-xl text-[#6b2d90]"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-1">Office Hours</h3>
                    <p className="text-neutral-dark">{CONTACT_INFO.hours}</p>
                    <p className="text-neutral-dark">{CONTACT_INFO.hoursNote}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* For Job Seekers */}
            <div className="bg-[#6b2d90] rounded-lg shadow-lg p-8">
              <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-6 text-white">Join Our Team</h2>
              <p className="text-white mb-6">
                We're always looking for compassionate, skilled individuals to join our team of support workers. If you're passionate about making a difference in people's lives, we'd love to hear from you.
              </p>
              <div className="space-y-4">
                {JOB_BENEFITS.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <i className="ri-check-line text-[#8dc63f] text-xl mr-2"></i>
                    <span className="text-white">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button
                  onClick={() => {
                    navigate('/contact');
                    // Scroll to contact form
                    setTimeout(() => {
                      const contactForm = document.querySelector('#contact form');
                      if (contactForm) {
                        contactForm.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="bg-white text-[#6b2d90] font-montserrat px-6 py-2 rounded-full font-medium inline-block hover:bg-neutral-light transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact page styles are in index.css */}
    </section>
  );
};

export default Contact;
