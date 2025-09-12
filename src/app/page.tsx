"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { trackButtonClick, trackFormSubmit } from "../components/Analytics";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: '' });

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Nome é obrigatório';
    if (!formData.email.trim()) return 'Email é obrigatório';
    if (!formData.email.includes('@')) return 'Email inválido';
    if (!formData.message.trim()) return 'Mensagem é obrigatória';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setFormStatus({ loading: false, success: false, error: validationError });
      return;
    }

    setFormStatus({ loading: true, success: false, error: '' });
    trackFormSubmit('contact_form');

    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setFormStatus({ loading: false, success: false, error: 'Erro ao enviar mensagem. Tente novamente.' });
    }
  };
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Papiro Tático",
            "description": "Sistema inteligente de controle de estudos para concursos policiais com IA",
            "url": "https://papirotatico.com",
            "applicationCategory": "EducationalApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "12.00",
              "priceCurrency": "BRL",
              "priceValidUntil": "2025-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "500"
            },
            "author": {
              "@type": "Organization",
              "name": "Papiro Tático"
            }
          })
        }}
      />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header className="border-b border-gray-700 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#inicio" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
              <Image
                src="/imgens/logo-policia.png"
                alt="Logo Papiro Tático"
                width={60}
                height={60}
                className="object-contain"
                priority
                unoptimized
              />
              <h1 className="text-xl font-bold text-white">Papiro Tático</h1>
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Como Funciona</a>
              <a href="#funcionalidades" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Funcionalidades</a>
              <a href="#precos" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Preços</a>
              <a href="#contato" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Contato</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white text-sm font-medium hidden md:block">Entrar</button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors hidden md:block">
                Começar Grátis
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#como-funciona" 
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Como Funciona
                </a>
                <a 
                  href="#funcionalidades" 
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Funcionalidades
                </a>
                <a 
                  href="#precos" 
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Preços
                </a>
                <a 
                  href="#contato" 
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contato
                </a>
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-700">
                  <button className="text-gray-300 hover:text-white text-sm font-medium py-2 text-left">
                    Entrar
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                    Começar Grátis
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Domine os Concursos Policiais com 
                <span className="text-red-500"> Inteligência Artificial</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                O primeiro sistema que cria automaticamente seu cronograma de estudos, 
                otimiza seu tempo e maximiza suas chances de aprovação.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => trackButtonClick('comecar_gratis_hero')}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors button-glow animate-fade-in-up"
              >
                Começar Grátis Agora
              </button>
                <button className="border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors animate-fade-in-up">
                  Ver Demonstração
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Setup em 2 minutos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Suporte 24/7</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Seu Cronograma Personalizado</h3>
                  <p className="text-gray-400">Criado automaticamente para você</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-red-900/30 rounded-lg border border-red-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="font-medium text-white">Direito Penal</span>
                    </div>
                    <span className="text-sm text-gray-300">2h 30min</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-blue-900/30 rounded-lg border border-blue-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="font-medium text-white">Português</span>
                    </div>
                    <span className="text-sm text-gray-300">1h 45min</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-900/30 rounded-lg border border-green-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-white">Raciocínio Lógico</span>
                    </div>
                    <span className="text-sm text-gray-300">1h 15min</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-yellow-900/30 rounded-lg border border-yellow-800">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium text-white">Informática</span>
                    </div>
                    <span className="text-sm text-gray-300">1h 00min</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Total hoje:</span>
                    <span className="font-semibold text-white">6h 30min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Como Funciona o Papiro Tático?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Três passos simples para transformar seus estudos e maximizar suas chances de aprovação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-900/50 border border-red-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-red-500">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Configure seus Objetivos</h3>
              <p className="text-gray-300 leading-relaxed">
                Informe quais concursos você quer prestar, quanto tempo tem disponível por dia 
                e suas principais dificuldades. O sistema analisa tudo automaticamente.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900/50 border border-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-500">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">IA Cria seu Cronograma</h3>
              <p className="text-gray-300 leading-relaxed">
                Nossa inteligência artificial analisa o edital, distribui as matérias pelo tempo 
                disponível e cria um cronograma otimizado para sua aprovação.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-900/50 border border-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-500">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Acompanhe e Evolua</h3>
              <p className="text-gray-300 leading-relaxed">
                O sistema aprende com seu progresso, ajusta automaticamente o cronograma 
                e te mantém sempre no caminho certo para a aprovação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concursos Suportados */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Concursos Policiais Suportados
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Especializado nos principais concursos policiais do Brasil
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-xl p-8 text-center shadow-lg border border-gray-700 hover:border-red-600 hover:shadow-red-900/20 transition-all card-hover animate-fade-in-up">
              <div className="w-16 h-16 bg-red-900/50 border border-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-500">PF</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Polícia Federal</h3>
              <p className="text-gray-400 text-sm">Agente, Escrivão, Delegado</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 text-center shadow-lg border border-gray-700 hover:border-blue-600 hover:shadow-blue-900/20 transition-all card-hover animate-fade-in-up">
              <div className="w-16 h-16 bg-blue-900/50 border border-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-500">PRF</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Polícia Rodoviária</h3>
              <p className="text-gray-400 text-sm">Policial Rodoviário Federal</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 text-center shadow-lg border border-gray-700 hover:border-green-600 hover:shadow-green-900/20 transition-all card-hover animate-fade-in-up">
              <div className="w-16 h-16 bg-green-900/50 border border-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-500">PC</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Polícia Civil</h3>
              <p className="text-gray-400 text-sm">Investigador, Escrivão, Delegado</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-8 text-center shadow-lg border border-gray-700 hover:border-yellow-600 hover:shadow-yellow-900/20 transition-all card-hover animate-fade-in-up">
              <div className="w-16 h-16 bg-yellow-900/50 border border-yellow-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-500">DP</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">DEPEN</h3>
              <p className="text-gray-400 text-sm">Agente Penitenciário</p>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Principais Funcionalidades
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tudo que você precisa para organizar seus estudos de forma eficiente e estratégica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-lg hover:border-red-600 hover:shadow-red-900/20 transition-all">
              <div className="w-16 h-16 bg-red-900/50 border border-red-800 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cronograma Automático</h3>
              <p className="text-gray-300 leading-relaxed">
                Sistema cria e ajusta automaticamente seu cronograma baseado no tempo disponível, 
                dificuldade das matérias e peso no edital.
              </p>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-lg hover:border-blue-600 hover:shadow-blue-900/20 transition-all">
              <div className="w-16 h-16 bg-blue-900/50 border border-blue-800 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Análise de Progresso</h3>
              <p className="text-gray-300 leading-relaxed">
                Acompanhe seu desempenho em tempo real com relatórios detalhados e 
                sugestões de melhorias personalizadas.
              </p>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-lg hover:border-green-600 hover:shadow-green-900/20 transition-all">
              <div className="w-16 h-16 bg-green-900/50 border border-green-800 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Foco Estratégico</h3>
              <p className="text-gray-300 leading-relaxed">
                Interface limpa que elimina distrações e mantém você focado nas matérias 
                mais importantes para sua aprovação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Escolha seu Plano
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comece grátis e evolua conforme sua necessidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Gratuito */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Gratuito</h3>
                <p className="text-gray-400 mb-6">Para começar</p>
                <div className="text-4xl font-bold text-white mb-2">R$ 0</div>
                <p className="text-gray-400 text-sm">Para sempre</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Ciclos de estudos básicos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">1 concurso</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Relatórios simples</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-gray-400 text-xs">✗</span>
                  </div>
                  <span className="text-gray-500">IA personalizada</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-gray-400 text-xs">✗</span>
                  </div>
                  <span className="text-gray-500">Suporte prioritário</span>
                </li>
              </ul>
              
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Começar Grátis
              </button>
            </div>

            {/* Plano Anual - Mais Popular */}
            <div className="bg-gray-800 border-2 border-red-600 rounded-xl p-8 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MAIS POPULAR
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Anual</h3>
                <p className="text-gray-400 mb-6">Melhor custo-benefício</p>
                <div className="text-4xl font-bold text-white mb-2">R$ 12</div>
                <p className="text-gray-400 text-sm">por mês</p>
                <p className="text-red-400 text-sm mt-1">R$ 144/ano</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Tudo do plano gratuito</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Todos os concursos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">IA personalizada</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Análise avançada</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Sistema de recompensas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Suporte por email</span>
                </li>
              </ul>
              
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Escolher Anual
              </button>
            </div>

            {/* Plano Vitalício */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MELHOR OFERTA
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Vitalício</h3>
                <p className="text-gray-400 mb-6">Investimento único</p>
                <div className="text-4xl font-bold text-white mb-2">R$ 297</div>
                <p className="text-gray-400 text-sm">pagamento único</p>
                <p className="text-green-400 text-sm mt-1">Economize R$ 1.431</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Tudo do plano anual</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Acesso para sempre</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Futuras atualizações</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Suporte prioritário</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Recursos exclusivos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Garantia de 30 dias</span>
                </li>
              </ul>
              
              <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Escolher Vitalício
              </button>
            </div>
          </div>

          {/* Garantia */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 text-gray-400">
              <span className="text-green-500">🛡️</span>
              <span>Garantia de 30 dias ou seu dinheiro de volta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-300">Candidatos Aprovados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">95%</div>
              <div className="text-gray-300">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">4</div>
              <div className="text-gray-300">Concursos Suportados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-300">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              O que Nossos Usuários Dizem
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Histórias reais de candidatos que conquistaram sua aprovação
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Maria Silva</h4>
                  <p className="text-gray-400 text-sm">Aprovada na PF</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                &ldquo;O Papiro Tático revolucionou meus estudos. Em 6 meses consegui organizar toda minha rotina e passei na PF. A IA realmente funciona!&rdquo;
              </p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">João Santos</h4>
                  <p className="text-gray-400 text-sm">Aprovado na PRF</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                &ldquo;Sistema incrível! O cronograma automático me salvou. Consegui estudar de forma organizada mesmo trabalhando 8h por dia.&rdquo;
              </p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Ana Costa</h4>
                  <p className="text-gray-400 text-sm">Aprovada na PC</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                &ldquo;Vale cada centavo! O sistema de recompensas me manteve motivada durante todo o processo. Recomendo para todos!&rdquo;
              </p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="contato" className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tire suas dúvidas sobre o Papiro Tático
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <details className="bg-gray-900 border border-gray-700 rounded-lg group overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800 transition-all duration-300">
                  <h3 className="text-white font-semibold text-lg">
                    Como funciona o sistema de IA?
                  </h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform duration-300">▼</span>
                </summary>
                <div className="px-6 pb-6 transition-all duration-300 ease-in-out">
                  <p className="text-gray-300 leading-relaxed">
                    Nossa IA analisa o edital do concurso, seu tempo disponível e dificuldades pessoais para criar um cronograma otimizado. O sistema aprende com seu progresso e ajusta automaticamente.
                  </p>
                </div>
              </details>

              <details className="bg-gray-900 border border-gray-700 rounded-lg group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800 transition-colors">
                  <h3 className="text-white font-semibold text-lg">
                    Posso cancelar quando quiser?
                  </h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    Sim! Você pode cancelar sua assinatura a qualquer momento. Não há taxas de cancelamento e você mantém acesso até o final do período pago.
                  </p>
                </div>
              </details>

              <details className="bg-gray-900 border border-gray-700 rounded-lg group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800 transition-colors">
                  <h3 className="text-white font-semibold text-lg">
                    Funciona no celular?
                  </h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    Sim! O Papiro Tático é totalmente responsivo e funciona perfeitamente em smartphones, tablets e computadores. Estude onde e quando quiser.
                  </p>
                </div>
              </details>

              <details className="bg-gray-900 border border-gray-700 rounded-lg group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800 transition-colors">
                  <h3 className="text-white font-semibold text-lg">
                    Preciso de internet para usar?
                  </h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    Sim, você precisa de internet para sincronizar seu progresso e receber atualizações do cronograma. Mas você pode estudar offline e sincronizar depois.
                  </p>
                </div>
              </details>

              <details className="bg-gray-900 border border-gray-700 rounded-lg group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800 transition-colors">
                  <h3 className="text-white font-semibold text-lg">
                    Meus dados estão seguros?
                  </h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    Absolutamente! Utilizamos criptografia de ponta e seguimos todas as normas de proteção de dados. Seus dados nunca são compartilhados com terceiros.
                  </p>
                </div>
              </details>

              <details className="bg-gray-900 border border-gray-700 rounded-lg group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-800 transition-colors">
                  <h3 className="text-white font-semibold text-lg">
                    Como funciona a garantia de 30 dias?
                  </h3>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    Se você não ficar satisfeito com o Papiro Tático nos primeiros 30 dias, devolvemos 100% do seu dinheiro, sem perguntas.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Fale Conosco
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tem dúvidas? Nossa equipe está pronta para te ajudar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Entre em Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white">📧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-400">contato@papirotatico.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white">💬</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">WhatsApp</h4>
                    <p className="text-gray-400">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white">🕒</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Horário de Atendimento</h4>
                    <p className="text-gray-400">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStatus.error && (
                  <div className="bg-red-900/50 border border-red-800 text-red-200 px-4 py-3 rounded-lg">
                    {formStatus.error}
                  </div>
                )}
                
                {formStatus.success && (
                  <div className="bg-green-900/50 border border-green-800 text-green-200 px-4 py-3 rounded-lg">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}

                <div>
                  <label className="block text-white font-medium mb-2">Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                    disabled={formStatus.loading}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                    disabled={formStatus.loading}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Assunto</label>
                  <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors" disabled={formStatus.loading}>
                    <option>Dúvida sobre planos</option>
                    <option>Suporte técnico</option>
                    <option>Parceria</option>
                    <option>Outro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Mensagem</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-600 focus:outline-none transition-colors resize-none"
                    placeholder="Como podemos te ajudar?"
                    disabled={formStatus.loading}
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {formStatus.loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-red-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Transformar seus Estudos?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de candidatos que já estão usando o Papiro Tático para conquistar sua aprovação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Começar Grátis Agora
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold py-4 px-8 rounded-lg text-lg transition-colors">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/imgens/logo-policia.png"
                  alt="Logo Papiro Tático"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                  unoptimized
                />
                <h3 className="text-lg font-bold text-white">Papiro Tático</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Sistema inteligente de controle de estudos para concursos policiais.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demonstração</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status do Sistema</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Papiro Tático. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110"
          aria-label="Voltar ao topo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}