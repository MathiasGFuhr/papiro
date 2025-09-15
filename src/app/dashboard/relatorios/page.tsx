"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function RelatoriosPage() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [user] = useState({
    name: 'Mathias Fuhr',
    email: 'mathias@papirotatico.com',
    plan: 'Premium',
    progress: 78,
    avatar: 'MF',
    level: 12,
    xp: 2450,
    nextLevelXp: 3000,
    avatarStyle: 'warrior'
  });

  // Estado dos relatórios
  const [periodoSelecionado, setPeriodoSelecionado] = useState('mes'); // semana, mes, trimestre, ano
  const [tipoRelatorio, setTipoRelatorio] = useState('geral'); // geral, simulados, estudo, performance

  const [estatisticas] = useState({
    tempoTotalEstudo: 127.5,
    simuladosRealizados: 15,
    questoesRespondidas: 1250,
    taxaAcerto: 87.5,
    streakAtual: 23,
    melhorStreak: 45,
    nivelAtual: 12,
    xpTotal: 2450,
    proximoNivel: 3000,
    horasPorSemana: [8, 12, 15, 18, 20, 16, 14],
    simuladosPorSemana: [2, 3, 4, 5, 3, 4, 2],
    taxaAcertoPorSemana: [82, 85, 87, 89, 88, 90, 87]
  });

  const [relatorioMaterias] = useState([
    {
      nome: 'Direito Constitucional',
      tempoEstudo: 45,
      simulados: 5,
      questoesCorretas: 180,
      questoesTotal: 200,
      taxaAcerto: 90,
      tendencia: 'crescendo',
      ultimaAtividade: '2024-01-20'
    },
    {
      nome: 'Direito Administrativo',
      tempoEstudo: 38,
      simulados: 4,
      questoesCorretas: 150,
      questoesTotal: 180,
      taxaAcerto: 83.3,
      tendencia: 'estavel',
      ultimaAtividade: '2024-01-19'
    },
    {
      nome: 'Direito Penal',
      tempoEstudo: 32,
      simulados: 3,
      questoesCorretas: 120,
      questoesTotal: 150,
      taxaAcerto: 80,
      tendencia: 'crescendo',
      ultimaAtividade: '2024-01-18'
    },
    {
      nome: 'Direito Processual Penal',
      tempoEstudo: 28,
      simulados: 2,
      questoesCorretas: 95,
      questoesTotal: 120,
      taxaAcerto: 79.2,
      tendencia: 'crescendo',
      ultimaAtividade: '2024-01-17'
    },
    {
      nome: 'Português',
      tempoEstudo: 25,
      simulados: 3,
      questoesCorretas: 85,
      questoesTotal: 100,
      taxaAcerto: 85,
      tendencia: 'estavel',
      ultimaAtividade: '2024-01-16'
    }
  ]);

  const [atividadesDetalhadas] = useState([
    {
      data: '2024-01-20',
      tipo: 'estudo',
      materia: 'Direito Constitucional',
      duracao: 2.5,
      questoes: 25,
      acertos: 23,
      taxaAcerto: 92
    },
    {
      data: '2024-01-20',
      tipo: 'simulado',
      materia: 'Direito Administrativo',
      duracao: 1.5,
      questoes: 40,
      acertos: 34,
      taxaAcerto: 85
    },
    {
      data: '2024-01-19',
      tipo: 'revisao',
      materia: 'Direito Penal',
      duracao: 1,
      questoes: 15,
      acertos: 12,
      taxaAcerto: 80
    },
    {
      data: '2024-01-19',
      tipo: 'estudo',
      materia: 'Português',
      duracao: 1.5,
      questoes: 20,
      acertos: 17,
      taxaAcerto: 85
    },
    {
      data: '2024-01-18',
      tipo: 'simulado',
      materia: 'Direito Processual Penal',
      duracao: 1.25,
      questoes: 35,
      acertos: 28,
      taxaAcerto: 80
    }
  ]);

  const menuItems = [
    { 
      name: 'Visão Geral', 
      href: '/dashboard', 
      icon: '🏠',
      active: pathname === '/dashboard'
    },
    { 
      name: 'Cronograma', 
      href: '/dashboard/cronograma', 
      icon: '📅',
      active: pathname === '/dashboard/cronograma'
    },
    { 
      name: 'Progresso', 
      href: '/dashboard/progresso', 
      icon: '📊',
      active: pathname === '/dashboard/progresso'
    },
    { 
      name: 'Concursos', 
      href: '/dashboard/concursos', 
      icon: '🎯',
      active: pathname === '/dashboard/concursos'
    },
    { 
      name: 'Simulados', 
      href: '/dashboard/simulados', 
      icon: '📝',
      active: pathname === '/dashboard/simulados'
    },
    { 
      name: 'Relatórios', 
      href: '/dashboard/relatorios', 
      icon: '📈',
      active: pathname === '/dashboard/relatorios'
    },
    { 
      name: 'Perfil', 
      href: '/dashboard/perfil', 
      icon: '👤',
      active: pathname === '/dashboard/perfil'
    },
    { 
      name: 'Configurações', 
      href: '/dashboard/configuracoes', 
      icon: '⚙️',
      active: pathname === '/dashboard/configuracoes'
    }
  ];

  // Sistema de Avatares por Nível - Temas Policiais
  const getAvatarByLevel = (level: number) => {
    if (level >= 1 && level <= 5) return { emoji: '👮‍♂️', title: 'Recruta', color: 'from-gray-600 to-gray-700' };
    if (level >= 6 && level <= 10) return { emoji: '🛡️', title: 'Soldado', color: 'from-red-500 to-red-600' };
    if (level >= 11 && level <= 15) return { emoji: '⚔️', title: 'Sargento', color: 'from-red-600 to-red-700' };
    if (level >= 16 && level <= 20) return { emoji: '🏅', title: 'Tenente', color: 'from-red-700 to-red-800' };
    if (level >= 21 && level <= 25) return { emoji: '👑', title: 'Capitão', color: 'from-red-800 to-red-900' };
    if (level >= 26 && level <= 30) return { emoji: '⭐', title: 'Major', color: 'from-red-900 to-gray-900' };
    return { emoji: '🎖️', title: 'Coronel', color: 'from-yellow-600 to-red-600' };
  };

  const currentAvatar = getAvatarByLevel(user.level);

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'estudo': return '📚';
      case 'simulado': return '📝';
      case 'revisao': return '🔄';
      default: return '📅';
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'estudo': return 'from-blue-500 to-cyan-500';
      case 'simulado': return 'from-green-500 to-emerald-500';
      case 'revisao': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTendenciaIcon = (tendencia: string) => {
    switch (tendencia) {
      case 'crescendo': return '📈';
      case 'estavel': return '➡️';
      case 'decaindo': return '📉';
      default: return '➡️';
    }
  };

  const getTendenciaColor = (tendencia: string) => {
    switch (tendencia) {
      case 'crescendo': return 'text-green-400';
      case 'estavel': return 'text-yellow-400';
      case 'decaindo': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const exportarRelatorio = () => {
    console.log('Exportando relatório...');
    alert('Relatório exportado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-72 bg-gray-800 backdrop-blur-xl border-r border-gray-700 transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-center">
              <div className="relative">
                <Logo size="md" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Avatar & Level Section */}
          <div className="p-6 border-b border-gray-700">
            <div className="text-center">
              {/* Avatar Simples */}
              <div className="relative mx-auto mb-4 w-16 h-16">
                <div className={`w-16 h-16 bg-gradient-to-br ${currentAvatar.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl">{currentAvatar.emoji}</span>
                </div>
                {/* Level Badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{user.level}</span>
                </div>
              </div>
              
              {/* User Info */}
              <div className="mb-3">
                <p className="text-sm font-medium text-white">{user.name}</p>
                <p className="text-xs text-gray-400">{currentAvatar.title}</p>
              </div>
              
              {/* XP Progress Simples */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{user.xp} XP</span>
                  <span>{user.nextLevelXp - user.xp} restante</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div 
                    className="bg-green-500 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${(user.xp / user.nextLevelXp) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  item.active
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                {item.active && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </a>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-white/10 space-y-2">
            {/* Notifications */}
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition-all duration-200">
              <div className="relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <span className="font-medium">Notificações</span>
            </button>

            {/* Logout */}
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-400 hover:bg-red-500/20 hover:text-red-300 rounded-xl transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="font-medium">Sair</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-gray-800 backdrop-blur-xl border-b border-gray-700 lg:border-l border-gray-700">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Page Title */}
              <div className="flex-1 lg:flex-none">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Relatórios
                </h2>
                <p className="text-sm text-gray-300">Análise detalhada do seu desempenho</p>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-4">
                <select
                  value={tipoRelatorio}
                  onChange={(e) => setTipoRelatorio(e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="geral">Relatório Geral</option>
                  <option value="simulados">Simulados</option>
                  <option value="estudo">Estudo</option>
                  <option value="performance">Performance</option>
                </select>
                <Button
                  onClick={exportarRelatorio}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Exportar PDF
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {/* Filtros */}
            <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Filtros do Relatório</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Atualizado</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Período</label>
                  <select
                    value={periodoSelecionado}
                    onChange={(e) => setPeriodoSelecionado(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="semana">Esta Semana</option>
                    <option value="mes">Este Mês</option>
                    <option value="trimestre">Este Trimestre</option>
                    <option value="ano">Este Ano</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Tipo de Relatório</label>
                  <select
                    value={tipoRelatorio}
                    onChange={(e) => setTipoRelatorio(e.target.value)}
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="geral">Relatório Geral</option>
                    <option value="simulados">Simulados</option>
                    <option value="estudo">Estudo</option>
                    <option value="performance">Performance</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Button
                    onClick={exportarRelatorio}
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Gerar Relatório
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {/* Tempo Total de Estudo */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Tempo de Estudo</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.tempoTotalEstudo}h</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Simulados Realizados */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Simulados</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.simuladosRealizados}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Taxa de Acerto */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Taxa de Acerto</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.taxaAcerto}%</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Questões Respondidas */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Questões</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.questoesRespondidas}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              
              {/* Relatório por Matéria */}
              <div className="xl:col-span-2 space-y-6">
                
                {/* Performance por Matéria */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Performance por Matéria</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-300">Atualizado</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {relatorioMaterias.map((materia, index) => (
                      <div key={index} className="p-6 bg-gray-700/30 rounded-xl border border-gray-600">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <h4 className="text-lg font-semibold text-white">{materia.nome}</h4>
                            <span className={`text-sm ${getTendenciaColor(materia.tendencia)}`}>
                              {getTendenciaIcon(materia.tendencia)}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-white">{materia.taxaAcerto}%</div>
                            <div className="text-xs text-gray-400">taxa de acerto</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400">{materia.tempoEstudo}h</div>
                            <div className="text-xs text-gray-400">tempo de estudo</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400">{materia.simulados}</div>
                            <div className="text-xs text-gray-400">simulados</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-400">{materia.questoesCorretas}/{materia.questoesTotal}</div>
                            <div className="text-xs text-gray-400">questões corretas</div>
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-400">
                          Última atividade: {materia.ultimaAtividade}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Atividades Detalhadas */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Atividades Detalhadas</h3>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white text-sm"
                    >
                      Ver Todas
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {atividadesDetalhadas.map((atividade, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                        <div className={`w-10 h-10 bg-gradient-to-br ${getTipoColor(atividade.tipo)} rounded-lg flex items-center justify-center`}>
                          <span className="text-lg">{getTipoIcon(atividade.tipo)}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium">{atividade.materia}</h4>
                          <p className="text-sm text-gray-400">
                            {atividade.data} • {atividade.duracao}h • {atividade.questoes} questões
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-400">{atividade.taxaAcerto}%</div>
                          <div className="text-xs text-gray-400">{atividade.acertos}/{atividade.questoes}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Resumo Semanal */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Resumo Semanal</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Horas de Estudo</span>
                        <span>{estatisticas.horasPorSemana.reduce((a, b) => a + b, 0)}h</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(estatisticas.horasPorSemana.reduce((a, b) => a + b, 0) / 140) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Simulados</span>
                        <span>{estatisticas.simuladosPorSemana.reduce((a, b) => a + b, 0)}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(estatisticas.simuladosPorSemana.reduce((a, b) => a + b, 0) / 35) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Taxa de Acerto Média</span>
                        <span>{Math.round(estatisticas.taxaAcertoPorSemana.reduce((a, b) => a + b, 0) / estatisticas.taxaAcertoPorSemana.length)}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${Math.round(estatisticas.taxaAcertoPorSemana.reduce((a, b) => a + b, 0) / estatisticas.taxaAcertoPorSemana.length)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insights */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">💡 Insights</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <p className="text-green-300 font-medium">Excelente progresso!</p>
                      <p className="text-green-400 text-xs">Sua taxa de acerto aumentou 5% esta semana</p>
                    </div>
                    <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                      <p className="text-blue-300 font-medium">Foco em Direito Penal</p>
                      <p className="text-blue-400 text-xs">Considere dedicar mais tempo a esta matéria</p>
                    </div>
                    <div className="p-3 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                      <p className="text-yellow-300 font-medium">Mantenha a consistência</p>
                      <p className="text-yellow-400 text-xs">Seu streak de {estatisticas.streakAtual} dias está ótimo!</p>
                    </div>
                  </div>
                </div>

                {/* Metas vs Realizado */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Metas vs Realizado</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Horas de Estudo</span>
                      <span className="text-sm text-white">127.5/120h</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '106%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Simulados</span>
                      <span className="text-sm text-white">15/12</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '125%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Taxa de Acerto</span>
                      <span className="text-sm text-white">87.5%/85%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '103%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
