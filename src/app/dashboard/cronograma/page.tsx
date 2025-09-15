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
  const [cronograma, setCronograma] = useState<{
    dataInicio: string;
    dataFim: string;
    horasPorDia: number;
    diasPorSemana: number;
    concursoSelecionado: string;
    cronogramaGerado: boolean;
    materias: Array<{
      nome: string;
      peso: number;
      horasBase: number;
      horas: number;
      concluido: number;
    }>;
    cronogramaAutomatico: Array<{
      semana: number;
      dias: Array<{
        nome: string;
        data: string;
        materias: Array<{
          nome: string;
          horas: number;
          peso: number;
          tipo: string;
        }>;
      }>;
    }>;
  }>({
    // Configurações do cronograma
    dataInicio: '2024-01-15',
    dataFim: '2024-12-15',
    horasPorDia: 4,
    diasPorSemana: 6,
    concursoSelecionado: '',
    cronogramaGerado: false,
    
    // Matérias (serão preenchidas automaticamente baseadas no concurso)
    materias: [],
    
    // Cronograma gerado automaticamente
    cronogramaAutomatico: []
  });

  // Concursos disponíveis
  const [concursos] = useState([
    {
      id: 'policia-civil',
      nome: 'Polícia Civil',
      descricao: 'Delegado, Investigador, Escrivão',
      materias: [
        { nome: 'Direito Constitucional', peso: 25, horasBase: 120 },
        { nome: 'Direito Administrativo', peso: 20, horasBase: 100 },
        { nome: 'Direito Penal', peso: 15, horasBase: 80 },
        { nome: 'Direito Processual Penal', peso: 15, horasBase: 80 },
        { nome: 'Direito Civil', peso: 10, horasBase: 60 },
        { nome: 'Direito Processual Civil', peso: 10, horasBase: 60 },
        { nome: 'Português', peso: 5, horasBase: 40 }
      ]
    },
    {
      id: 'prf',
      nome: 'PRF - Polícia Rodoviária Federal',
      descricao: 'Policial Rodoviário Federal',
      materias: [
        { nome: 'Direito Constitucional', peso: 20, horasBase: 100 },
        { nome: 'Direito Administrativo', peso: 20, horasBase: 100 },
        { nome: 'Direito Penal', peso: 15, horasBase: 80 },
        { nome: 'Direito Processual Penal', peso: 15, horasBase: 80 },
        { nome: 'Direito Civil', peso: 10, horasBase: 60 },
        { nome: 'Português', peso: 10, horasBase: 60 },
        { nome: 'Informática', peso: 5, horasBase: 40 },
        { nome: 'Legislação de Trânsito', peso: 5, horasBase: 40 }
      ]
    },
    {
      id: 'pf',
      nome: 'PF - Polícia Federal',
      descricao: 'Delegado, Agente, Escrivão',
      materias: [
        { nome: 'Direito Constitucional', peso: 20, horasBase: 120 },
        { nome: 'Direito Administrativo', peso: 20, horasBase: 120 },
        { nome: 'Direito Penal', peso: 15, horasBase: 100 },
        { nome: 'Direito Processual Penal', peso: 15, horasBase: 100 },
        { nome: 'Direito Civil', peso: 10, horasBase: 80 },
        { nome: 'Direito Processual Civil', peso: 10, horasBase: 80 },
        { nome: 'Português', peso: 5, horasBase: 60 },
        { nome: 'Informática', peso: 5, horasBase: 60 }
      ]
    },
    {
      id: 'depen',
      nome: 'DEPEN - Departamento Penitenciário',
      descricao: 'Agente Penitenciário Federal',
      materias: [
        { nome: 'Direito Constitucional', peso: 20, horasBase: 100 },
        { nome: 'Direito Administrativo', peso: 20, horasBase: 100 },
        { nome: 'Direito Penal', peso: 20, horasBase: 100 },
        { nome: 'Direito Processual Penal', peso: 15, horasBase: 80 },
        { nome: 'Direito Civil', peso: 10, horasBase: 60 },
        { nome: 'Português', peso: 10, horasBase: 60 },
        { nome: 'Informática', peso: 5, horasBase: 40 }
      ]
    }
  ]);


  const handleInputChange = (field: string, value: any) => {
    setCronograma(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const selecionarConcurso = (concursoId: string) => {
    const concurso = concursos.find(c => c.id === concursoId);
    if (concurso) {
      setCronograma(prev => ({
        ...prev,
        concursoSelecionado: concursoId,
        materias: concurso.materias.map(materia => ({
          ...materia,
          horas: materia.horasBase,
          concluido: 0
        }))
      }));
    }
  };

  const gerarCronogramaAutomatico = () => {
    if (!cronograma.concursoSelecionado || !cronograma.dataInicio || !cronograma.dataFim) {
      alert('Selecione um concurso e defina as datas de início e fim!');
      return;
    }

    const dataInicio = new Date(cronograma.dataInicio);
    const dataFim = new Date(cronograma.dataFim);
    const diasTotais = Math.ceil((dataFim.getTime() - dataInicio.getTime()) / (1000 * 60 * 60 * 24));
    const diasEstudo = Math.floor(diasTotais * (cronograma.diasPorSemana / 7));
    const horasTotais = diasEstudo * cronograma.horasPorDia;

    // Calcular horas por matéria baseado no peso
    const totalPeso = cronograma.materias.reduce((sum, materia) => sum + materia.peso, 0);
    const materiasComHoras = cronograma.materias.map(materia => ({
      ...materia,
      horasCalculadas: Math.round((materia.peso / totalPeso) * horasTotais)
    }));

    // Gerar cronograma semanal
    const cronogramaAutomatico: Array<{
      semana: number;
      dias: Array<{
        nome: string;
        data: string;
        materias: Array<{
          nome: string;
          horas: number;
          peso: number;
          tipo: string;
        }>;
      }>;
    }> = [];
    const diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
    
    for (let semana = 0; semana < Math.ceil(diasEstudo / 7); semana++) {
      const semanaData = {
        semana: semana + 1,
        dias: []
      };

      for (let dia = 0; dia < Math.min(7, diasEstudo - (semana * 7)); dia++) {
        if (dia < cronograma.diasPorSemana) {
          const dataAtual = new Date(dataInicio);
          dataAtual.setDate(dataInicio.getDate() + (semana * 7) + dia);
          
          const diaData = {
            nome: diasSemana[dia],
            data: dataAtual.toISOString().split('T')[0],
            materias: []
          };

          // Distribuir matérias ao longo do dia
          const horasPorMateria = Math.floor(cronograma.horasPorDia / materiasComHoras.length);
          const horasRestantes = cronograma.horasPorDia % materiasComHoras.length;

          materiasComHoras.forEach((materia, index) => {
            const horas = horasPorMateria + (index < horasRestantes ? 1 : 0);
            if (horas > 0) {
              diaData.materias.push({
                nome: materia.nome,
                horas: horas,
                peso: materia.peso,
                tipo: 'estudo'
              });
            }
          });

          semanaData.dias.push(diaData);
        }
      }

      cronogramaAutomatico.push(semanaData);
    }

    setCronograma(prev => ({
      ...prev,
      cronogramaAutomatico,
      cronogramaGerado: true
    }));

    alert('Cronograma gerado com sucesso!');
  };

  const resetarCronograma = () => {
    setCronograma(prev => ({
      ...prev,
      concursoSelecionado: '',
      materias: [],
      cronogramaAutomatico: [],
      cronogramaGerado: false
    }));
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
                  Cronograma
                </h2>
                <p className="text-sm text-gray-300">Organize seus estudos</p>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-4">
                {cronograma.cronogramaGerado && (
                  <Button
                    variant="outline"
                    onClick={resetarCronograma}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Resetar
                  </Button>
                )}
                {cronograma.concursoSelecionado && !cronograma.cronogramaGerado && (
                  <Button
                    onClick={gerarCronogramaAutomatico}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Gerar Cronograma
                  </Button>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {!cronograma.cronogramaGerado ? (
              // Configuração do Cronograma
              <div className="space-y-8">
                
                {/* Seleção de Concurso */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Selecione o Concurso</h3>
                      <p className="text-sm text-gray-400">Escolha o concurso que você está estudando</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {concursos.map((concurso) => (
                      <div
                        key={concurso.id}
                        onClick={() => selecionarConcurso(concurso.id)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          cronograma.concursoSelecionado === concurso.id
                            ? 'border-red-500 bg-red-500/10'
                            : 'border-gray-600 bg-gray-700/30 hover:border-gray-500 hover:bg-gray-700/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-semibold text-white">{concurso.nome}</h4>
                          {cronograma.concursoSelecionado === concurso.id && (
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-400 mb-3">{concurso.descricao}</p>
                        <div className="text-xs text-gray-500">
                          {concurso.materias.length} matérias • {concurso.materias.reduce((sum, m) => sum + m.horasBase, 0)}h total
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Configurações do Cronograma */}
                {cronograma.concursoSelecionado && (
                  <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Configurações do Cronograma</h3>
                        <p className="text-sm text-gray-400">Defina suas preferências de estudo</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Data de Início</label>
                        <input
                          type="date"
                          value={cronograma.dataInicio}
                          onChange={(e) => handleInputChange('dataInicio', e.target.value)}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Data de Fim</label>
                        <input
                          type="date"
                          value={cronograma.dataFim}
                          onChange={(e) => handleInputChange('dataFim', e.target.value)}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Horas por Dia</label>
                        <select
                          value={cronograma.horasPorDia}
                          onChange={(e) => handleInputChange('horasPorDia', parseInt(e.target.value))}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value={2}>2 horas</option>
                          <option value={3}>3 horas</option>
                          <option value={4}>4 horas</option>
                          <option value={5}>5 horas</option>
                          <option value={6}>6 horas</option>
                          <option value={8}>8 horas</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">Dias por Semana</label>
                      <select
                        value={cronograma.diasPorSemana}
                        onChange={(e) => handleInputChange('diasPorSemana', parseInt(e.target.value))}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value={3}>3 dias</option>
                        <option value={4}>4 dias</option>
                        <option value={5}>5 dias</option>
                        <option value={6}>6 dias</option>
                        <option value={7}>7 dias</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Matérias do Concurso */}
                {cronograma.concursoSelecionado && cronograma.materias.length > 0 && (
                  <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Matérias do Concurso</h3>
                        <p className="text-sm text-gray-400">Pesos e horas calculados automaticamente</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {cronograma.materias.map((materia, index) => (
                        <div key={index} className="p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-white font-medium">{materia.nome}</h4>
                            <span className="text-sm text-gray-400">{materia.peso}%</span>
                          </div>
                          <div className="text-sm text-gray-400">
                            {materia.horasBase} horas base
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ) : (
              // Cronograma Gerado
              <div className="space-y-8">
                
                {/* Resumo do Cronograma */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Cronograma Gerado</h3>
                        <p className="text-sm text-gray-400">Seu plano de estudos personalizado</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-300">Ativo</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {cronograma.cronogramaAutomatico.length}
                      </div>
                      <div className="text-sm text-gray-400">Semanas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {cronograma.cronogramaAutomatico.reduce((sum, semana) => sum + semana.dias.length, 0)}
                      </div>
                      <div className="text-sm text-gray-400">Dias de Estudo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {cronograma.cronogramaAutomatico.reduce((sum, semana) => 
                          sum + semana.dias.reduce((diaSum, dia) => 
                            diaSum + dia.materias.reduce((materiaSum, materia) => materiaSum + materia.horas, 0), 0
                          ), 0
                        )}h
                      </div>
                      <div className="text-sm text-gray-400">Horas Totais</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">
                        {cronograma.horasPorDia}h
                      </div>
                      <div className="text-sm text-gray-400">Por Dia</div>
                    </div>
                  </div>
                </div>

                {/* Cronograma Semanal */}
                <div className="space-y-6">
                  {cronograma.cronogramaAutomatico.slice(0, 4).map((semana, semanaIndex) => (
                    <div key={semanaIndex} className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white">Semana {semana.numero}</h3>
                        <div className="text-sm text-gray-400">
                          {semana.dias.length} dias • {semana.dias.reduce((sum, dia) => 
                            sum + dia.materias.reduce((materiaSum, materia) => materiaSum + materia.horas, 0), 0
                          )}h total
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {semana.dias.map((dia, diaIndex) => (
                          <div key={diaIndex} className="p-4 bg-gray-700/30 rounded-xl border border-gray-600">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-white font-medium">{dia.nome}</h4>
                              <span className="text-xs text-gray-400">{dia.data}</span>
                            </div>
                            <div className="space-y-2">
                              {dia.materias.map((materia, materiaIndex) => (
                                <div key={materiaIndex} className="flex items-center justify-between p-2 bg-gray-600/30 rounded-lg">
                                  <span className="text-sm text-gray-300 truncate">{materia.nome}</span>
                                  <span className="text-xs text-gray-400">{materia.horas}h</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progresso por Matéria */}
                <div className="bg-gray-800 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
                  <h3 className="text-lg font-bold text-white mb-6">Progresso por Matéria</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cronograma.materias.map((materia, index) => (
                      <div key={index} className="space-y-2">
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
                          {Math.round((materia.concluido / materia.horas) * 100)}% concluído • {materia.peso}% peso
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
