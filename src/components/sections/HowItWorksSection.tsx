export const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Cadastre-se",
      description: "Crie sua conta gratuita e informe seus dados básicos e objetivos de estudo.",
      icon: "👤"
    },
    {
      number: "02", 
      title: "Configure seu Perfil",
      description: "Selecione os concursos que deseja estudar e defina sua disponibilidade de tempo.",
      icon: "⚙️"
    },
    {
      number: "03",
      title: "Receba seu Cronograma",
      description: "Nossa IA cria um plano personalizado com cronograma diário, semanal e mensal.",
      icon: "📅"
    },
    {
      number: "04",
      title: "Estude e Acompanhe",
      description: "Siga o cronograma, marque suas atividades e acompanhe seu progresso em tempo real.",
      icon: "📊"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como <span className="text-red-600">Funciona</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Em apenas 4 passos simples, você terá um cronograma de estudos 
            personalizado e inteligente para conquistar sua aprovação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-700 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para começar?
            </h3>
            <p className="text-gray-300 mb-6">
              Junte-se a mais de 500 aprovados que já transformaram seus estudos 
              com o Papiro Tático.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Começar Agora - É Grátis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
