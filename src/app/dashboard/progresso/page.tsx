"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function ProgressoPage() {
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

  // Estado do progresso
  const [periodoSelecionado, setPeriodoSelecionado] = useState('mes'); // semana, mes, trimestre, ano

  const [estatisticas] = useState({
    tempoTotalEstudo: 127.5,
    simuladosRealizados: 15,
    questoesRespondidas: 1250,
    taxaAcerto: 87.5,
    streakAtual: 23,
    melhorStreak: 45,
    nivelAtual: 12,
    xpTotal: 2450,
    proximoNivel: 3000
  });

  const [progressoMaterias] = useState([
    {
      nome: 'Direito Constitucional',
      horasEstudadas: 45,
      horasMeta: 120,
      questoesCorretas: 180,
      questoesTotal: 200,
      simulados: 5,
      ultimaAtividade: '2024-01-20',
      tendencia: 'crescendo'
    },
    {
      nome: 'Direito Administrativo',
      horasEstudadas: 38,
      horasMeta: 100,
      questoesCorretas: 150,
      questoesTotal: 180,
      simulados: 4,
      ultimaAtividade: '2024-01-19',
      tendencia: 'estavel'
    },
    {
      nome: 'Direito Penal',
      horasEstudadas: 32,
      horasMeta: 80,
      questoesCorretas: 120,
      questoesTotal: 150,
      simulados: 3,
      ultimaAtividade: '2024-01-18',
      tendencia: 'crescendo'
    },
    {
      nome: 'Direito Processual Penal',
      horasEstudadas: 28,
      horasMeta: 80,
      questoesCorretas: 95,
      questoesTotal: 120,
      simulados: 2,
      ultimaAtividade: '2024-01-17',
      tendencia: 'crescendo'
    },
    {
      nome: 'Português',
      horasEstudadas: 25,
      horasMeta: 60,
      questoesCorretas: 85,
      questoesTotal: 100,
      simulados: 3,
      ultimaAtividade: '2024-01-16',
      tendencia: 'estavel'
    }
  ]);

  const [atividadesRecentes] = useState([
    {
      id: 1,
      tipo: 'estudo',
      materia: 'Direito Constitucional',
      duracao: 2.5,
      data: '2024-01-20',
      hora: '14:30',
      descricao: 'Estudo de Direitos Fundamentais'
    },
    {
      id: 2,
      tipo: 'simulado',
      materia: 'Direito Administrativo',
      duracao: 1.5,
      data: '2024-01-20',
      hora: '10:00',
      descricao: 'Simulado - 40 questões',
      nota: 85
    },
    {
      id: 3,
      tipo: 'revisao',
      materia: 'Direito Penal',
      duracao: 1,
      data: '2024-01-19',
      hora: '16:00',
      descricao: 'Revisão de Crimes contra a Vida'
    },
    {
      id: 4,
      tipo: 'estudo',
      materia: 'Português',
      duracao: 1.5,
      data: '2024-01-19',
      hora: '09:00',
      descricao: 'Interpretação de Textos'
    },
    {
      id: 5,
      tipo: 'simulado',
      materia: 'Direito Processual Penal',
      duracao: 1.25,
      data: '2024-01-18',
      hora: '15:30',
      descricao: 'Simulado - 35 questões',
      nota: 78
    }
  ]);

  const [metas] = useState([
    {
      id: 1,
      titulo: 'Meta Semanal de Estudo',
      valorAtual: 18,
      valorMeta: 24,
      unidade: 'horas',
      prazo: '2024-01-28',
      status: 'em_andamento'
    },
    {
      id: 2,
      titulo: 'Simulados do Mês',
      valorAtual: 8,
      valorMeta: 12,
      unidade: 'simulados',
      prazo: '2024-01-31',
      status: 'em_andamento'
    },
    {
      id: 3,
      titulo: 'Taxa de Acerto',
      valorAtual: 87.5,
      valorMeta: 90,
      unidade: '%',
      prazo: '2024-02-15',
      status: 'em_andamento'
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
                  Progresso
                </h2>
                <p className="text-sm text-gray-300">Acompanhe sua evolução</p>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-4">
                <select
                  value={periodoSelecionado}
                  onChange={(e) => setPeriodoSelecionado(e.target.value)}
                  className="px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="semana">Esta Semana</option>
                  <option value="mes">Este Mês</option>
                  <option value="trimestre">Este Trimestre</option>
                  <option value="ano">Este Ano</option>
                </select>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Exportar
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
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

              {/* Streak Atual */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Streak</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.streakAtual}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              
              {/* Progresso por Matéria */}
              <div className="xl:col-span-2 space-y-6">
                
                {/* Progresso Detalhado */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Progresso por Matéria</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-300">Atualizado</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {progressoMaterias.map((materia, index) => (
                      <div key={index} className="p-6 bg-gray-700/30 rounded-xl border border-gray-600">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <h4 className="text-lg font-semibold text-white">{materia.nome}</h4>
                            <span className={`text-sm ${getTendenciaColor(materia.tendencia)}`}>
                              {getTendenciaIcon(materia.tendencia)}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-400">
                              {materia.horasEstudadas}/{materia.horasMeta}h
                            </div>
                            <div className="text-xs text-gray-500">
                              {Math.round((materia.horasEstudadas / materia.horasMeta) * 100)}% concluído
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          {/* Barra de Progresso de Horas */}
                          <div>
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>Horas de Estudo</span>
                              <span>{materia.horasEstudadas}h</span>
                            </div>
                            <div className="w-full bg-gray-600 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${(materia.horasEstudadas / materia.horasMeta) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                          
                          {/* Barra de Progresso de Questões */}
                          <div>
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>Questões Corretas</span>
                              <span>{materia.questoesCorretas}/{materia.questoesTotal}</span>
                            </div>
                            <div className="w-full bg-gray-600 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${(materia.questoesCorretas / materia.questoesTotal) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
                          <span>Simulados: {materia.simulados}</span>
                          <span>Última atividade: {materia.ultimaAtividade}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Atividades Recentes */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Atividades Recentes</h3>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white text-sm"
                    >
                      Ver Todas
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {atividadesRecentes.map((atividade) => (
                      <div key={atividade.id} className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                        <div className={`w-10 h-10 bg-gradient-to-br ${getTipoColor(atividade.tipo)} rounded-lg flex items-center justify-center`}>
                          <span className="text-lg">{getTipoIcon(atividade.tipo)}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium">{atividade.descricao}</h4>
                          <p className="text-sm text-gray-400">
                            {atividade.materia} • {atividade.duracao}h • {atividade.data} às {atividade.hora}
                          </p>
                        </div>
                        {atividade.nota && (
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-400">{atividade.nota}%</div>
                            <div className="text-xs text-gray-400">nota</div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Metas */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Metas</h3>
                  <div className="space-y-4">
                    {metas.map((meta) => (
                      <div key={meta.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-300">{meta.titulo}</span>
                          <span className="text-sm text-gray-400">
                            {meta.valorAtual}/{meta.valorMeta} {meta.unidade}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(meta.valorAtual / meta.valorMeta) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-400">
                          {Math.round((meta.valorAtual / meta.valorMeta) * 100)}% • Prazo: {meta.prazo}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nível e XP */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Nível e XP</h3>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-white mb-1">Nível {estatisticas.nivelAtual}</div>
                    <div className="text-sm text-gray-400">{currentAvatar.title}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>XP Atual</span>
                      <span>{estatisticas.xpTotal} XP</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${(estatisticas.xpTotal / estatisticas.proximoNivel) * 100}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400 text-center">
                      {estatisticas.proximoNivel - estatisticas.xpTotal} XP para o próximo nível
                    </div>
                  </div>
                </div>

                {/* Conquistas */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">🏆 Conquistas</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-sm">🔥</span>
                      </div>
                      <div>
                        <div className="text-sm text-white font-medium">Streak Master</div>
                        <div className="text-xs text-gray-400">Melhor streak: {estatisticas.melhorStreak} dias</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-sm">📚</span>
                      </div>
                      <div>
                        <div className="text-sm text-white font-medium">Estudioso</div>
                        <div className="text-xs text-gray-400">{estatisticas.questoesRespondidas} questões respondidas</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-sm">🎯</span>
                      </div>
                      <div>
                        <div className="text-sm text-white font-medium">Precisão</div>
                        <div className="text-xs text-gray-400">Taxa de acerto: {estatisticas.taxaAcerto}%</div>
                      </div>
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
