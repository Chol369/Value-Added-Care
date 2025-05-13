import { DIFFERENTIATORS, TESTIMONIALS } from "@/lib/constants";

const WhyChooseUsSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-montserrat font-bold text-4xl text-vac-purple mb-4">Why Choose Us</h2>
        <p className="text-xl max-w-3xl mx-auto">Discover what sets Value Added Care apart in providing exceptional support services.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          {DIFFERENTIATORS.map((diff) => (
            <div key={diff.id} className="mb-8">
              <div className="flex items-start mb-4">
                <div className="bg-vac-green rounded-full p-2 mr-4 mt-1">
                  <i className="fas fa-check text-white"></i>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-xl mb-2">{diff.title}</h3>
                  <p>{diff.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1577368287217-16ff9373a733?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Support worker and participant smiling" 
            className="rounded-lg shadow-xl max-w-full h-auto" 
          />
        </div>
      </div>
      
      {/* Testimonials */}
      <div>
        <h3 className="font-montserrat font-semibold text-3xl text-center text-vac-purple mb-12">What Our Clients Say</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg custom-shadow testimonial-card">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p className="italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
