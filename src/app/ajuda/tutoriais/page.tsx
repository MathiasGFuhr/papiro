"use client";

import { Header, Footer } from '../../../components';
import { useState } from 'react';
import Link from 'next/link';

const TUTORIALS = [
  {
    id: 'criar-cronograma',
    title: 'Como criar seu primeiro cronograma',
    description: 'Aprenda a configurar seu cronograma de estudos personalizado',
    duration: '5 min',
    difficulty: 'Iniciante',
    category: 'Cronograma',
    steps: [
      'Acesse sua conta no Papiro Tático',
      'Clique em "Novo Cronograma"',
      'Selecione o concurso desejado',
      'Defina sua disponibilidade de tempo',
      'Configure suas matérias preferidas',
      'Revise e confirme o cronograma gerado'
    ],
    videoUrl: '#',
    icon: '📅'
  },
  {
    id: 'analise-progresso',
    title: 'Entendendo a análise de progresso',
    description: 'Saiba como interpretar seus relatórios e métricas de estudo',
    duration: '8 min',
    difficulty: 'Intermediário',
    category: 'Relatórios',
    steps: [
      'Acesse a seção "Progresso"',
      'Visualize seu desempenho geral',
      'Analise as matérias com menor rendimento',
      'Identifique seus pontos fortes',
      'Ajuste seu cronograma conforme necessário',
      'Acompanhe sua evolução ao longo do tempo'
    ],
    videoUrl: '#',
    icon: '📊'
  },
  {
    id: 'configurar-notificacoes',
    title: 'Configurando notificações',
    description: 'Configure lembretes e notificações para não perder nenhum estudo',
    duration: '3 min',
    difficulty: 'Iniciante',
    category: 'Configurações',
    steps: [
      'Vá para "Configurações"',
      'Selecione "Notificações"',
      'Escolha os tipos de notificação',
      'Defina horários de lembretes',
      'Configure notificações por email',
      'Teste suas configurações'
    ],
    videoUrl: '#',
    icon: '🔔'
  },
  {
    id: 'usar-mobile',
    title: 'Usando o Papiro Tático no mobile',
    description: 'Aproveite ao máximo a versão mobile da plataforma',
    duration: '6 min',
    difficulty: 'Iniciante',
    category: 'Mobile',
    steps: [
      'Baixe o app ou acesse pelo navegador',
      'Faça login com suas credenciais',
      'Navegue pelo cronograma diário',
      'Marque suas atividades como concluídas',
      'Acesse relatórios e estatísticas',
      'Sincronize dados entre dispositivos'
    ],
    videoUrl: '#',
    icon: '📱'
  },
  {
    id: 'gerenciar-materias',
    title: 'Gerenciando suas matérias',
    description: 'Organize e personalize suas matérias de estudo',
    duration: '7 min',
    difficulty: 'Intermediário',
    category: 'Organização',
    steps: [
      'Acesse "Minhas Matérias"',
      'Adicione novas matérias',
      'Configure pesos e prioridades',
      'Organize por categorias',
      'Defina metas de estudo',
      'Acompanhe o progresso individual'
    ],
    videoUrl: '#',
    icon: '📚'
  },
  {
    id: 'relatorios-avancados',
    title: 'Relatórios avançados',
    description: 'Domine todas as funcionalidades de relatórios e análises',
    duration: '10 min',
    difficulty: 'Avançado',
    category: 'Relatórios',
    steps: [
      'Explore diferentes tipos de relatório',
      'Configure filtros personalizados',
      'Exporte dados para Excel/PDF',
      'Compare períodos de estudo',
      'Analise tendências de performance',
      'Compartilhe relatórios com mentores'
    ],
    videoUrl: '#',
    icon: '📈'
  }
];

const CATEGORIES = ['Todos', 'Cronograma', 'Relatórios', 'Configurações', 'Mobile', 'Organização'];

export default function TutoriaisPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTutorials = TUTORIALS.filter(tutorial => {
    const matchesCategory = selectedCategory === 'Todos' || tutorial.category === selectedCategory;
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-700">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Back Button */}
              <div className="mb-8">
                <Link 
                  href="/ajuda"
                  className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Voltar para Central de Ajuda
                </Link>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-red-600">Tutoriais</span> e Guias
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Aprenda a usar todas as funcionalidades do Papiro Tático com nossos 
                tutoriais passo a passo e vídeos explicativos.
              </p>
              
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Buscar tutoriais..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-6 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  {CATEGORIES.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-gray-700">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{tutorial.icon}</div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">
                          {tutorial.difficulty}
                        </span>
                        <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-full">
                          {tutorial.duration}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {tutorial.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">
                      {tutorial.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-400">{tutorial.category}</span>
                      <button className="text-red-600 hover:text-red-500 text-sm font-medium">
                        Ver Tutorial →
                      </button>
                    </div>
                    
                    {/* Steps Preview */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-400">Passos:</h4>
                      <ol className="text-sm text-gray-300 space-y-1">
                        {tutorial.steps.slice(0, 3).map((step, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-600 mr-2">{index + 1}.</span>
                            <span className="text-xs">{step}</span>
                          </li>
                        ))}
                        {tutorial.steps.length > 3 && (
                          <li className="text-xs text-gray-500">
                            +{tutorial.steps.length - 3} passos adicionais...
                          </li>
                        )}
                      </ol>
                    </div>
                  </div>
                  
                  <div className="px-6 py-4 bg-gray-700 border-t border-gray-600">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                          </svg>
                          <span className="text-sm">Vídeo</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                          <span className="text-sm">PDF</span>
                        </button>
                      </div>
                      <Link
                        href={`/ajuda/tutoriais/${tutorial.id}`}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Começar
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredTutorials.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-2">Nenhum tutorial encontrado</h3>
                <p className="text-gray-300">Tente ajustar sua busca ou filtros</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ainda não encontrou o que procura?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe está sempre criando novos tutoriais. Entre em contato conosco 
              se você tem alguma sugestão ou dúvida específica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ajuda#contato"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Entrar em Contato
              </Link>
              <Link
                href="/ajuda/faq"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Ver FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

