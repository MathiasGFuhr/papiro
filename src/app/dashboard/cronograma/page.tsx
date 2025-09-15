"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function CronogramaPage() {
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

  // Estado do cronograma
  const [cronograma, setCronograma] = useState({
    // Configurações do cronograma
    dataInicio: '2024-01-15',
    dataFim: '2024-12-15',
    horasPorDia: 4,
    diasPorSemana: 6,
    
    // Matérias
    materias: [
      { id: 1, nome: 'Direito Constitucional', peso: 25, horas: 120, concluido: 45 },
      { id: 2, nome: 'Direito Administrativo', peso: 20, horas: 100, concluido: 30 },
      { id: 3, nome: 'Direito Penal', peso: 15, horas: 80, concluido: 20 },
      { id: 4, nome: 'Direito Processual Penal', peso: 15, horas: 80, concluido: 15 },
      { id: 5, nome: 'Direito Civil', peso: 10, horas: 60, concluido: 10 },
      { id: 6, nome: 'Direito Processual Civil', peso: 10, horas: 60, concluido: 5 },
      { id: 7, nome: 'Português', peso: 5, horas: 40, concluido: 25 }
    ]
  });

  const [novoEvento, setNovoEvento] = useState({
    titulo: '',
    materia: '',
    data: '',
    hora: '',
    duracao: 2,
    tipo: 'estudo',
    descricao: ''
  });

  const [eventos] = useState([
    {
      id: 1,
      titulo: 'Direito Constitucional - Módulo 5',
      materia: 'Direito Constitucional',
      data: '2024-01-20',
      hora: '09:00',
      duracao: 2,
      tipo: 'estudo',
      concluido: false
    },
    {
      id: 2,
      titulo: 'Simulado: Português',
      materia: 'Português',
      data: '2024-01-21',
      hora: '14:00',
      duracao: 3,
      tipo: 'simulado',
      concluido: false
    },
    {
      id: 3,
      titulo: 'Revisão: Direito Penal',
      materia: 'Direito Penal',
      data: '2024-01-22',
      hora: '16:00',
      duracao: 1.5,
      tipo: 'revisao',
      concluido: true
    }
  ]);

  const handleInputChange = (field: string, value: any) => {
    setCronograma(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNovoEventoChange = (field: string, value: any) => {
    setNovoEvento(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const adicionarEvento = () => {
    if (novoEvento.titulo && novoEvento.data && novoEvento.hora) {
      console.log('Novo evento adicionado:', novoEvento);
      setNovoEvento({
        titulo: '',
        materia: '',
        data: '',
        hora: '',
        duracao: 2,
        tipo: 'estudo',
        descricao: ''
      });
      alert('Evento adicionado com sucesso!');
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  };

  const marcarConcluido = (eventoId: number) => {
    console.log('Evento concluído:', eventoId);
    alert('Evento marcado como concluído!');
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

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'estudo': return '📚';
      case 'simulado': return '📝';
      case 'revisao': return '🔄';
      case 'prova': return '📋';
      default: return '📅';
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'estudo': return 'from-blue-500 to-cyan-500';
      case 'simulado': return 'from-green-500 to-emerald-500';
      case 'revisao': return 'from-purple-500 to-pink-500';
      case 'prova': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
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
                  Cronograma
                </h2>
                <p className="text-sm text-gray-300">Organize seus estudos</p>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Exportar
                </Button>
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Novo Evento
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
              {/* Total de Horas */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Total de Horas</p>
                    <p className="text-2xl font-bold text-white">540h</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Progresso Geral */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Progresso</p>
                    <p className="text-2xl font-bold text-white">32%</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Eventos Hoje */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Hoje</p>
                    <p className="text-2xl font-bold text-white">3</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Streak */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Streak</p>
                    <p className="text-2xl font-bold text-white">23</p>
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
              
              {/* Calendário e Eventos */}
              <div className="xl:col-span-2 space-y-6">
                
                {/* Próximos Eventos */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Próximos Eventos</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-300">Ativo</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {eventos.map((evento) => (
                      <div key={evento.id} className={`p-4 rounded-xl border transition-all duration-200 ${
                        evento.concluido 
                          ? 'bg-gray-700/30 border-gray-600' 
                          : 'bg-white/5 border-gray-600 hover:bg-white/10'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 bg-gradient-to-br ${getTipoColor(evento.tipo)} rounded-lg flex items-center justify-center`}>
                              <span className="text-lg">{getTipoIcon(evento.tipo)}</span>
                            </div>
                            <div>
                              <h4 className={`font-medium ${evento.concluido ? 'text-gray-400 line-through' : 'text-white'}`}>
                                {evento.titulo}
                              </h4>
                              <p className="text-sm text-gray-400">
                                {evento.data} às {evento.hora} • {evento.duracao}h • {evento.materia}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {!evento.concluido && (
                              <button
                                onClick={() => marcarConcluido(evento.id)}
                                className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
                              >
                                Concluir
                              </button>
                            )}
                            {evento.concluido && (
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Novo Evento */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Adicionar Novo Evento</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Título</label>
                      <input
                        type="text"
                        value={novoEvento.titulo}
                        onChange={(e) => handleNovoEventoChange('titulo', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ex: Direito Constitucional - Módulo 5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Matéria</label>
                      <select
                        value={novoEvento.materia}
                        onChange={(e) => handleNovoEventoChange('materia', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecione uma matéria</option>
                        {cronograma.materias.map((materia) => (
                          <option key={materia.id} value={materia.nome}>{materia.nome}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Data</label>
                      <input
                        type="date"
                        value={novoEvento.data}
                        onChange={(e) => handleNovoEventoChange('data', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Hora</label>
                      <input
                        type="time"
                        value={novoEvento.hora}
                        onChange={(e) => handleNovoEventoChange('hora', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Duração (horas)</label>
                      <select
                        value={novoEvento.duracao}
                        onChange={(e) => handleNovoEventoChange('duracao', parseFloat(e.target.value))}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value={0.5}>30 min</option>
                        <option value={1}>1 hora</option>
                        <option value={1.5}>1h 30min</option>
                        <option value={2}>2 horas</option>
                        <option value={3}>3 horas</option>
                        <option value={4}>4 horas</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Tipo</label>
                      <select
                        value={novoEvento.tipo}
                        onChange={(e) => handleNovoEventoChange('tipo', e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="estudo">Estudo</option>
                        <option value="simulado">Simulado</option>
                        <option value="revisao">Revisão</option>
                        <option value="prova">Prova</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Descrição</label>
                    <textarea
                      value={novoEvento.descricao}
                      onChange={(e) => handleNovoEventoChange('descricao', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Adicione uma descrição opcional..."
                    />
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <Button
                      onClick={adicionarEvento}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      Adicionar Evento
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Progresso por Matéria */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Progresso por Matéria</h3>
                  <div className="space-y-4">
                    {cronograma.materias.map((materia) => (
                      <div key={materia.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-300">{materia.nome}</span>
                          <span className="text-sm text-gray-400">{materia.concluido}/{materia.horas}h</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(materia.concluido / materia.horas) * 100}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-400">
                          {Math.round((materia.concluido / materia.horas) * 100)}% concluído
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Configurações do Cronograma */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Configurações</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Horas por Dia</label>
                      <select
                        value={cronograma.horasPorDia}
                        onChange={(e) => handleInputChange('horasPorDia', parseInt(e.target.value))}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
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
                        value={cronograma.diasPorSemana}
                        onChange={(e) => handleInputChange('diasPorSemana', parseInt(e.target.value))}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value={3}>3 dias</option>
                        <option value={4}>4 dias</option>
                        <option value={5}>5 dias</option>
                        <option value={6}>6 dias</option>
                        <option value={7}>7 dias</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Dicas */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">💡 Dicas</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>• Mantenha uma rotina consistente de estudos</p>
                    <p>• Faça pausas regulares para melhorar a concentração</p>
                    <p>• Revise o conteúdo 24h após o estudo</p>
                    <p>• Use a técnica Pomodoro (25min estudo + 5min pausa)</p>
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
