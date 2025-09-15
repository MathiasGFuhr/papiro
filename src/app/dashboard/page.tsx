"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function DashboardPage() {
  const [user, setUser] = useState({
    name: 'Carlos Silva',
    email: 'carlos@papirotatico.com',
    plan: 'Premium',
    progress: 78,
    avatar: 'CS'
  });

  const [stats, setStats] = useState({
    totalStudyTime: '127h 45min',
    completedTopics: 89,
    totalTopics: 120,
    streak: 23,
    efficiency: 94,
    accuracy: 87
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, action: 'Concluído: Direito Constitucional - Módulo 5', time: '2 horas atrás', type: 'completed', score: 95 },
    { id: 2, action: 'Simulado: Português - 50 questões', time: 'Ontem', type: 'quiz', score: 88 },
    { id: 3, action: 'Revisão: Matemática Financeira', time: '2 dias atrás', type: 'review', score: 92 },
    { id: 4, action: 'Iniciado: Direito Penal - Módulo 3', time: '3 dias atrás', type: 'started', score: null }
  ]);

  const [upcomingTasks, setUpcomingTasks] = useState([
    { id: 1, title: 'Direito Administrativo - Aula 7', time: '14:00', priority: 'high', duration: '2h' },
    { id: 2, title: 'Simulado: Raciocínio Lógico', time: '16:00', priority: 'medium', duration: '1h 30min' },
    { id: 3, title: 'Revisão: Português', time: '18:00', priority: 'low', duration: '1h' }
  ]);

  const [weeklyProgress, setWeeklyProgress] = useState([
    { day: 'Seg', hours: 3.5, completed: true },
    { day: 'Ter', hours: 4.2, completed: true },
    { day: 'Qua', hours: 2.8, completed: true },
    { day: 'Qui', hours: 5.1, completed: true },
    { day: 'Sex', hours: 3.9, completed: true },
    { day: 'Sáb', hours: 2.5, completed: false },
    { day: 'Dom', hours: 0, completed: false }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Premium */}
      <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Logo size="sm" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Dashboard
                </h1>
                <p className="text-sm text-gray-400">Sistema de Controle de Estudos</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Notifications */}
              <div className="relative">
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>

              {/* User Profile */}
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-white">{user.name}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">{user.plan}</span>
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg font-bold">{user.avatar}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

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
          <div className="group relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
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
          <div className="group relative overflow-hidden bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
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
          <div className="group relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
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
          <div className="group relative overflow-hidden bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300">
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
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
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
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Atividade Recente</h3>
                <Link href="/dashboard/atividade" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
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
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
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

            {/* Quick Actions */}
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <Link href="/dashboard/cronograma">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0">
                    📅 Ver Cronograma
                  </Button>
                </Link>
                <Link href="/dashboard/progresso">
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 border-0">
                    📊 Análise de Progresso
                  </Button>
                </Link>
                <Link href="/dashboard/concursos">
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 border-0">
                    🎯 Meus Concursos
                  </Button>
                </Link>
                <Link href="/dashboard/relatorios">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0">
                    📈 Relatórios
                  </Button>
                </Link>
              </div>
            </div>

            {/* Profile Actions */}
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Conta</h3>
              <div className="space-y-3">
                <Link href="/dashboard/perfil">
                  <Button className="w-full" variant="outline">
                    👤 Meu Perfil
                  </Button>
                </Link>
                <Link href="/dashboard/configuracoes">
                  <Button className="w-full" variant="outline">
                    ⚙️ Configurações
                  </Button>
                </Link>
                <Button className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30">
                  🚪 Sair
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
