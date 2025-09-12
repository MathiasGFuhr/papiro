import { FEATURES } from '../../constants';

export const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Funcionalidades <span className="text-red-600">Inteligentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologia avançada para maximizar sua eficiência nos estudos e aumentar 
            suas chances de aprovação nos concursos policiais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-700 p-8 rounded-lg hover:bg-gray-600 transition-colors duration-200"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
