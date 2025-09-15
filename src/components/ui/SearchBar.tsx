"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'page' | 'content' | 'simulado' | 'cronograma';
  url: string;
}

const SEARCH_DATA: SearchResult[] = [
  {
    id: '1',
    title: 'Dashboard',
    description: 'Painel principal com estatísticas e progresso',
    type: 'page',
    url: '/dashboard'
  },
  {
    id: '2',
    title: 'Cronograma de Estudos',
    description: 'Planejamento automático de estudos',
    type: 'cronograma',
    url: '/dashboard/cronograma'
  },
  {
    id: '3',
    title: 'Simulados',
    description: 'Testes práticos para concursos policiais',
    type: 'simulado',
    url: '/dashboard/simulados'
  },
  {
    id: '4',
    title: 'Materiais de Estudo',
    description: 'PDFs, vídeos e recursos de estudo',
    type: 'content',
    url: '/dashboard/materiais'
  },
  {
    id: '5',
    title: 'Estatísticas',
    description: 'Análise de performance e progresso',
    type: 'page',
    url: '/dashboard/estatisticas'
  },
  {
    id: '6',
    title: 'Configurações',
    description: 'Preferências e configurações da conta',
    type: 'page',
    url: '/dashboard/configuracoes'
  },
  {
    id: '7',
    title: 'Simulado PF',
    description: 'Teste específico para Polícia Federal',
    type: 'simulado',
    url: '/dashboard/simulados/pf'
  },
  {
    id: '8',
    title: 'Simulado PRF',
    description: 'Teste específico para Polícia Rodoviária Federal',
    type: 'simulado',
    url: '/dashboard/simulados/prf'
  },
  {
    id: '9',
    title: 'Simulado Polícia Civil',
    description: 'Teste específico para Polícia Civil',
    type: 'simulado',
    url: '/dashboard/simulados/policia-civil'
  },
  {
    id: '10',
    title: 'Simulado DEPEN',
    description: 'Teste específico para Departamento Penitenciário',
    type: 'simulado',
    url: '/dashboard/simulados/depen'
  }
];

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ 
  placeholder = "Buscar...", 
  className = "" 
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Filtrar resultados baseado na query
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filtered = SEARCH_DATA.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
    setIsOpen(filtered.length > 0);
    setSelectedIndex(-1);
  }, [query]);

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navegação com teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : results.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleSelectResult(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSelectResult = (result: SearchResult) => {
    setQuery('');
    setIsOpen(false);
    router.push(result.url);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'simulado':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
      case 'cronograma':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'content':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page': return 'text-blue-500';
      case 'simulado': return 'text-green-500';
      case 'cronograma': return 'text-purple-500';
      case 'content': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg 
            className="h-5 w-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
          placeholder={placeholder}
        />
      </div>

      {/* Dropdown de resultados */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-50 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
          {results.map((result, index) => (
            <div
              key={result.id}
              onClick={() => handleSelectResult(result)}
              className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-50 ${
                index === selectedIndex ? 'bg-red-50' : ''
              }`}
            >
              <div className="flex items-center">
                <div className={`flex-shrink-0 ${getTypeColor(result.type)}`}>
                  {getTypeIcon(result.type)}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {result.title}
                    </p>
                    <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      result.type === 'page' ? 'bg-blue-100 text-blue-800' :
                      result.type === 'simulado' ? 'bg-green-100 text-green-800' :
                      result.type === 'cronograma' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {result.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {result.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
