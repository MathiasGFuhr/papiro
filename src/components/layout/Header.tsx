"use client";

import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { NAVIGATION_ITEMS } from '../../constants';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import Link from 'next/link';

export const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  return (
    <header className="border-b border-gray-200 sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="hover:opacity-80 transition-opacity"
            onClick={closeMobileMenu}
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8" role="navigation" aria-label="Menu principal">
            {NAVIGATION_ITEMS.map((item) => (
              <a 
                key={item.id}
                href={item.href} 
                className="text-gray-700 hover:text-red-600 transition-colors text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white rounded px-3 py-2 hover:bg-red-50"
                aria-label={`Ir para seção ${item.label}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Entrar
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">
                Começar Grátis
              </Button>
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-700 hover:text-red-600 p-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white rounded hover:bg-red-50 transition-colors"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden mt-4 pb-4 border-t border-gray-200 bg-gray-50/50 rounded-lg">
            <nav className="flex flex-col space-y-2 pt-4 px-4" role="navigation" aria-label="Menu mobile">
              {NAVIGATION_ITEMS.map((item) => (
                <a 
                  key={item.id}
                  href={item.href} 
                  className="text-gray-700 hover:text-red-600 transition-colors text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-white rounded px-3 py-2 hover:bg-red-50"
                  onClick={closeMobileMenu}
                  aria-label={`Ir para seção ${item.label}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 px-4">
                <Link href="/login" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Entrar
                  </Button>
                </Link>
                <Link href="/register" className="w-full">
                  <Button size="sm" className="w-full">
                    Começar Grátis
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};