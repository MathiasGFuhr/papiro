"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function ConfiguracoesPage() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    // Aqui você salvaria as configurações no backend
    console.log('Configurações salvas:', settings);
    alert('Configurações salvas com sucesso!');
  };

  const handleReset = () => {
    if (confirm('Tem certeza que deseja redefinir todas as configurações?')) {
      // Reset para valores padrão
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

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', current: false },
    { name: 'Cronograma', href: '/dashboard/cronograma', current: false },
    { name: 'Simulados', href: '/dashboard/simulados', current: false },
    { name: 'Materiais', href: '/dashboard/materiais', current: false },
    { name: 'Estatísticas', href: '/dashboard/estatisticas', current: false },
    { name: 'Configurações', href: '/dashboard/configuracoes', current: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 px-4 bg-slate-800">
          <Logo size="sm" showText={false} />
        </div>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item.current
                    ? 'bg-red-600 text-white'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="p-4 border-t border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-white">{settings.avatar}</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{settings.nome}</p>
                <p className="text-xs text-gray-400 truncate">{settings.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Conteúdo principal */}
      <div className="lg:pl-64">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <button
                  type="button"
                  className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  onClick={() => setSidebarOpen(true)}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
                <h1 className="ml-2 text-2xl font-bold text-gray-900">Configurações</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Perfil */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Perfil</h2>
                <p className="text-sm text-gray-500">Informações pessoais e de contato</p>
              </div>
              <div className="px-6 py-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nome</label>
                    <input
                      type="text"
                      value={settings.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Telefone</label>
                    <input
                      type="tel"
                      value={settings.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Notificações */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Notificações</h2>
                <p className="text-sm text-gray-500">Configure como você quer receber notificações</p>
              </div>
              <div className="px-6 py-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Notificações por Email</h3>
                    <p className="text-sm text-gray-500">Receber notificações importantes por email</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.notificacoesEmail}
                    onChange={(e) => handleInputChange('notificacoesEmail', e.target.checked)}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Notificações Push</h3>
                    <p className="text-sm text-gray-500">Receber notificações no navegador</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.notificacoesPush}
                    onChange={(e) => handleInputChange('notificacoesPush', e.target.checked)}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Lembretes de Estudo</h3>
                    <p className="text-sm text-gray-500">Lembretes para manter a rotina de estudos</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.lembretesEstudo}
                    onChange={(e) => handleInputChange('lembretesEstudo', e.target.checked)}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Notificações de Simulados</h3>
                    <p className="text-sm text-gray-500">Avisos sobre novos simulados disponíveis</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.notificacoesSimulados}
                    onChange={(e) => handleInputChange('notificacoesSimulados', e.target.checked)}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>

            {/* Preferências de Estudo */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Preferências de Estudo</h2>
                <p className="text-sm text-gray-500">Configure sua rotina de estudos</p>
              </div>
              <div className="px-6 py-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tempo de Estudo Diário (horas)</label>
                    <select
                      value={settings.tempoEstudoDiario}
                      onChange={(e) => handleInputChange('tempoEstudoDiario', parseInt(e.target.value))}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
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
                    <label className="block text-sm font-medium text-gray-700">Dias de Estudo por Semana</label>
                    <select
                      value={settings.diasEstudoSemana}
                      onChange={(e) => handleInputChange('diasEstudoSemana', parseInt(e.target.value))}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    >
                      <option value={3}>3 dias</option>
                      <option value={4}>4 dias</option>
                      <option value={5}>5 dias</option>
                      <option value={6}>6 dias</option>
                      <option value={7}>7 dias</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Horário Preferido</label>
                    <select
                      value={settings.horarioPreferido}
                      onChange={(e) => handleInputChange('horarioPreferido', e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="manha">Manhã (6h - 12h)</option>
                      <option value="tarde">Tarde (12h - 18h)</option>
                      <option value="noite">Noite (18h - 24h)</option>
                      <option value="madrugada">Madrugada (0h - 6h)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nível de Dificuldade</label>
                    <select
                      value={settings.nivelDificuldade}
                      onChange={(e) => handleInputChange('nivelDificuldade', e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="facil">Fácil</option>
                      <option value="medio">Médio</option>
                      <option value="dificil">Difícil</option>
                      <option value="avancado">Avançado</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Aparência */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Aparência</h2>
                <p className="text-sm text-gray-500">Personalize a interface</p>
              </div>
              <div className="px-6 py-4 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tema</label>
                    <select
                      value={settings.tema}
                      onChange={(e) => handleInputChange('tema', e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="claro">Claro</option>
                      <option value="escuro">Escuro</option>
                      <option value="auto">Automático</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tamanho da Fonte</label>
                    <select
                      value={settings.tamanhoFonte}
                      onChange={(e) => handleInputChange('tamanhoFonte', e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="pequeno">Pequeno</option>
                      <option value="medio">Médio</option>
                      <option value="grande">Grande</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Animações</h3>
                    <p className="text-sm text-gray-500">Habilitar animações na interface</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.animacoes}
                    onChange={(e) => handleInputChange('animacoes', e.target.checked)}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                onClick={handleReset}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Redefinir
              </Button>
              <Button
                onClick={handleSave}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Salvar Configurações
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
