"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function SimuladosPage() {
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

  // Estado dos simulados
  const [filtros, setFiltros] = useState({
    concurso: '',
    materia: '',
    status: 'todos', // todos, disponivel, realizado, favorito
    dificuldade: 'todos' // todos, facil, medio, dificil
  });

  const [simulados] = useState([
    {
      id: 1,
      titulo: 'Simulado PRF - Direito Constitucional',
      concurso: 'PRF',
      materia: 'Direito Constitucional',
      questoes: 50,
      tempo: 90,
      dificuldade: 'medio',
      status: 'disponivel',
      favorito: false,
      dataCriacao: '2024-01-15',
      descricao: 'Simulado focado em Direito Constitucional para PRF com questões atualizadas'
    },
    {
      id: 2,
      titulo: 'Simulado PF - Direito Penal',
      concurso: 'PF',
      materia: 'Direito Penal',
      questoes: 40,
      tempo: 75,
      dificuldade: 'dificil',
      status: 'realizado',
      favorito: true,
      dataCriacao: '2024-01-10',
      descricao: 'Simulado avançado de Direito Penal para Polícia Federal',
      nota: 85,
      dataRealizacao: '2024-01-20'
    },
    {
      id: 3,
      titulo: 'Simulado DEPEN - Direito Administrativo',
      concurso: 'DEPEN',
      materia: 'Direito Administrativo',
      questoes: 35,
      tempo: 60,
      dificuldade: 'facil',
      status: 'disponivel',
      favorito: false,
      dataCriacao: '2024-01-12',
      descricao: 'Simulado básico de Direito Administrativo para DEPEN'
    },
    {
      id: 4,
      titulo: 'Simulado Polícia Civil - Português',
      concurso: 'Polícia Civil',
      materia: 'Português',
      questoes: 30,
      tempo: 45,
      dificuldade: 'medio',
      status: 'realizado',
      favorito: false,
      dataCriacao: '2024-01-08',
      descricao: 'Simulado de Português para Polícia Civil',
      nota: 92,
      dataRealizacao: '2024-01-18'
    },
    {
      id: 5,
      titulo: 'Simulado PRF - Legislação de Trânsito',
      concurso: 'PRF',
      materia: 'Legislação de Trânsito',
      questoes: 25,
      tempo: 40,
      dificuldade: 'medio',
      status: 'disponivel',
      favorito: true,
      dataCriacao: '2024-01-14',
      descricao: 'Simulado específico de Legislação de Trânsito para PRF'
    }
  ]);

  const [estatisticas] = useState({
    totalSimulados: 5,
    simuladosRealizados: 2,
    mediaGeral: 88.5,
    melhorNota: 92,
    tempoMedio: 67.5,
    questoesCorretas: 75,
    questoesTotal: 85
  });

  const handleFiltroChange = (campo: string, valor: string) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const iniciarSimulado = (simuladoId: number) => {
    console.log('Iniciando simulado:', simuladoId);
    alert('Redirecionando para o simulado...');
  };

  const toggleFavorito = (simuladoId: number) => {
    console.log('Alternando favorito:', simuladoId);
    alert('Favorito atualizado!');
  };

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

  const getDificuldadeColor = (dificuldade: string) => {
    switch (dificuldade) {
      case 'facil': return 'text-green-400 bg-green-400/20';
      case 'medio': return 'text-yellow-400 bg-yellow-400/20';
      case 'dificil': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'disponivel': return 'text-blue-400 bg-blue-400/20';
      case 'realizado': return 'text-green-400 bg-green-400/20';
      case 'favorito': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getConcursoColor = (concurso: string) => {
    switch (concurso) {
      case 'PRF': return 'from-blue-500 to-cyan-500';
      case 'PF': return 'from-red-500 to-pink-500';
      case 'DEPEN': return 'from-purple-500 to-indigo-500';
      case 'Polícia Civil': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  // Filtrar simulados
  const simuladosFiltrados = simulados.filter(simulado => {
    if (filtros.concurso && simulado.concurso !== filtros.concurso) return false;
    if (filtros.materia && simulado.materia !== filtros.materia) return false;
    if (filtros.dificuldade !== 'todos' && simulado.dificuldade !== filtros.dificuldade) return false;
    if (filtros.status === 'favorito' && !simulado.favorito) return false;
    if (filtros.status === 'realizado' && simulado.status !== 'realizado') return false;
    if (filtros.status === 'disponivel' && simulado.status !== 'disponivel') return false;
    return true;
  });

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
                  Simulados
                </h2>
                <p className="text-sm text-gray-300">Teste seus conhecimentos</p>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Histórico
                </Button>
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Novo Simulado
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
              {/* Total de Simulados */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Total de Simulados</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.totalSimulados}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Simulados Realizados */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Realizados</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.simuladosRealizados}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Média Geral */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Média Geral</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.mediaGeral}%</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Melhor Nota */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Melhor Nota</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.melhorNota}%</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
              
              {/* Lista de Simulados */}
              <div className="xl:col-span-3 space-y-6">
                
                {/* Filtros */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Filtros</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Concurso</label>
                      <select
                        value={filtros.concurso}
                        onChange={(e) => handleFiltroChange('concurso', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Todos os concursos</option>
                        <option value="PRF">PRF</option>
                        <option value="PF">PF</option>
                        <option value="DEPEN">DEPEN</option>
                        <option value="Polícia Civil">Polícia Civil</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Matéria</label>
                      <select
                        value={filtros.materia}
                        onChange={(e) => handleFiltroChange('materia', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Todas as matérias</option>
                        <option value="Direito Constitucional">Direito Constitucional</option>
                        <option value="Direito Administrativo">Direito Administrativo</option>
                        <option value="Direito Penal">Direito Penal</option>
                        <option value="Direito Processual Penal">Direito Processual Penal</option>
                        <option value="Direito Civil">Direito Civil</option>
                        <option value="Português">Português</option>
                        <option value="Legislação de Trânsito">Legislação de Trânsito</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                      <select
                        value={filtros.status}
                        onChange={(e) => handleFiltroChange('status', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="todos">Todos</option>
                        <option value="disponivel">Disponíveis</option>
                        <option value="realizado">Realizados</option>
                        <option value="favorito">Favoritos</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Dificuldade</label>
                      <select
                        value={filtros.dificuldade}
                        onChange={(e) => handleFiltroChange('dificuldade', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="todos">Todas</option>
                        <option value="facil">Fácil</option>
                        <option value="medio">Médio</option>
                        <option value="dificil">Difícil</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Lista de Simulados */}
                <div className="space-y-4">
                  {simuladosFiltrados.map((simulado) => (
                    <div key={simulado.id} className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className={`w-10 h-10 bg-gradient-to-br ${getConcursoColor(simulado.concurso)} rounded-lg flex items-center justify-center`}>
                              <span className="text-white font-bold text-sm">{simulado.concurso}</span>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-white">{simulado.titulo}</h3>
                              <p className="text-sm text-gray-400">{simulado.descricao}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span className="text-sm text-gray-300">{simulado.questoes} questões</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-sm text-gray-300">{simulado.tempo} min</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDificuldadeColor(simulado.dificuldade)}`}>
                                {simulado.dificuldade === 'facil' ? 'Fácil' : 
                                 simulado.dificuldade === 'medio' ? 'Médio' : 'Difícil'}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(simulado.status)}`}>
                                {simulado.status === 'disponivel' ? 'Disponível' : 
                                 simulado.status === 'realizado' ? 'Realizado' : 'Favorito'}
                              </span>
                            </div>
                          </div>

                          {simulado.status === 'realizado' && (
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm text-green-400 font-medium">Nota: {simulado.nota}%</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm text-gray-400">Realizado em {simulado.dataRealizacao}</span>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => toggleFavorito(simulado.id)}
                            className={`p-2 rounded-lg transition-colors ${
                              simulado.favorito 
                                ? 'text-yellow-400 bg-yellow-400/20' 
                                : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/20'
                            }`}
                          >
                            <svg className="w-5 h-5" fill={simulado.favorito ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          </button>
                          
                          {simulado.status === 'disponivel' && (
                            <Button
                              onClick={() => iniciarSimulado(simulado.id)}
                              className="bg-red-600 hover:bg-red-700 text-white"
                            >
                              Iniciar
                            </Button>
                          )}
                          
                          {simulado.status === 'realizado' && (
                            <Button
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                              Ver Resultado
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Estatísticas Rápidas */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Estatísticas Rápidas</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Questões Corretas</span>
                      <span className="text-white font-bold">{estatisticas.questoesCorretas}/{estatisticas.questoesTotal}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Tempo Médio</span>
                      <span className="text-white font-bold">{estatisticas.tempoMedio} min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Taxa de Acerto</span>
                      <span className="text-white font-bold">
                        {Math.round((estatisticas.questoesCorretas / estatisticas.questoesTotal) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dicas para Simulados */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">💡 Dicas</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>• Leia todas as alternativas antes de responder</p>
                    <p>• Gerencie bem o tempo durante o simulado</p>
                    <p>• Revise as questões que teve dúvida</p>
                    <p>• Analise seus erros para melhorar</p>
                  </div>
                </div>

                {/* Próximos Simulados */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Próximos Simulados</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-700/30 rounded-lg">
                      <div className="text-sm text-white font-medium">PRF - Direito Administrativo</div>
                      <div className="text-xs text-gray-400">Amanhã às 14:00</div>
                    </div>
                    <div className="p-3 bg-gray-700/30 rounded-lg">
                      <div className="text-sm text-white font-medium">PF - Direito Penal</div>
                      <div className="text-xs text-gray-400">Quinta às 16:00</div>
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
