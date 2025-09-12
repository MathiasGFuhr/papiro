"use client";

import { AuthForm } from '../../components/auth/AuthForm';
import { AuthInput } from '../../components/auth/AuthInput';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    setErrors({});

    // Simular validação
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    // Validações básicas
    const newErrors: Record<string, string> = {};

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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Simular requisição de login
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Login data:', { email, password });
      // Aqui você faria a requisição real para o Supabase
    } catch (error) {
      console.error('Erro no login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthForm
      title="Bem-vindo de volta"
      subtitle="Entre na sua conta para continuar seus estudos"
      submitText="Entrar"
      onSubmit={handleSubmit}
      isLoading={isLoading}
      footerText="Não tem uma conta?"
      footerLinkText="Cadastre-se aqui"
      footerLinkHref="/register"
    >
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

      <AuthInput
        name="password"
        type="password"
        label="Senha"
        placeholder="Sua senha"
        error={errors.password}
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        }
        required
      />

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded bg-gray-700"
          />
          <span className="ml-2 text-sm text-gray-300">Lembrar de mim</span>
        </label>
        <Link
          href="/forgot-password"
          className="text-sm text-red-600 hover:text-red-500 transition-colors"
        >
          Esqueceu a senha?
        </Link>
      </div>
    </AuthForm>
  );
}