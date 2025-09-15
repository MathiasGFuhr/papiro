"use client";

import { Logo } from '../ui/Logo';
import Link from 'next/link';

interface AuthHeaderProps {
  title?: string;
  subtitle?: string;
}

export const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="hover:opacity-80 transition-opacity"
          >
            <Logo size="md" showText={true} />
          </Link>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Já tem uma conta?
            </span>
            <Link href="/login">
              <button className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors">
                Entrar
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Page Title Section */}
      {(title || subtitle) && (
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center">
              {title && (
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-lg text-gray-600">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
