import { BENEFITS } from "@/lib/constants";

const KeyBenefitsSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-montserrat font-bold text-3xl text-center text-vac-purple mb-12">How We Make a Difference</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BENEFITS.map((benefit) => (
            <div key={benefit.id} className="text-center p-6 rounded-lg custom-shadow hover:shadow-lg transition duration-300">
              <div className={`${benefit.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <i className={`fas fa-${benefit.icon} text-3xl ${benefit.iconColor}`}></i>
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyBenefitsSection;
