"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function RecuperarSenhaPage() {
  const [formData, setFormData] = useState({
    email: ''
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    error: '',
    success: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ loading: true, error: '', success: false });

    // Simular envio de email de recuperação
    setTimeout(() => {
      setFormStatus({ loading: false, error: '', success: true });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo e Título */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>
          <h2 className="text-3xl font-bold text-white">
            Recuperar Senha
          </h2>
          <p className="mt-2 text-gray-300">
            Digite seu email para receber as instruções de recuperação
          </p>
        </div>

        {/* Formulário de Recuperação */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          {!formStatus.success ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Botão de Recuperação */}
              <Button 
                type="submit" 
                className="w-full"
                isLoading={formStatus.loading}
                disabled={formStatus.loading}
              >
                {formStatus.loading ? 'Enviando...' : 'Enviar Instruções'}
              </Button>

              {/* Mensagem de Erro */}
              {formStatus.error && (
                <div className="p-4 bg-red-600 text-white rounded-lg text-sm">
                  {formStatus.error}
                </div>
              )}
            </form>
          ) : (
            /* Mensagem de Sucesso */
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Email Enviado!
                </h3>
                <p className="text-gray-300">
                  Enviamos as instruções de recuperação de senha para{' '}
                  <span className="text-red-400 font-medium">{formData.email}</span>
                </p>
              </div>

              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong>Próximos passos:</strong>
                </p>
                <ul className="text-sm text-gray-400 mt-2 space-y-1">
                  <li>• Verifique sua caixa de entrada</li>
                  <li>• Procure na pasta de spam/lixo</li>
                  <li>• Clique no link do email</li>
                  <li>• Crie uma nova senha</li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={() => {
                    setFormStatus({ loading: false, error: '', success: false });
                    setFormData({ email: '' });
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Enviar Novamente
                </Button>
                
                <Link href="/login">
                  <Button variant="secondary" className="w-full">
                    Voltar ao Login
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Links de Ajuda */}
          <div className="mt-6 text-center space-y-2">
            <p className="text-gray-300 text-sm">
              Não recebeu o email?{' '}
              <button 
                onClick={() => {
                  setFormStatus({ loading: false, error: '', success: false });
                  setFormData({ email: '' });
                }}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                Tentar novamente
              </button>
            </p>
            
            <p className="text-gray-300 text-sm">
              Lembrou da senha?{' '}
              <Link 
                href="/login" 
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                Fazer login
              </Link>
            </p>
          </div>
        </div>

        {/* Link para Voltar */}
        <div className="text-center">
          <Link 
            href="/" 
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}
