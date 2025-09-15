"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function PerfilPage() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [user, setUser] = useState({
    name: 'Mathias Fuhr',
    email: 'mathias@papirotatico.com',
    plan: 'Premium',
    progress: 78,
    avatar: 'MF',
    level: 12,
    xp: 2450,
    nextLevelXp: 3000,
    avatarStyle: 'warrior',
    telefone: '(11) 99999-9999',
    dataNascimento: '1995-05-15',
    cidade: 'São Paulo',
    estado: 'SP',
    bio: 'Estudante dedicado focado em concursos públicos federais. Sempre em busca de conhecimento e crescimento profissional.',
    interesses: ['Direito Constitucional', 'Direito Administrativo', 'Direito Penal'],
    concursosFavoritos: ['PRF', 'PF', 'DEPEN']
  });

  const [editando, setEditando] = useState(false);
  const [dadosEditaveis, setDadosEditaveis] = useState({
    name: user.name,
    email: user.email,
    telefone: user.telefone,
    dataNascimento: user.dataNascimento,
    cidade: user.cidade,
    estado: user.estado,
    bio: user.bio
  });

  const [conquistas] = useState([
    {
      id: 1,
      titulo: 'Primeiro Simulado',
      descricao: 'Complete seu primeiro simulado',
      icone: '🎯',
      conquistada: true,
      dataConquista: '2024-01-10',
      raridade: 'comum'
    },
    {
      id: 2,
      titulo: 'Streak Master',
      descricao: 'Mantenha um streak de 30 dias',
      icone: '🔥',
      conquistada: false,
      progresso: 23,
      meta: 30,
      raridade: 'rara'
    },
    {
      id: 3,
      titulo: 'Estudioso',
      descricao: 'Estude por 100 horas',
      icone: '📚',
      conquistada: true,
      dataConquista: '2024-01-15',
      raridade: 'comum'
    },
    {
      id: 4,
      titulo: 'Perfeccionista',
      descricao: 'Alcance 95% de acerto em um simulado',
      icone: '⭐',
      conquistada: true,
      dataConquista: '2024-01-18',
      raridade: 'epica'
    },
    {
      id: 5,
      titulo: 'Maratonista',
      descricao: 'Complete 50 simulados',
      icone: '🏃‍♂️',
      conquistada: false,
      progresso: 15,
      meta: 50,
      raridade: 'lendaria'
    }
  ]);

  const [atividadesRecentes] = useState([
    {
      id: 1,
      tipo: 'conquista',
      titulo: 'Conquista desbloqueada: Perfeccionista',
      descricao: 'Você alcançou 95% de acerto em um simulado!',
      data: '2024-01-18',
      hora: '14:30',
      icone: '⭐'
    },
    {
      id: 2,
      tipo: 'nivel',
      titulo: 'Nível 12 alcançado!',
      descricao: 'Parabéns! Você subiu para o nível 12.',
      data: '2024-01-17',
      hora: '16:45',
      icone: '🎉'
    },
    {
      id: 3,
      tipo: 'simulado',
      titulo: 'Simulado PRF concluído',
      descricao: 'Você completou o simulado de Direito Constitucional com 92% de acerto.',
      data: '2024-01-16',
      hora: '10:20',
      icone: '📝'
    },
    {
      id: 4,
      tipo: 'estudo',
      titulo: 'Meta semanal atingida',
      descricao: 'Você completou 20 horas de estudo esta semana!',
      data: '2024-01-15',
      hora: '18:00',
      icone: '🎯'
    }
  ]);

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
    conquistasDesbloqueadas: 3,
    totalConquistas: 5
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

  const getRaridadeColor = (raridade: string) => {
    switch (raridade) {
      case 'comum': return 'from-gray-500 to-gray-600';
      case 'rara': return 'from-blue-500 to-cyan-500';
      case 'epica': return 'from-purple-500 to-pink-500';
      case 'lendaria': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'conquista': return '🏆';
      case 'nivel': return '🎉';
      case 'simulado': return '📝';
      case 'estudo': return '📚';
      default: return '📅';
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case 'conquista': return 'from-yellow-500 to-orange-500';
      case 'nivel': return 'from-green-500 to-emerald-500';
      case 'simulado': return 'from-blue-500 to-cyan-500';
      case 'estudo': return 'from-purple-500 to-pink-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const handleInputChange = (campo: string, valor: string) => {
    setDadosEditaveis(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const salvarAlteracoes = () => {
    setUser(prev => ({
      ...prev,
      ...dadosEditaveis
    }));
    setEditando(false);
    alert('Perfil atualizado com sucesso!');
  };

  const cancelarEdicao = () => {
    setDadosEditaveis({
      name: user.name,
      email: user.email,
      telefone: user.telefone,
      dataNascimento: user.dataNascimento,
      cidade: user.cidade,
      estado: user.estado,
      bio: user.bio
    });
    setEditando(false);
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
                  Perfil
                </h2>
                <p className="text-sm text-gray-300">Gerencie suas informações</p>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-4">
                {editando ? (
                  <>
                    <Button
                      onClick={cancelarEdicao}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Cancelar
                    </Button>
                    <Button
                      onClick={salvarAlteracoes}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      Salvar
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => setEditando(true)}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Editar Perfil
                  </Button>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {/* Profile Header */}
            <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar Grande */}
                <div className="relative">
                  <div className={`w-32 h-32 bg-gradient-to-br ${currentAvatar.color} rounded-full flex items-center justify-center shadow-2xl`}>
                    <span className="text-6xl">{currentAvatar.emoji}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-gray-800">
                    <span className="text-white text-lg font-bold">{user.level}</span>
                  </div>
                </div>

                {/* Informações do Usuário */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                  <p className="text-lg text-gray-300 mb-4">{currentAvatar.title}</p>
                  <p className="text-gray-400 mb-6 max-w-md">{user.bio}</p>
                  
                  {/* Stats Rápidas */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{estatisticas.tempoTotalEstudo}h</div>
                      <div className="text-xs text-gray-400">Estudo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{estatisticas.simuladosRealizados}</div>
                      <div className="text-xs text-gray-400">Simulados</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{estatisticas.taxaAcerto}%</div>
                      <div className="text-xs text-gray-400">Acerto</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">{estatisticas.streakAtual}</div>
                      <div className="text-xs text-gray-400">Streak</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              
              {/* Informações Pessoais */}
              <div className="xl:col-span-2 space-y-6">
                
                {/* Dados Pessoais */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Informações Pessoais</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
                      {editando ? (
                        <input
                          type="text"
                          value={dadosEditaveis.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-white">{user.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      {editando ? (
                        <input
                          type="email"
                          value={dadosEditaveis.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-white">{user.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                      {editando ? (
                        <input
                          type="tel"
                          value={dadosEditaveis.telefone}
                          onChange={(e) => handleInputChange('telefone', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-white">{user.telefone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Data de Nascimento</label>
                      {editando ? (
                        <input
                          type="date"
                          value={dadosEditaveis.dataNascimento}
                          onChange={(e) => handleInputChange('dataNascimento', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-white">{user.dataNascimento}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Cidade</label>
                      {editando ? (
                        <input
                          type="text"
                          value={dadosEditaveis.cidade}
                          onChange={(e) => handleInputChange('cidade', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-white">{user.cidade}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Estado</label>
                      {editando ? (
                        <select
                          value={dadosEditaveis.estado}
                          onChange={(e) => handleInputChange('estado', e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="SP">São Paulo</option>
                          <option value="RJ">Rio de Janeiro</option>
                          <option value="MG">Minas Gerais</option>
                          <option value="RS">Rio Grande do Sul</option>
                          <option value="PR">Paraná</option>
                        </select>
                      ) : (
                        <p className="text-white">{user.estado}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                    {editando ? (
                      <textarea
                        value={dadosEditaveis.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-white">{user.bio}</p>
                    )}
                  </div>
                </div>

                {/* Conquistas */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">Conquistas</h3>
                    <div className="text-sm text-gray-400">
                      {estatisticas.conquistasDesbloqueadas}/{estatisticas.totalConquistas} desbloqueadas
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {conquistas.map((conquista) => (
                      <div key={conquista.id} className={`p-4 rounded-xl border ${
                        conquista.conquistada 
                          ? 'bg-gray-700/30 border-gray-600' 
                          : 'bg-gray-700/10 border-gray-700'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 bg-gradient-to-br ${getRaridadeColor(conquista.raridade)} rounded-lg flex items-center justify-center`}>
                            <span className="text-2xl">{conquista.icone}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-semibold ${conquista.conquistada ? 'text-white' : 'text-gray-400'}`}>
                              {conquista.titulo}
                            </h4>
                            <p className="text-sm text-gray-400">{conquista.descricao}</p>
                            {conquista.conquistada ? (
                              <p className="text-xs text-green-400 mt-1">
                                Conquistada em {conquista.dataConquista}
                              </p>
                            ) : (
                              <div className="mt-2">
                                <div className="flex justify-between text-xs text-gray-400 mb-1">
                                  <span>Progresso</span>
                                  <span>{conquista.progresso}/{conquista.meta}</span>
                                </div>
                                <div className="w-full bg-gray-600 rounded-full h-1.5">
                                  <div 
                                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-1.5 rounded-full transition-all duration-500"
                                    style={{ width: `${(conquista.progresso / conquista.meta) * 100}%` }}
                                  ></div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                
                {/* Atividades Recentes */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Atividades Recentes</h3>
                  <div className="space-y-4">
                    {atividadesRecentes.map((atividade) => (
                      <div key={atividade.id} className="flex items-start space-x-3 p-3 bg-gray-700/30 rounded-lg">
                        <div className={`w-8 h-8 bg-gradient-to-br ${getTipoColor(atividade.tipo)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <span className="text-sm">{atividade.icone}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm text-white font-medium">{atividade.titulo}</h4>
                          <p className="text-xs text-gray-400">{atividade.descricao}</p>
                          <p className="text-xs text-gray-500 mt-1">{atividade.data} às {atividade.hora}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interesses */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Interesses</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.interesses.map((interesse, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                        {interesse}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Concursos Favoritos */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Concursos Favoritos</h3>
                  <div className="space-y-2">
                    {user.concursosFavoritos.map((concurso, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-gray-700/30 rounded-lg">
                        <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{concurso}</span>
                        </div>
                        <span className="text-sm text-gray-300">{concurso}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Configurações da Conta */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Configurações</h3>
                  <div className="space-y-3">
                    <button className="w-full text-left p-3 text-gray-300 hover:bg-gray-700/30 rounded-lg transition-colors">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Alterar Senha</span>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 text-gray-300 hover:bg-gray-700/30 rounded-lg transition-colors">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Notificações</span>
                      </div>
                    </button>
                    <button className="w-full text-left p-3 text-gray-300 hover:bg-gray-700/30 rounded-lg transition-colors">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Privacidade</span>
                      </div>
                    </button>
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
