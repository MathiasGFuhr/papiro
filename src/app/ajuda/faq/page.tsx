"use client";

import { HelpHeader, Footer } from '../../../components';
import { useState } from 'react';
import Link from 'next/link';

const FAQ_CATEGORIES = [
  'Todos',
  'Conta e Login',
  'Cronograma',
  'Pagamentos',
  'Técnico',
  'Geral'
];

const FAQ_ITEMS = [
  {
    id: 'recuperar-senha',
    question: 'Como recuperar minha senha?',
    answer: 'Para recuperar sua senha, clique em "Esqueci minha senha" na página de login. Digite seu email cadastrado e você receberá um link para redefinir sua senha. Verifique também sua caixa de spam.',
    category: 'Conta e Login',
    tags: ['senha', 'login', 'recuperar']
  },
  {
    id: 'criar-cronograma',
    question: 'Como criar meu primeiro cronograma?',
    answer: 'Após fazer login, clique em "Novo Cronograma" no dashboard. Selecione o concurso desejado, defina sua disponibilidade de tempo e configure suas matérias preferidas. Nossa IA criará um cronograma personalizado para você.',
    category: 'Cronograma',
    tags: ['cronograma', 'criar', 'primeiro']
  },
  {
    id: 'cancelar-assinatura',
    question: 'Como cancelar minha assinatura?',
    answer: 'Acesse "Configurações" > "Assinatura" e clique em "Cancelar Assinatura". Você pode cancelar a qualquer momento e continuará com acesso até o final do período pago. Não há taxas de cancelamento.',
    category: 'Pagamentos',
    tags: ['cancelar', 'assinatura', 'pagamento']
  },
  {
    id: 'multiplos-dispositivos',
    question: 'Posso usar em múltiplos dispositivos?',
    answer: 'Sim! Seus dados são sincronizados em tempo real entre todos os dispositivos. Você pode estudar no computador, tablet e celular sem perder nenhuma informação.',
    category: 'Geral',
    tags: ['dispositivos', 'sincronização', 'mobile']
  },
  {
    id: 'problema-login',
    question: 'Não consigo fazer login, o que fazer?',
    answer: 'Verifique se seu email e senha estão corretos. Se o problema persistir, tente recuperar sua senha ou entre em contato conosco pelo chat de suporte. Geralmente resolvemos em poucos minutos.',
    category: 'Técnico',
    tags: ['login', 'problema', 'técnico']
  },
  {
    id: 'atualizar-dados',
    question: 'Como atualizar meus dados pessoais?',
    answer: 'Acesse "Configurações" > "Perfil" para editar suas informações pessoais. Lembre-se de salvar as alterações. Algumas mudanças podem requerer verificação por email.',
    category: 'Conta e Login',
    tags: ['dados', 'perfil', 'atualizar']
  },
  {
    id: 'cronograma-personalizado',
    question: 'Posso personalizar meu cronograma?',
    answer: 'Sim! Você pode ajustar horários, adicionar ou remover matérias, alterar prioridades e definir metas personalizadas. O sistema se adapta às suas necessidades específicas.',
    category: 'Cronograma',
    tags: ['personalizar', 'cronograma', 'ajustar']
  },
  {
    id: 'relatorios-exportar',
    question: 'Posso exportar meus relatórios?',
    answer: 'Sim! Você pode exportar relatórios em PDF ou Excel. Acesse "Relatórios" e clique no botão de exportar. Os relatórios incluem gráficos, estatísticas e análises detalhadas.',
    category: 'Cronograma',
    tags: ['relatórios', 'exportar', 'pdf']
  },
  {
    id: 'reembolso',
    question: 'Qual a política de reembolso?',
    answer: 'Oferecemos garantia de 30 dias para todos os planos. Se não ficar satisfeito, entre em contato conosco e faremos o reembolso integral, sem perguntas.',
    category: 'Pagamentos',
    tags: ['reembolso', 'garantia', 'dinheiro']
  },
  {
    id: 'notificacoes',
    question: 'Como configurar notificações?',
    answer: 'Vá em "Configurações" > "Notificações" para personalizar lembretes de estudo, notificações por email e alertas importantes. Você pode escolher horários e tipos de notificação.',
    category: 'Geral',
    tags: ['notificações', 'lembretes', 'configurar']
  },
  {
    id: 'problema-mobile',
    question: 'O app mobile não está funcionando',
    answer: 'Verifique se você tem a versão mais recente do app. Se o problema persistir, tente desinstalar e reinstalar. Para problemas de sincronização, verifique sua conexão com a internet.',
    category: 'Técnico',
    tags: ['mobile', 'app', 'problema']
  },
  {
    id: 'dados-seguros',
    question: 'Meus dados estão seguros?',
    answer: 'Sim! Utilizamos criptografia de ponta e seguimos as melhores práticas de segurança. Seus dados são armazenados em servidores seguros e nunca são compartilhados com terceiros.',
    category: 'Geral',
    tags: ['segurança', 'dados', 'privacidade']
  }
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredItems = FAQ_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <>
      <HelpHeader />
      
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
                Perguntas <span className="text-red-600">Frequentes</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Encontre respostas rápidas para as dúvidas mais comuns sobre o Papiro Tático
              </p>
              
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Digite sua dúvida..."
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
                  {FAQ_CATEGORIES.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Items */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {filteredItems.length > 0 ? (
                <div className="space-y-4">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {item.question}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">
                              {item.category}
                            </span>
                            <div className="flex space-x-1">
                              {item.tags.slice(0, 3).map((tag, index) => (
                                <span key={index} className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <svg
                            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                              openItems.includes(item.id) ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      
                      {openItems.includes(item.id) && (
                        <div className="px-6 py-4 bg-gray-700 border-t border-gray-600">
                          <p className="text-gray-300 leading-relaxed">
                            {item.answer}
                          </p>
                          <div className="mt-4 flex items-center space-x-4">
                            <button className="flex items-center space-x-2 text-red-600 hover:text-red-500 text-sm">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                              </svg>
                              <span>Útil</span>
                            </button>
                            <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 text-sm">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                              <span>Comentar</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-white mb-2">Nenhuma pergunta encontrada</h3>
                  <p className="text-gray-300 mb-6">Tente ajustar sua busca ou filtros</p>
                  <Link
                    href="/ajuda#contato"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Entrar em Contato
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Perguntas Mais Populares
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {FAQ_ITEMS.slice(0, 6).map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className="block p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.question}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {item.answer}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">
                        {item.category}
                      </span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ainda não encontrou sua resposta?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nossa equipe de suporte está sempre pronta para ajudar você com qualquer dúvida
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ajuda#contato"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Falar com Suporte
              </Link>
              <Link
                href="/ajuda/tutoriais"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Ver Tutoriais
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

