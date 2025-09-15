"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function DashboardPage() {
  const [user, setUser] = useState({
    name: 'Usuário',
    email: 'usuario@papirotatico.com',
    plan: 'Gratuito',
    progress: 65
  });

  const [stats, setStats] = useState({
    totalStudyTime: '24h 30min',
    completedTopics: 45,
    totalTopics: 120,
    streak: 7
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, action: 'Concluído: Direito Constitucional', time: '2 horas atrás', type: 'completed' },
    { id: 2, action: 'Iniciado: Direito Penal', time: 'Ontem', type: 'started' },
    { id: 3, action: 'Simulado: Português', time: '2 dias atrás', type: 'quiz' },
    { id: 4, action: 'Revisão: Matemática', time: '3 dias atrás', type: 'review' }
  ]);

  const [upcomingTasks, setUpcomingTasks] = useState([
    { id: 1, title: 'Direito Administrativo - Aula 3', time: '14:00', priority: 'high' },
    { id: 2, title: 'Revisão: Português', time: '16:00', priority: 'medium' },
    { id: 3, title: 'Simulado: Raciocínio Lógico', time: '18:00', priority: 'low' }
  ]);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header do Dashboard */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Logo size="sm" />
              <h1 className="ml-4 text-xl font-semibold text-white">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-300">Olá, {user.name}</p>
                <p className="text-xs text-gray-400">{user.plan}</p>
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            Bem-vindo de volta, {user.name}! 👋
          </h2>
          <p className="text-gray-300">
            Continue sua jornada rumo à aprovação. Você está indo muito bem!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-white">{stats.totalStudyTime}</p>
                <p className="text-gray-400 text-sm">Tempo de Estudo</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-white">{stats.completedTopics}</p>
                <p className="text-gray-400 text-sm">Tópicos Concluídos</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-white">{stats.streak}</p>
                <p className="text-gray-400 text-sm">Dias Consecutivos</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-white">{user.progress}%</p>
                <p className="text-gray-400 text-sm">Progresso Geral</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Bar */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Seu Progresso</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-300 mb-2">
                  <span>Progresso Geral</span>
                  <span>{user.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-red-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${user.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Tópicos Concluídos</p>
                  <p className="text-white font-semibold">{stats.completedTopics}/{stats.totalTopics}</p>
                </div>
                <div>
                  <p className="text-gray-400">Tempo de Estudo</p>
                  <p className="text-white font-semibold">{stats.totalStudyTime}</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Atividade Recente</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'completed' ? 'bg-green-500' :
                      activity.type === 'started' ? 'bg-blue-500' :
                      activity.type === 'quiz' ? 'bg-yellow-500' : 'bg-purple-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.action}</p>
                      <p className="text-gray-400 text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Próximas Tarefas</h3>
              <div className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-white text-sm">{task.title}</p>
                      <p className="text-gray-400 text-xs">{task.time}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      task.priority === 'high' ? 'bg-red-500' :
                      task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <Link href="/dashboard/cronograma">
                  <Button className="w-full" variant="outline">
                    Ver Cronograma
                  </Button>
                </Link>
                <Link href="/dashboard/progresso">
                  <Button className="w-full" variant="outline">
                    Análise de Progresso
                  </Button>
                </Link>
                <Link href="/dashboard/concursos">
                  <Button className="w-full" variant="outline">
                    Meus Concursos
                  </Button>
                </Link>
                <Link href="/dashboard/relatorios">
                  <Button className="w-full" variant="outline">
                    Relatórios
                  </Button>
                </Link>
              </div>
            </div>

            {/* Profile Actions */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Conta</h3>
              <div className="space-y-3">
                <Link href="/dashboard/perfil">
                  <Button className="w-full" variant="secondary">
                    Meu Perfil
                  </Button>
                </Link>
                <Link href="/dashboard/configuracoes">
                  <Button className="w-full" variant="secondary">
                    Configurações
                  </Button>
                </Link>
                <Button className="w-full" variant="outline">
                  Sair
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
