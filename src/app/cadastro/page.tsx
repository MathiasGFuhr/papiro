"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    error: '',
    success: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      return 'As senhas não coincidem.';
    }
    if (formData.password.length < 6) {
      return 'A senha deve ter pelo menos 6 caracteres.';
    }
    if (!formData.acceptTerms) {
      return 'Você deve aceitar os termos de uso.';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setFormStatus({ loading: false, error: validationError, success: false });
      return;
    }

    setFormStatus({ loading: true, error: '', success: false });

    // Simular cadastro
    setTimeout(() => {
      setFormStatus({ loading: false, error: '', success: true });
      // Redirecionar para verificação de email
      setTimeout(() => {
        window.location.href = '/verificar-email';
      }, 2000);
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
            Crie sua conta
          </h2>
          <p className="mt-2 text-gray-300">
            Comece sua jornada rumo à aprovação
          </p>
        </div>

        {/* Formulário de Cadastro */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Nome Completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                placeholder="Seu nome completo"
              />
            </div>

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

            {/* Campo Senha */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors pr-12"
                  placeholder="Mínimo 6 caracteres"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Campo Confirmar Senha */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirmar Senha
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors pr-12"
                  placeholder="Digite a senha novamente"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Checkbox Termos */}
            <div className="flex items-start">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded bg-gray-700 mt-1"
              />
              <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-300">
                Eu aceito os{' '}
                <Link href="/termos" className="text-red-400 hover:text-red-300">
                  Termos de Uso
                </Link>
                {' '}e a{' '}
                <Link href="/privacidade" className="text-red-400 hover:text-red-300">
                  Política de Privacidade
                </Link>
              </label>
            </div>

            {/* Botão de Cadastro */}
            <Button 
              type="submit" 
              className="w-full"
              isLoading={formStatus.loading}
              disabled={formStatus.loading}
            >
              {formStatus.loading ? 'Criando conta...' : 'Criar Conta'}
            </Button>

            {/* Mensagens de Status */}
            {formStatus.error && (
              <div className="p-4 bg-red-600 text-white rounded-lg text-sm">
                {formStatus.error}
              </div>
            )}

            {formStatus.success && (
              <div className="p-4 bg-green-600 text-white rounded-lg text-sm">
                Conta criada com sucesso! Verifique seu email para ativar a conta.
              </div>
            )}
          </form>

          {/* Link para Login */}
          <div className="mt-6 text-center">
            <p className="text-gray-300">
              Já tem uma conta?{' '}
              <Link 
                href="/login" 
                className="text-red-400 hover:text-red-300 font-medium transition-colors"
              >
                Faça login aqui
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
