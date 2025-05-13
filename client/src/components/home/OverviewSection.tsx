import { Link } from "wouter";

const OverviewSection = () => {
  return (
    <div className="py-20 bg-vac-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-vac-purple mb-6">
              Welcome to Value Added Care
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              At Value Added Care, we believe in the power of compassionate, personalized care to transform lives. For over a decade, we've built a legacy of ethical service delivery that puts people first.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Our team of dedicated professionals works tirelessly to ensure that every individual receives the support they need to live their lives with dignity, independence, and joy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/about" 
                className="bg-vac-purple hover:bg-opacity-90 text-white font-montserrat font-semibold px-6 py-3 rounded-full transition duration-300"
              >
                Learn More About Us
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-vac-purple text-vac-purple hover:bg-vac-purple hover:text-white font-montserrat font-semibold px-6 py-3 rounded-full transition duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Caring professional with client" 
              className="rounded-lg shadow-xl max-w-full h-auto" 
              style={{ maxHeight: "400px" }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
