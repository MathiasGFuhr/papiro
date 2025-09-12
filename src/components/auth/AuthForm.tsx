"use client";

import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { useState } from 'react';
import Link from 'next/link';

interface AuthFormProps {
  title: string;
  subtitle: string;
  submitText: string;
  onSubmit: (data: FormData) => void;
  isLoading?: boolean;
  children: React.ReactNode;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
}

export const AuthForm = ({
  title,
  subtitle,
  submitText,
  onSubmit,
  isLoading = false,
  children,
  footerText,
  footerLinkText,
  footerLinkHref
}: AuthFormProps) => {
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setFormData(data);
    onSubmit(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-block hover:opacity-80 transition-opacity mb-6"
          >
            <Logo size="lg" showText={true} className="justify-center" />
          </Link>
          <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
          <p className="text-gray-300">{subtitle}</p>
        </div>

        {/* Form */}
        <div className="bg-gray-800 py-8 px-6 rounded-lg shadow-2xl border border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {children}
            
            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={isLoading}
            >
              {submitText}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {footerText}{' '}
              <Link
                href={footerLinkHref}
                className="text-red-600 hover:text-red-500 font-medium transition-colors"
              >
                {footerLinkText}
              </Link>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Ao continuar, você concorda com nossos{' '}
            <a href="#" className="text-red-600 hover:text-red-500 transition-colors">
              Termos de Uso
            </a>{' '}
            e{' '}
            <a href="#" className="text-red-600 hover:text-red-500 transition-colors">
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
