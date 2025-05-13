import { useLocation } from 'wouter';
import { VALUES, LEADERSHIP_TEAM } from "@/lib/constants";

const About = () => {
  const [, navigate] = useLocation();

  return (
    <section id="about" className="page-container min-h-screen py-16 bg-neutral-light animate-fadeIn">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">About Value Added Care</h1>
          <p className="text-lg text-neutral-dark max-w-3xl mx-auto">
            Learn about our mission, values, and the passionate team behind our care services.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-4 text-[#6b2d90]">Our Mission</h2>
              <p className="text-neutral-dark mb-6">
                To enhance the quality of life for individuals with diverse needs through personalized, compassionate care that promotes independence, dignity, and well-being.
              </p>
              <p className="text-neutral-dark">
                We strive to be the bridge that connects people with the support they need to live fulfilling lives in their communities.
              </p>
            </div>
            <div>
              <h2 className="font-montserrat font-bold text-2xl md:text-3xl mb-4 text-[#8dc63f]">Our Vision</h2>
              <p className="text-neutral-dark mb-6">
                We envision a world where all individuals, regardless of ability, have access to the care and support they need to thrive and participate fully in society.
              </p>
              <p className="text-neutral-dark">
                Value Added Care aims to be a leader in transforming the care sector through innovative, person-centered approaches that set new standards of excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-10 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {VALUES.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 service-card">
              <div className={`w-16 h-16 mx-auto mb-6 ${value.bgColor} bg-opacity-20 rounded-full flex items-center justify-center`}>
                <i className={`${value.icon} text-3xl text-${value.bgColor.replace('bg-', '')}`}></i>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-3 text-center">{value.title}</h3>
              <p className="text-neutral-dark text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-10 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEADERSHIP_TEAM.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={member.image} 
                alt={`${member.name}, ${member.role}`} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-[#6b2d90] font-medium mb-3">{member.role}</p>
                <p className="text-neutral-dark">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About page styles are in index.css */}
    </section>
  );
};

export default About;
