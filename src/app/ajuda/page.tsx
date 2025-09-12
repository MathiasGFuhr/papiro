"use client";

import { Header, Footer } from '../../components';
import { useState } from 'react';
import Link from 'next/link';

const HELP_CATEGORIES = [
  {
    id: 'tutoriais',
    title: 'Tutoriais',
    description: 'Aprenda a usar todas as funcionalidades do Papiro Tático',
    icon: '🎓',
    href: '/ajuda/tutoriais',
    color: 'from-blue-600 to-blue-700'
  },
  {
    id: 'faq',
    title: 'Perguntas Frequentes',
    description: 'Encontre respostas rápidas para suas dúvidas',
    icon: '❓',
    href: '/ajuda/faq',
    color: 'from-green-600 to-green-700'
  },
  {
    id: 'status',
    title: 'Status do Sistema',
    description: 'Verifique o status atual dos nossos serviços',
    icon: '📊',
    href: '/ajuda/status',
    color: 'from-purple-600 to-purple-700'
  },
  {
    id: 'contato',
    title: 'Contato',
    description: 'Fale diretamente com nossa equipe de suporte',
    icon: '💬',
    href: '#contato',
    color: 'from-red-600 to-red-700'
  }
];

const QUICK_LINKS = [
  {
    title: 'Como criar meu primeiro cronograma?',
    href: '/ajuda/tutoriais#criar-cronograma',
    category: 'Tutoriais'
  },
  {
    title: 'Esqueci minha senha, como recuperar?',
    href: '/ajuda/faq#recuperar-senha',
    category: 'FAQ'
  },
  {
    title: 'O sistema está funcionando normalmente?',
    href: '/ajuda/status',
    category: 'Status'
  },
  {
    title: 'Como cancelar minha assinatura?',
    href: '/ajuda/faq#cancelar-assinatura',
    category: 'FAQ'
  },
  {
    title: 'Posso usar em múltiplos dispositivos?',
    href: '/ajuda/faq#multiplos-dispositivos',
    category: 'FAQ'
  },
  {
    title: 'Como funciona a análise de progresso?',
    href: '/ajuda/tutoriais#analise-progresso',
    category: 'Tutoriais'
  }
];

export default function AjudaPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLinks = QUICK_LINKS.filter(link =>
    link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    link.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-700">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Central de <span className="text-red-600">Ajuda</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Encontre respostas rápidas, tutoriais detalhados e suporte especializado 
              para maximizar seu uso do Papiro Tático.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Digite sua dúvida ou palavra-chave..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        {searchQuery && (
          <section className="py-12 bg-gray-800">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-white mb-6">
                Resultados para "{searchQuery}"
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {filteredLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-medium">{link.title}</h3>
                        <p className="text-gray-400 text-sm">{link.category}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Como podemos ajudar?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Escolha uma categoria abaixo para encontrar a ajuda que você precisa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {HELP_CATEGORIES.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group block"
                >
                  <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700 group-hover:border-gray-600">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 text-center">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {category.description}
                    </p>
                    <div className="mt-6 flex items-center justify-center text-red-600 group-hover:text-red-500 transition-colors">
                      <span className="text-sm font-medium">Acessar</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ainda precisa de ajuda?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Nossa equipe de suporte está sempre pronta para ajudar você a conquistar sua aprovação
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-2xl mb-4 mx-auto">
                    💬
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Chat ao Vivo</h3>
                  <p className="text-gray-300 mb-4">Resposta instantânea</p>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors">
                    Iniciar Chat
                  </button>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-2xl mb-4 mx-auto">
                    📧
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-300 mb-4">Resposta em até 24h</p>
                  <a 
                    href="mailto:suporte@papirotatico.com"
                    className="block w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors text-center"
                  >
                    Enviar Email
                  </a>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-2xl mb-4 mx-auto">
                    📱
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                  <p className="text-gray-300 mb-4">Suporte direto</p>
                  <a 
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors text-center"
                  >
                    Abrir WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}


