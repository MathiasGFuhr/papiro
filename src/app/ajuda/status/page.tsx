"use client";

import { HelpHeader, Footer } from '../../../components';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const SYSTEM_SERVICES = [
  {
    name: 'API Principal',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '120ms',
    lastIncident: '2024-01-15',
    description: 'Serviço principal da aplicação'
  },
  {
    name: 'Banco de Dados',
    status: 'operational',
    uptime: '99.8%',
    responseTime: '45ms',
    lastIncident: '2024-01-10',
    description: 'Armazenamento de dados dos usuários'
  },
  {
    name: 'Autenticação',
    status: 'operational',
    uptime: '99.9%',
    responseTime: '80ms',
    lastIncident: '2024-01-12',
    description: 'Sistema de login e segurança'
  },
  {
    name: 'IA/Cronogramas',
    status: 'operational',
    uptime: '99.7%',
    responseTime: '250ms',
    lastIncident: '2024-01-08',
    description: 'Geração de cronogramas inteligentes'
  },
  {
    name: 'Relatórios',
    status: 'operational',
    uptime: '99.6%',
    responseTime: '180ms',
    lastIncident: '2024-01-05',
    description: 'Geração de relatórios e análises'
  },
  {
    name: 'Notificações',
    status: 'operational',
    uptime: '99.5%',
    responseTime: '90ms',
    lastIncident: '2024-01-03',
    description: 'Sistema de notificações e emails'
  }
];

const RECENT_INCIDENTS = [
  {
    id: 'incident-001',
    title: 'Lentidão na geração de cronogramas',
    status: 'resolved',
    severity: 'medium',
    startTime: '2024-01-15T14:30:00Z',
    endTime: '2024-01-15T16:45:00Z',
    description: 'Alguns usuários relataram lentidão na geração de cronogramas. O problema foi identificado e corrigido.',
    affectedServices: ['IA/Cronogramas', 'API Principal']
  },
  {
    id: 'incident-002',
    title: 'Falha temporária no sistema de notificações',
    status: 'resolved',
    severity: 'low',
    startTime: '2024-01-10T09:15:00Z',
    endTime: '2024-01-10T10:30:00Z',
    description: 'Notificações por email não foram enviadas por aproximadamente 1 hora.',
    affectedServices: ['Notificações']
  },
  {
    id: 'incident-003',
    title: 'Manutenção programada do banco de dados',
    status: 'resolved',
    severity: 'low',
    startTime: '2024-01-08T02:00:00Z',
    endTime: '2024-01-08T03:30:00Z',
    description: 'Manutenção programada para otimização do banco de dados.',
    affectedServices: ['Banco de Dados', 'API Principal']
  }
];

const STATUS_COLORS = {
  operational: 'text-green-500 bg-green-100',
  degraded: 'text-yellow-500 bg-yellow-100',
  outage: 'text-red-500 bg-red-100',
  maintenance: 'text-blue-500 bg-blue-100'
};

const SEVERITY_COLORS = {
  low: 'text-green-500 bg-green-100',
  medium: 'text-yellow-500 bg-yellow-100',
  high: 'text-red-500 bg-red-100',
  critical: 'text-red-600 bg-red-200'
};

export default function StatusPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simular refresh
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsRefreshing(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return '✅';
      case 'degraded':
        return '⚠️';
      case 'outage':
        return '❌';
      case 'maintenance':
        return '🔧';
      default:
        return '❓';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'low':
        return '🟢';
      case 'medium':
        return '🟡';
      case 'high':
        return '🟠';
      case 'critical':
        return '🔴';
      default:
        return '⚪';
    }
  };

  return (
    <>
      <HelpHeader />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-700">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Back Button */}
              <div className="mb-8">
                <Link 
                  href="/ajuda"
                  className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Voltar para Central de Ajuda
                </Link>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Status do <span className="text-red-600">Sistema</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Acompanhe em tempo real o status de todos os nossos serviços
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="text-sm text-gray-400">
                  Última atualização: {currentTime.toLocaleString('pt-BR')}
                </div>
                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <svg 
                    className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>{isRefreshing ? 'Atualizando...' : 'Atualizar'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Overall Status */}
        <section className="py-12 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-green-900 border border-green-700 rounded-lg p-6 text-center">
                <div className="text-4xl mb-2">✅</div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Todos os sistemas operacionais
                </h2>
                <p className="text-green-300">
                  Todos os serviços estão funcionando normalmente
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Status dos Serviços
              </h2>
              
              <div className="space-y-4">
                {SYSTEM_SERVICES.map((service, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{getStatusIcon(service.status)}</div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {service.name}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${STATUS_COLORS[service.status as keyof typeof STATUS_COLORS]}`}>
                          {service.status === 'operational' ? 'Operacional' : 
                           service.status === 'degraded' ? 'Degradado' :
                           service.status === 'outage' ? 'Fora do Ar' : 'Manutenção'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Uptime:</span>
                        <span className="text-white ml-2 font-medium">{service.uptime}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Tempo de Resposta:</span>
                        <span className="text-white ml-2 font-medium">{service.responseTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Último Incidente:</span>
                        <span className="text-white ml-2 font-medium">
                          {new Date(service.lastIncident).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Incidentes Recentes
              </h2>
              
              <div className="space-y-4">
                {RECENT_INCIDENTS.map((incident) => (
                  <div key={incident.id} className="bg-gray-700 rounded-lg p-6 border border-gray-600">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-xl">{getSeverityIcon(incident.severity)}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {incident.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {new Date(incident.startTime).toLocaleString('pt-BR')} - 
                            {new Date(incident.endTime).toLocaleString('pt-BR')}
                          </p>
                        </div>
                      </div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${SEVERITY_COLORS[incident.severity as keyof typeof SEVERITY_COLORS]}`}>
                        {incident.severity === 'low' ? 'Baixa' :
                         incident.severity === 'medium' ? 'Média' :
                         incident.severity === 'high' ? 'Alta' : 'Crítica'}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">
                      {incident.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-400 text-sm">Serviços afetados:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {incident.affectedServices.map((service, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-green-400 text-sm font-medium">
                        Resolvido
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Receba Atualizações de Status
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Seja notificado sobre incidentes e manutenções programadas
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Inscrever-se
                </button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                Você pode cancelar a inscrição a qualquer momento
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

