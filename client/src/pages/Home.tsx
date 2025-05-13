import { useLocation } from 'wouter';
import { Button } from "@/components/ui/button";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, FEATURES, TESTIMONIALS } from "@/lib/constants";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { FaQuoteLeft, FaUserCircle, FaHeart, FaHandHoldingHeart, FaUsers } from 'react-icons/fa';

const Home = () => {
  const [, navigate] = useLocation();

  return (
    <main id="main-content" tabIndex={-1}>
      <section id="home" className="page-container min-h-screen animate-fadeIn" aria-labelledby="home-title">
        {/* Hero Section */}
        <div className="hero-section py-16 md:py-32" style={{
          background: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }} role="banner">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 id="home-title" className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
                  Connecting People, <span className="text-gradient">Empowering Lives</span>
                </h1>
                <p 
                  className="text-lg md:text-xl text-neutral-dark mb-8 font-opensans optimized-paragraph"
                >
                  {SITE_DESCRIPTION}
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    onClick={() => {
                      navigate('/services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-[#6b2d90] to-[#8dc63f] hover:from-[#5e2780] hover:to-[#7db52f] text-white px-8 py-6 rounded-full font-medium text-center"
                    aria-label="Explore our services"
                  >
                    <span className="text-white font-medium">Explore Our Services</span>
                  </Button>
                  <Button 
                    onClick={() => {
                      navigate('/contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    variant="outline"
                    className="border-2 border-[#6b2d90] text-[#6b2d90] hover:bg-[#6b2d90] hover:text-white px-8 py-6 rounded-full font-medium transition-all duration-300 text-center"
                    aria-label="Contact us"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                  alt="Diverse group of people with carers" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                  width="800"
                  height="600"
                  decoding="async"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-neutral-light py-16" aria-labelledby="features-title">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="features-title" className="font-montserrat font-bold text-3xl md:text-4xl mb-4">How We Support You</h2>
              <p className="text-lg text-neutral-dark max-w-3xl mx-auto optimized-paragraph">
                Our comprehensive care approach is designed to meet your unique needs with compassion and professionalism.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURES.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center service-card" role="article">
                  <div className={`w-16 h-16 mx-auto mb-6 ${feature.bgColor} bg-opacity-20 rounded-full flex items-center justify-center`} aria-hidden="true">
                    {feature.title === "Personalized Care" && (
                      <FaHeart className={`text-3xl ${feature.bgColor === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : feature.bgColor === 'bg-[#8dc63f]' ? 'text-[#8dc63f]' : 'text-[#5e8db3]'}`} />
                    )}
                    {feature.title === "NDIS Registered" && (
                      <FaHandHoldingHeart className={`text-3xl ${feature.bgColor === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : feature.bgColor === 'bg-[#8dc63f]' ? 'text-[#8dc63f]' : 'text-[#5e8db3]'}`} />
                    )}
                    {feature.title === "Dedicated Support Team" && (
                      <FaUsers className={`text-3xl ${feature.bgColor === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : feature.bgColor === 'bg-[#8dc63f]' ? 'text-[#8dc63f]' : 'text-[#5e8db3]'}`} />
                    )}
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl mb-3">{feature.title}</h3>
                  <p className="text-neutral-dark optimized-paragraph">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16" aria-labelledby="testimonials-title">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="testimonials-title" className="font-montserrat font-bold text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
              <p className="text-lg text-neutral-dark max-w-3xl mx-auto optimized-paragraph">
                Don't just take our word for it — hear from the families and individuals we've had the privilege to support.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Carousel 
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {TESTIMONIALS.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="h-full bg-white rounded-lg shadow-md p-8 testimonial-card" role="article">
                        <div className="flex items-center mb-4">
                          <div className="text-[#6b2d90]" aria-hidden="true">
                            <FaQuoteLeft className="text-4xl" />
                          </div>
                        </div>
                        <blockquote>
                          <p className="text-neutral-dark italic mb-6 optimized-paragraph">
                            "{testimonial.text}"
                          </p>
                          <footer className="flex items-center mt-auto">
                            <div className="mr-4" aria-hidden="true">
                              <div className={`w-12 h-12 ${testimonial.iconBg} bg-opacity-20 rounded-full flex items-center justify-center`}>
                                <FaUserCircle className={`text-xl ${testimonial.iconBg === 'bg-[#6b2d90]' ? 'text-[#6b2d90]' : 'text-[#8dc63f]'}`} />
                              </div>
                            </div>
                            <div>
                              <cite className="font-montserrat font-semibold not-italic">{testimonial.name}</cite>
                              <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                          </footer>
                        </blockquote>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-8">
                  <CarouselPrevious className="relative static lg:absolute translate-x-0 translate-y-0 bg-white border-[#6b2d90] text-[#6b2d90] hover:bg-[#6b2d90] hover:text-white" />
                  <CarouselNext className="relative static lg:absolute translate-x-0 translate-y-0 bg-white border-[#6b2d90] text-[#6b2d90] hover:bg-[#6b2d90] hover:text-white" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;