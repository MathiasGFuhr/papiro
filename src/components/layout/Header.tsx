"use client";

<<<<<<< HEAD
=======
import Link from 'next/link';
>>>>>>> 5815f5b0d52d13452ffada30218b01153c703865
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { NAVIGATION_ITEMS } from '../../constants';
import { useMobileMenu } from '../../hooks/useMobileMenu';
<<<<<<< HEAD
import Link from 'next/link';
=======
>>>>>>> 5815f5b0d52d13452ffada30218b01153c703865

export const Header = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();

  return (
    <header className="border-b border-gray-700 sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
<<<<<<< HEAD
          <Link 
=======
          <a 
>>>>>>> 5815f5b0d52d13452ffada30218b01153c703865
            href="#inicio" 
            className="hover:opacity-80 transition-opacity"
            onClick={closeMobileMenu}
          >
            <Logo />
<<<<<<< HEAD
          </Link>
=======
          </a>
>>>>>>> 5815f5b0d52d13452ffada30218b01153c703865

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <a 
                key={item.id}
                href={item.href} 
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Entrar
              </Button>
            </Link>
<<<<<<< HEAD
            <Link href="/register">
=======
            <Link href="/cadastro">
>>>>>>> 5815f5b0d52d13452ffada30218b01153c703865
              <Button size="sm">
                Começar Grátis
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
            aria-label="Menu"
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

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4 pt-4">
              {NAVIGATION_ITEMS.map((item) => (
                <a 
                  key={item.id}
                  href={item.href} 
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/login" className="w-full">
                  <Button variant="outline" size="sm" className="w-full">
                    Entrar
                  </Button>
                </Link>
<<<<<<< HEAD
                <Link href="/register" className="w-full">
=======
                <Link href="/cadastro" className="w-full">
>>>>>>> 5815f5b0d52d13452ffada30218b01153c703865
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
