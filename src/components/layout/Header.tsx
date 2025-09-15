"use client";

import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import InstallPWA from '../ui/InstallPWA';
import { NAVIGATION_ITEMS } from '../../constants';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import Link from 'next/link';

export const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg border-b border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="hover:opacity-80 transition-opacity group"
            onClick={closeMobileMenu}
          >
            <Logo size="md" showText={true} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8" role="navigation" aria-label="Menu principal">
            {NAVIGATION_ITEMS.map((item) => (
              <a 
                key={item.id}
                href={item.href} 
                className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/10 hover:shadow-md relative group"
                aria-label={`Ir para seção ${item.label}`}
                onClick={(e) => {
                  e.preventDefault();
                  
                  // Verifica se estamos na página principal
                  if (window.location.pathname === '/') {
                    // Se estivermos na página principal, faz scroll suave
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  } else {
                    // Se estivermos em outra página, navega para a principal com âncora
                    window.location.href = `/${item.href}`;
                  }
                }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <InstallPWA />
            <Link href="/login">
              <Button 
                variant="outline" 
                size="sm"
                className="border-gray-400 text-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-300 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
              Entrar
            </Button>
            </Link>
            <Link href="/register">
              <Button 
                size="sm"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
              Começar Grátis
            </Button>
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-300 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg hover:bg-white/10 transition-all duration-300"
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
          <div id="mobile-menu" className="lg:hidden mt-4 pb-4 border-t border-gray-700 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-2 pt-4 px-4" role="navigation" aria-label="Menu mobile">
              {NAVIGATION_ITEMS.map((item) => (
                <a 
                  key={item.id}
                  href={item.href} 
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium px-4 py-3 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                    
                    // Verifica se estamos na página principal
                    if (window.location.pathname === '/') {
                      // Se estivermos na página principal, faz scroll suave
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    } else {
                      // Se estivermos em outra página, navega para a principal com âncora
                      window.location.href = `/${item.href}`;
                    }
                  }}
                  aria-label={`Ir para seção ${item.label}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 px-4">
                <div className="px-4">
                  <InstallPWA />
                </div>
                <Link href="/login" className="w-full">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-gray-400 text-gray-300 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-300 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Entrar
                  </Button>
                </Link>
                <Link href="/register" className="w-full">
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
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