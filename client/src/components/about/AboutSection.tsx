import { VALUES, LEADERS } from "@/lib/constants";

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-montserrat font-bold text-4xl text-vac-purple mb-4">About Us</h2>
        <p className="text-xl max-w-3xl mx-auto">Learn about our journey, values, and the passionate team behind Value Added Care.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h3 className="font-montserrat font-semibold text-2xl text-vac-purple mb-4">Our Mission</h3>
          <p className="text-lg mb-6 leading-relaxed">
            To empower individuals through personalized, compassionate care that enhances quality of life, promotes independence, and fosters dignity.
          </p>
          
          <h3 className="font-montserrat font-semibold text-2xl text-vac-purple mb-4">Our Vision</h3>
          <p className="text-lg mb-6 leading-relaxed">
            To create a community where everyone has access to exceptional care services that enable them to live their best lives, regardless of their circumstances.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Diverse team meeting" 
            className="rounded-lg shadow-xl max-w-full h-auto" 
          />
        </div>
      </div>
      
      {/* Our Values */}
      <div className="mb-20">
        <h3 className="font-montserrat font-semibold text-3xl text-center text-vac-purple mb-12">Our Values</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUES.map((value) => (
            <div key={value.id} className="bg-white p-8 rounded-lg custom-shadow">
              <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mb-6`}>
                <i className={`fas fa-${value.icon} text-2xl text-white`}></i>
              </div>
              <h4 className="font-montserrat font-semibold text-xl mb-4">{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Leadership */}
      <div>
        <h3 className="font-montserrat font-semibold text-3xl text-center text-vac-purple mb-12">Our Leadership</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEADERS.map((leader) => (
            <div key={leader.id} className="bg-white p-6 rounded-lg custom-shadow text-center">
              <img 
                src={`https://images.unsplash.com/photo-157349${7000 + leader.id}940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`} 
                alt={leader.name} 
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4" 
              />
              <h4 className="font-montserrat font-semibold text-xl mb-2">{leader.name}</h4>
              <p className="text-vac-purple font-medium mb-4">{leader.role}</p>
              <p className="text-gray-600 mb-4">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
