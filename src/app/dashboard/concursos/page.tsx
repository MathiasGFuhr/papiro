"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function ConcursosPage() {
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

  // Estado dos concursos
  const [filtros, setFiltros] = useState({
    status: 'todos', // todos, abertos, encerrados, proximos
    orgao: '',
    nivel: 'todos', // todos, federal, estadual, municipal
    favoritos: false
  });

  const [concursos] = useState([
    {
      id: 1,
      nome: 'Polícia Rodoviária Federal - PRF',
      orgao: 'PRF',
      nivel: 'federal',
      status: 'aberto',
      dataInscricao: '2024-01-15',
      dataFimInscricao: '2024-02-15',
      dataProva: '2024-03-10',
      vagas: 1200,
      salario: 'R$ 8.000,00',
      favorito: true,
      descricao: 'Concurso para Policial Rodoviário Federal com vagas em todo o território nacional',
      materias: ['Direito Constitucional', 'Direito Administrativo', 'Direito Penal', 'Legislação de Trânsito'],
      requisitos: ['Ensino Superior', 'CNH B', 'Idade entre 18 e 45 anos']
    },
    {
      id: 2,
      nome: 'Polícia Federal - PF',
      orgao: 'PF',
      nivel: 'federal',
      status: 'proximo',
      dataInscricao: '2024-02-01',
      dataFimInscricao: '2024-03-01',
      dataProva: '2024-04-15',
      vagas: 500,
      salario: 'R$ 12.000,00',
      favorito: true,
      descricao: 'Concurso para Agente de Polícia Federal com atuação em investigações',
      materias: ['Direito Constitucional', 'Direito Administrativo', 'Direito Penal', 'Direito Processual Penal'],
      requisitos: ['Ensino Superior', 'Idade entre 18 e 50 anos']
    },
    {
      id: 3,
      nome: 'Departamento Penitenciário Nacional - DEPEN',
      orgao: 'DEPEN',
      nivel: 'federal',
      status: 'aberto',
      dataInscricao: '2024-01-20',
      dataFimInscricao: '2024-02-20',
      dataProva: '2024-03-25',
      vagas: 800,
      salario: 'R$ 7.500,00',
      favorito: false,
      descricao: 'Concurso para Agente Penitenciário Federal',
      materias: ['Direito Constitucional', 'Direito Administrativo', 'Direito Penal', 'Direito Processual Penal'],
      requisitos: ['Ensino Médio', 'Idade entre 18 e 50 anos']
    },
    {
      id: 4,
      nome: 'Polícia Civil do Estado de São Paulo',
      orgao: 'PC-SP',
      nivel: 'estadual',
      status: 'aberto',
      dataInscricao: '2024-01-10',
      dataFimInscricao: '2024-02-10',
      dataProva: '2024-03-05',
      vagas: 2000,
      salario: 'R$ 6.500,00',
      favorito: false,
      descricao: 'Concurso para Delegado, Investigador e Escrivão da Polícia Civil de SP',
      materias: ['Direito Constitucional', 'Direito Administrativo', 'Direito Penal', 'Direito Processual Penal'],
      requisitos: ['Ensino Superior', 'Idade entre 18 e 50 anos']
    },
    {
      id: 5,
      nome: 'Receita Federal do Brasil',
      orgao: 'RFB',
      nivel: 'federal',
      status: 'proximo',
      dataInscricao: '2024-03-01',
      dataFimInscricao: '2024-04-01',
      dataProva: '2024-05-20',
      vagas: 300,
      salario: 'R$ 15.000,00',
      favorito: true,
      descricao: 'Concurso para Auditor Fiscal da Receita Federal',
      materias: ['Direito Tributário', 'Direito Constitucional', 'Direito Administrativo', 'Matemática'],
      requisitos: ['Ensino Superior', 'Idade entre 18 e 50 anos']
    }
  ]);

  const [estatisticas] = useState({
    totalConcursos: 5,
    concursosAbertos: 3,
    concursosProximos: 2,
    favoritos: 3,
    inscricoesRealizadas: 2
  });

  const handleFiltroChange = (campo: string, valor: string | boolean) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const toggleFavorito = (concursoId: number) => {
    console.log('Alternando favorito:', concursoId);
    alert('Favorito atualizado!');
  };

  const inscreverSe = (concursoId: number) => {
    console.log('Inscrevendo-se no concurso:', concursoId);
    alert('Redirecionando para inscrição...');
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'aberto': return 'text-green-400 bg-green-400/20';
      case 'proximo': return 'text-blue-400 bg-blue-400/20';
      case 'encerrado': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'federal': return 'from-red-500 to-pink-500';
      case 'estadual': return 'from-blue-500 to-cyan-500';
      case 'municipal': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getOrgaoColor = (orgao: string) => {
    switch (orgao) {
      case 'PRF': return 'from-blue-500 to-cyan-500';
      case 'PF': return 'from-red-500 to-pink-500';
      case 'DEPEN': return 'from-purple-500 to-indigo-500';
      case 'PC-SP': return 'from-green-500 to-emerald-500';
      case 'RFB': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  // Filtrar concursos
  const concursosFiltrados = concursos.filter(concurso => {
    if (filtros.status !== 'todos' && concurso.status !== filtros.status) return false;
    if (filtros.orgao && concurso.orgao !== filtros.orgao) return false;
    if (filtros.nivel !== 'todos' && concurso.nivel !== filtros.nivel) return false;
    if (filtros.favoritos && !concurso.favorito) return false;
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
                  Concursos
                </h2>
                <p className="text-sm text-gray-300">Encontre sua oportunidade</p>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Favoritos
                </Button>
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Buscar Concursos
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
              {/* Total de Concursos */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Total</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.totalConcursos}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Concursos Abertos */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Abertos</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.concursosAbertos}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Próximos */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Próximos</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.concursosProximos}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Favoritos */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Favoritos</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.favoritos}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Inscrições */}
              <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Inscrições</p>
                    <p className="text-2xl font-bold text-white">{estatisticas.inscricoesRealizadas}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
              
              {/* Lista de Concursos */}
              <div className="xl:col-span-3 space-y-6">
                
                {/* Filtros */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Filtros</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                      <select
                        value={filtros.status}
                        onChange={(e) => handleFiltroChange('status', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="todos">Todos</option>
                        <option value="aberto">Abertos</option>
                        <option value="proximo">Próximos</option>
                        <option value="encerrado">Encerrados</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Órgão</label>
                      <select
                        value={filtros.orgao}
                        onChange={(e) => handleFiltroChange('orgao', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Todos os órgãos</option>
                        <option value="PRF">PRF</option>
                        <option value="PF">PF</option>
                        <option value="DEPEN">DEPEN</option>
                        <option value="PC-SP">PC-SP</option>
                        <option value="RFB">RFB</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nível</label>
                      <select
                        value={filtros.nivel}
                        onChange={(e) => handleFiltroChange('nivel', e.target.value)}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="todos">Todos</option>
                        <option value="federal">Federal</option>
                        <option value="estadual">Estadual</option>
                        <option value="municipal">Municipal</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <label className="flex items-center space-x-2 text-sm text-gray-300">
                        <input
                          type="checkbox"
                          checked={filtros.favoritos}
                          onChange={(e) => handleFiltroChange('favoritos', e.target.checked)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                        />
                        <span>Apenas favoritos</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Lista de Concursos */}
                <div className="space-y-4">
                  {concursosFiltrados.map((concurso) => (
                    <div key={concurso.id} className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className={`w-12 h-12 bg-gradient-to-br ${getOrgaoColor(concurso.orgao)} rounded-lg flex items-center justify-center`}>
                              <span className="text-white font-bold text-sm">{concurso.orgao}</span>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-white">{concurso.nome}</h3>
                              <p className="text-sm text-gray-400">{concurso.descricao}</p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              <span className="text-sm text-gray-300">{concurso.vagas} vagas</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                              <span className="text-sm text-gray-300">{concurso.salario}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="text-sm text-gray-300">Prova: {concurso.dataProva}</span>
                            </div>
                          </div>

                          <div className="flex items-center space-x-4 mb-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(concurso.status)}`}>
                              {concurso.status === 'aberto' ? 'Inscrições Abertas' : 
                               concurso.status === 'proximo' ? 'Em Breve' : 'Encerrado'}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getNivelColor(concurso.nivel)} text-white`}>
                              {concurso.nivel === 'federal' ? 'Federal' : 
                               concurso.nivel === 'estadual' ? 'Estadual' : 'Municipal'}
                            </span>
                          </div>

                          <div className="text-sm text-gray-400">
                            <p><strong>Inscrições:</strong> {concurso.dataInscricao} até {concurso.dataFimInscricao}</p>
                            <p><strong>Requisitos:</strong> {concurso.requisitos.join(', ')}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => toggleFavorito(concurso.id)}
                            className={`p-2 rounded-lg transition-colors ${
                              concurso.favorito 
                                ? 'text-yellow-400 bg-yellow-400/20' 
                                : 'text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/20'
                            }`}
                          >
                            <svg className="w-5 h-5" fill={concurso.favorito ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          </button>
                          
                          {concurso.status === 'aberto' && (
                            <Button
                              onClick={() => inscreverSe(concurso.id)}
                              className="bg-red-600 hover:bg-red-700 text-white"
                            >
                              Inscrever-se
                            </Button>
                          )}
                          
                          {concurso.status === 'proximo' && (
                            <Button
                              variant="outline"
                              className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
                            >
                              Acompanhar
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
                
                {/* Próximos Prazos */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Próximos Prazos</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-700/30 rounded-lg">
                      <div className="text-sm text-white font-medium">PRF - Inscrições</div>
                      <div className="text-xs text-gray-400">Termina em 15/02/2024</div>
                    </div>
                    <div className="p-3 bg-gray-700/30 rounded-lg">
                      <div className="text-sm text-white font-medium">PF - Inscrições</div>
                      <div className="text-xs text-gray-400">Inicia em 01/02/2024</div>
                    </div>
                    <div className="p-3 bg-gray-700/30 rounded-lg">
                      <div className="text-sm text-white font-medium">PC-SP - Prova</div>
                      <div className="text-xs text-gray-400">05/03/2024</div>
                    </div>
                  </div>
                </div>

                {/* Dicas para Concursos */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">💡 Dicas</h3>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>• Fique atento aos prazos de inscrição</p>
                    <p>• Leia o edital completo antes de se inscrever</p>
                    <p>• Prepare todos os documentos com antecedência</p>
                    <p>• Estude as matérias específicas do concurso</p>
                  </div>
                </div>

                {/* Notificações */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">🔔 Notificações</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                      <div className="text-sm text-blue-300 font-medium">Novo concurso PRF</div>
                      <div className="text-xs text-blue-400">Inscrições abertas até 15/02</div>
                    </div>
                    <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <div className="text-sm text-green-300 font-medium">PF - Edital publicado</div>
                      <div className="text-xs text-green-400">Inscrições começam em 01/02</div>
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
