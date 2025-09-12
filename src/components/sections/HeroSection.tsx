import { Button } from '../ui/Button';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Domine os <span className="text-red-600">Concursos</span> Policiais
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Sistema inteligente de controle de estudos com IA. Cronograma automático, 
            análise de progresso e foco estratégico para sua aprovação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Começar Grátis Agora
              </Button>
            </a>
            <a href="#como-funciona">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Ver Demonstração
              </Button>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Aprovados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-400 text-sm">Taxa de Sucesso</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">4</div>
              <div className="text-gray-400 text-sm">Concursos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
