"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function VerificarEmailPage() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos
  const [canResend, setCanResend] = useState(false);
  const [resendStatus, setResendStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  // Timer para reenvio
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleResendEmail = async () => {
    setResendStatus({ loading: true, success: false, error: '' });
    
    // Simular reenvio
    setTimeout(() => {
      setResendStatus({ loading: false, success: true, error: '' });
      setTimeLeft(300); // Reset timer
      setCanResend(false);
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
            Verifique seu Email
          </h2>
          <p className="mt-2 text-gray-300">
            Enviamos um link de verificação para seu email
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <div className="text-center space-y-6">
            {/* Ícone de Email */}
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Mensagem Principal */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Verificação Necessária
              </h3>
              <p className="text-gray-300">
                Para ativar sua conta, clique no link que enviamos para seu email.
                Se não encontrar, verifique sua pasta de spam.
              </p>
            </div>

            {/* Instruções */}
            <div className="bg-gray-700 p-4 rounded-lg text-left">
              <p className="text-sm text-gray-300 mb-3">
                <strong>Como verificar:</strong>
              </p>
              <ol className="text-sm text-gray-400 space-y-2">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">1.</span>
                  Abra seu email
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">2.</span>
                  Procure por "Papiro Tático - Verificação"
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">3.</span>
                  Clique no botão "Verificar Email"
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">4.</span>
                  Sua conta será ativada automaticamente
                </li>
              </ol>
            </div>

            {/* Status do Reenvio */}
            {resendStatus.success && (
              <div className="p-4 bg-green-600 text-white rounded-lg text-sm">
                Email reenviado com sucesso! Verifique sua caixa de entrada.
              </div>
            )}

            {resendStatus.error && (
              <div className="p-4 bg-red-600 text-white rounded-lg text-sm">
                {resendStatus.error}
              </div>
            )}

            {/* Botões de Ação */}
            <div className="space-y-3">
              {canResend ? (
                <Button 
                  onClick={handleResendEmail}
                  isLoading={resendStatus.loading}
                  disabled={resendStatus.loading}
                  className="w-full"
                >
                  {resendStatus.loading ? 'Reenviando...' : 'Reenviar Email'}
                </Button>
              ) : (
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">
                    Pode reenviar em:
                  </p>
                  <div className="text-2xl font-mono text-red-400">
                    {formatTime(timeLeft)}
                  </div>
                </div>
              )}

              <Link href="/login">
                <Button variant="outline" className="w-full">
                  Voltar ao Login
                </Button>
              </Link>
            </div>

            {/* Informações Adicionais */}
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-white font-medium mb-2">Problemas comuns:</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Verifique a pasta de spam/lixo eletrônico</li>
                <li>• Confirme se digitou o email corretamente</li>
                <li>• Aguarde alguns minutos para o email chegar</li>
                <li>• Entre em contato conosco se necessário</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links de Ajuda */}
        <div className="text-center space-y-2">
          <p className="text-gray-300 text-sm">
            Não recebeu o email?{' '}
            <button 
              onClick={handleResendEmail}
              disabled={!canResend || resendStatus.loading}
              className="text-red-400 hover:text-red-300 transition-colors disabled:text-gray-500"
            >
              Reenviar
            </button>
          </p>
          
          <p className="text-gray-300 text-sm">
            Precisa de ajuda?{' '}
            <Link 
              href="/ajuda" 
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              Central de Ajuda
            </Link>
          </p>
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
