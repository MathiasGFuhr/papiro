"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import SearchBar from '@/components/ui/SearchBar';

export default function DashboardPage() {
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
    avatarStyle: 'warrior' // warrior, mage, archer, scholar
  });

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

  const [stats] = useState({
    totalStudyTime: '127h 45min',
    completedTopics: 89,
    totalTopics: 120,
    streak: 23,
    efficiency: 94,
    accuracy: 87
  });

  const [recentActivity] = useState([
    { id: 1, action: 'Concluído: Direito Constitucional - Módulo 5', time: '2 horas atrás', type: 'completed', score: 95 },
    { id: 2, action: 'Simulado: Português - 50 questões', time: 'Ontem', type: 'quiz', score: 88 },
    { id: 3, action: 'Revisão: Matemática Financeira', time: '2 dias atrás', type: 'review', score: 92 },
    { id: 4, action: 'Iniciado: Direito Penal - Módulo 3', time: '3 dias atrás', type: 'started', score: null }
  ]);

  const [upcomingTasks] = useState([
    { id: 1, title: 'Direito Administrativo - Aula 7', time: '14:00', priority: 'high', duration: '2h' },
    { id: 2, title: 'Simulado: Raciocínio Lógico', time: '16:00', priority: 'medium', duration: '1h 30min' },
    { id: 3, title: 'Revisão: Português', time: '18:00', priority: 'low', duration: '1h' }
  ]);

  const [weeklyProgress] = useState([
    { day: 'Seg', hours: 3.5, completed: true },
    { day: 'Ter', hours: 4.2, completed: true },
    { day: 'Qua', hours: 2.8, completed: true },
    { day: 'Qui', hours: 5.1, completed: true },
    { day: 'Sex', hours: 3.9, completed: true },
    { day: 'Sáb', hours: 2.5, completed: false },
    { day: 'Dom', hours: 0, completed: false }
  ]);

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
              <Link
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
              </Link>
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
                  Visão Geral
                </h2>
                <p className="text-sm text-gray-300">Dashboard do seu progresso</p>
              </div>

              {/* Search Bar */}
              <div className="hidden md:block flex-1 max-w-md mx-8">
                <SearchBar 
                  placeholder="Buscar simulados, materiais, cronograma..."
                  className="w-full"
                />
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-4">
                <Link href="/dashboard/configuracoes" className="p-2 text-gray-400 hover:text-white transition-colors" title="Configurações">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Welcome */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">
                Olá, {user.name}! 👋
              </h2>
              <p className="text-xl text-gray-300">
                Continue sua jornada rumo à aprovação. Você está indo <span className="text-green-400 font-semibold">excepcionalmente</span> bem!
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stats.streak}</div>
                  <div className="text-sm text-gray-300">Dias Consecutivos</div>
                  <div className="text-xs text-green-400 mt-1">🔥 Streak Ativo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Study Time */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-red-600/20 to-red-700/20 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">+12%</div>
                  <div className="text-xs text-green-400">vs semana passada</div>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stats.totalStudyTime}</div>
              <div className="text-sm text-gray-300">Tempo Total de Estudo</div>
            </div>
          </div>

          {/* Completed Topics */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-gray-600/20 to-gray-700/20 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">{Math.round((stats.completedTopics / stats.totalTopics) * 100)}%</div>
                  <div className="text-xs text-green-400">concluído</div>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stats.completedTopics}</div>
              <div className="text-sm text-gray-300">Tópicos Concluídos</div>
            </div>
          </div>

          {/* Efficiency */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">+5%</div>
                  <div className="text-xs text-green-400">vs mês passado</div>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stats.efficiency}%</div>
              <div className="text-sm text-gray-300">Eficiência de Estudo</div>
            </div>
          </div>

          {/* Accuracy */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-gray-700/20 to-gray-800/20 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">+3%</div>
                  <div className="text-xs text-green-400">vs mês passado</div>
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stats.accuracy}%</div>
              <div className="text-sm text-gray-300">Precisão em Simulados</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-3 space-y-8">
            {/* Progress Overview */}
            <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Visão Geral do Progresso</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Em andamento</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Overall Progress */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-white">Progresso Geral</span>
                    <span className="text-2xl font-bold text-white">{user.progress}%</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-700/50 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-1000 ease-out shadow-lg"
                        style={{ width: `${user.progress}%` }}
                      ></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>{stats.completedTopics} concluídos</span>
                    <span>{stats.totalTopics - stats.completedTopics} restantes</span>
                  </div>
                </div>

                {/* Weekly Progress */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Progresso Semanal</h4>
                  <div className="space-y-3">
                    {weeklyProgress.map((day, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-300 w-8">{day.day}</span>
                        <div className="flex-1 mx-4">
                          <div className="w-full bg-gray-700/50 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-500 ${
                                day.completed 
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                                  : 'bg-gray-600'
                              }`}
                              style={{ width: `${day.completed ? (day.hours / 5) * 100 : 0}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-300 w-12 text-right">
                          {day.hours > 0 ? `${day.hours}h` : '-'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Atividade Recente</h3>
                <Link href="/dashboard/atividade" className="text-red-400 hover:text-red-300 text-sm font-medium">
                  Ver todas →
                </Link>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="group flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200">
                    <div className={`w-3 h-3 rounded-full ${
                      activity.type === 'completed' ? 'bg-green-500' :
                      activity.type === 'started' ? 'bg-blue-500' :
                      activity.type === 'quiz' ? 'bg-yellow-500' : 'bg-purple-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{activity.action}</p>
                      <p className="text-gray-400 text-sm">{activity.time}</p>
                    </div>
                    {activity.score && (
                      <div className="text-right">
                        <div className="text-lg font-bold text-white">{activity.score}%</div>
                        <div className="text-xs text-gray-400">pontuação</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Próximas Tarefas</h3>
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-medium text-sm">{task.title}</h4>
                      <div className={`w-2 h-2 rounded-full ${
                        task.priority === 'high' ? 'bg-red-500' :
                        task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{task.time}</span>
                      <span>{task.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Resumo Rápido</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Streak Atual</span>
                  <span className="text-white font-bold">{stats.streak} dias</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Eficiência</span>
                  <span className="text-white font-bold">{stats.efficiency}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm">Precisão</span>
                  <span className="text-white font-bold">{stats.accuracy}%</span>
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
