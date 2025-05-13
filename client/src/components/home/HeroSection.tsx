import { Link } from "wouter";

const HeroSection = () => {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
        alt="Diverse group of people and carers" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
          Connecting People, <br /> Empowering Lives
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl mb-8">
          Providing compassionate, ethical care services to empower individuals and families.
        </p>
        <Link 
          href="/services" 
          className="bg-vac-green hover:bg-opacity-90 text-white font-montserrat font-semibold px-8 py-4 rounded-full text-lg transition duration-300 transform hover:scale-105"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
