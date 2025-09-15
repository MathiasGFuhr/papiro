"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function ConfiguracoesPage() {
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

  // Estado das configurações
  const [settings, setSettings] = useState({
    // Perfil
    nome: 'Mathias Fuhr',
    email: 'mathias@papirotatico.com',
    telefone: '(11) 99999-9999',
    avatar: 'MF',
    
    // Notificações
    notificacoesEmail: true,
    notificacoesPush: true,
    lembretesEstudo: true,
    notificacoesSimulados: true,
    
    // Preferências de Estudo
    tempoEstudoDiario: 4,
    diasEstudoSemana: 6,
    horarioPreferido: 'manha',
    nivelDificuldade: 'medio',
    
    // Privacidade
    perfilPublico: false,
    compartilharProgresso: false,
    mostrarEstatisticas: true,
    
    // Aparência
    tema: 'claro',
    tamanhoFonte: 'medio',
    animacoes: true,
    
    // Segurança
    autenticacaoDoisFatores: false,
    sessaoLembrar: true,
    logoutAutomatico: 30
  });

  const handleInputChange = (field: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Configurações salvas:', settings);
    alert('Configurações salvas com sucesso!');
  };

  const handleReset = () => {
    if (confirm('Tem certeza que deseja redefinir todas as configurações?')) {
      setSettings({
        nome: 'Mathias Fuhr',
        email: 'mathias@papirotatico.com',
        telefone: '(11) 99999-9999',
        avatar: 'MF',
        notificacoesEmail: true,
        notificacoesPush: true,
        lembretesEstudo: true,
        notificacoesSimulados: true,
        tempoEstudoDiario: 4,
        diasEstudoSemana: 6,
        horarioPreferido: 'manha',
        nivelDificuldade: 'medio',
        perfilPublico: false,
        compartilharProgresso: false,
        mostrarEstatisticas: true,
        tema: 'claro',
        tamanhoFonte: 'medio',
        animacoes: true,
        autenticacaoDoisFatores: false,
        sessaoLembrar: true,
        logoutAutomatico: 30
      });
    }
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
                  Configurações
                </h2>
                <p className="text-sm text-gray-300">Gerencie suas preferências</p>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Redefinir
                </Button>
                <Button
                  onClick={handleSave}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Salvar
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {/* Configurações Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Perfil */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Perfil</h3>
                    <p className="text-sm text-gray-400">Informações pessoais</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                    <input
                      type="text"
                      value={settings.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={settings.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Notificações */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Notificações</h3>
                    <p className="text-sm text-gray-400">Preferências de alertas</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <p className="text-sm text-gray-400">Notificações por email</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notificacoesEmail}
                      onChange={(e) => handleInputChange('notificacoesEmail', e.target.checked)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                    <div>
                      <h4 className="text-white font-medium">Push</h4>
                      <p className="text-sm text-gray-400">Notificações no navegador</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notificacoesPush}
                      onChange={(e) => handleInputChange('notificacoesPush', e.target.checked)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                    <div>
                      <h4 className="text-white font-medium">Lembretes</h4>
                      <p className="text-sm text-gray-400">Lembretes de estudo</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.lembretesEstudo}
                      onChange={(e) => handleInputChange('lembretesEstudo', e.target.checked)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                    <div>
                      <h4 className="text-white font-medium">Simulados</h4>
                      <p className="text-sm text-gray-400">Novos simulados</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.notificacoesSimulados}
                      onChange={(e) => handleInputChange('notificacoesSimulados', e.target.checked)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                    />
                  </div>
                </div>
              </div>

              {/* Preferências de Estudo */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Estudo</h3>
                    <p className="text-sm text-gray-400">Rotina de estudos</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tempo Diário</label>
                    <select
                      value={settings.tempoEstudoDiario}
                      onChange={(e) => handleInputChange('tempoEstudoDiario', parseInt(e.target.value))}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value={1}>1 hora</option>
                      <option value={2}>2 horas</option>
                      <option value={3}>3 horas</option>
                      <option value={4}>4 horas</option>
                      <option value={5}>5 horas</option>
                      <option value={6}>6 horas</option>
                      <option value={8}>8 horas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Dias por Semana</label>
                    <select
                      value={settings.diasEstudoSemana}
                      onChange={(e) => handleInputChange('diasEstudoSemana', parseInt(e.target.value))}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value={3}>3 dias</option>
                      <option value={4}>4 dias</option>
                      <option value={5}>5 dias</option>
                      <option value={6}>6 dias</option>
                      <option value={7}>7 dias</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Horário</label>
                    <select
                      value={settings.horarioPreferido}
                      onChange={(e) => handleInputChange('horarioPreferido', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="manha">Manhã (6h - 12h)</option>
                      <option value="tarde">Tarde (12h - 18h)</option>
                      <option value="noite">Noite (18h - 24h)</option>
                      <option value="madrugada">Madrugada (0h - 6h)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Dificuldade</label>
                    <select
                      value={settings.nivelDificuldade}
                      onChange={(e) => handleInputChange('nivelDificuldade', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="facil">Fácil</option>
                      <option value="medio">Médio</option>
                      <option value="dificil">Difícil</option>
                      <option value="avancado">Avançado</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Aparência */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Aparência</h3>
                    <p className="text-sm text-gray-400">Interface e visual</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tema</label>
                    <select
                      value={settings.tema}
                      onChange={(e) => handleInputChange('tema', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="claro">Claro</option>
                      <option value="escuro">Escuro</option>
                      <option value="auto">Automático</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Fonte</label>
                    <select
                      value={settings.tamanhoFonte}
                      onChange={(e) => handleInputChange('tamanhoFonte', e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="pequeno">Pequeno</option>
                      <option value="medio">Médio</option>
                      <option value="grande">Grande</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-xl">
                    <div>
                      <h4 className="text-white font-medium">Animações</h4>
                      <p className="text-sm text-gray-400">Efeitos visuais</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.animacoes}
                      onChange={(e) => handleInputChange('animacoes', e.target.checked)}
                      className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                    />
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
