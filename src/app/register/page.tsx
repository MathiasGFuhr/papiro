"use client";

import { AuthForm } from '../../components/auth/AuthForm';
import { AuthInput } from '../../components/auth/AuthInput';
import { useState } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cadastrar - Papiro Tático',
  description: 'Crie sua conta gratuita no Papiro Tático e comece a otimizar seus estudos para concursos policiais.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    setErrors({});

    // Simular validação
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    const confirmPassword = data.get('confirmPassword') as string;
    const concurso = data.get('concurso') as string;

    // Validações básicas
    const newErrors: Record<string, string> = {};

    if (!name) {
      newErrors.name = 'Nome é obrigatório';
    } else if (name.length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }

    if (!email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }

    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Senhas não coincidem';
    }

    if (!concurso) {
      newErrors.concurso = 'Selecione um concurso';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Simular requisição de cadastro
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Register data:', { name, email, password, concurso });
      // Aqui você faria a requisição real para o Supabase
    } catch (error) {
      console.error('Erro no cadastro:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthForm
      title="Crie sua conta"
      subtitle="Comece sua jornada rumo à aprovação"
      submitText="Criar Conta"
      onSubmit={handleSubmit}
      isLoading={isLoading}
      footerText="Já tem uma conta?"
      footerLinkText="Entre aqui"
      footerLinkHref="/login"
    >
      <AuthInput
        name="name"
        type="text"
        label="Nome completo"
        placeholder="Seu nome completo"
        error={errors.name}
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        }
        required
      />

      <AuthInput
        name="email"
        type="email"
        label="Email"
        placeholder="seu@email.com"
        error={errors.email}
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        }
        required
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">
          Concurso de interesse
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <select
            name="concurso"
            className={`
              w-full px-4 py-3 pl-10 bg-gray-700 border border-gray-600 rounded-lg
              text-white focus:outline-none focus:ring-2 focus:ring-red-500 
              focus:border-transparent transition-all duration-200
              ${errors.concurso ? 'border-red-500 focus:ring-red-500' : 'hover:border-gray-500'}
            `}
            required
          >
            <option value="">Selecione um concurso</option>
            <option value="pf">Polícia Federal (PF)</option>
            <option value="prf">Polícia Rodoviária Federal (PRF)</option>
            <option value="pc">Polícia Civil</option>
            <option value="depen">DEPEN - Departamento Penitenciário</option>
          </select>
        </div>
        {errors.concurso && (
          <p className="text-sm text-red-500 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.concurso}
          </p>
        )}
      </div>

      <AuthInput
        name="password"
        type="password"
        label="Senha"
        placeholder="Mínimo 6 caracteres"
        error={errors.password}
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        }
        required
      />

      <AuthInput
        name="confirmPassword"
        type="password"
        label="Confirmar senha"
        placeholder="Digite a senha novamente"
        error={errors.confirmPassword}
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        }
        required
      />

      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded bg-gray-700"
          required
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
          Concordo com os{' '}
          <Link href="/terms" className="text-red-600 hover:text-red-500 transition-colors">
            Termos de Uso
          </Link>{' '}
          e{' '}
          <Link href="/privacy" className="text-red-600 hover:text-red-500 transition-colors">
            Política de Privacidade
          </Link>
        </label>
      </div>
    </AuthForm>
  );
}
