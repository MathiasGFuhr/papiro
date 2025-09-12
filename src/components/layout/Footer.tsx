import { Logo } from '../ui/Logo';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../constants';
<<<<<<< HEAD
import Link from 'next/link';
=======
>>>>>>> 5815f5b0d52d13452ffada30218b01153c703865

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Logo size="sm" />
            <p className="text-gray-400 text-sm mt-4">
              Sistema inteligente de controle de estudos para concursos policiais.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#como-funciona" className="text-gray-400 hover:text-white transition-colors text-sm">Como Funciona</a></li>
              <li><a href="#funcionalidades" className="text-gray-400 hover:text-white transition-colors text-sm">Funcionalidades</a></li>
              <li><a href="#precos" className="text-gray-400 hover:text-white transition-colors text-sm">Preços</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
<<<<<<< HEAD
              <li><Link href="/ajuda" className="text-gray-400 hover:text-white transition-colors text-sm">Central de Ajuda</Link></li>
              <li><Link href="/ajuda/tutoriais" className="text-gray-400 hover:text-white transition-colors text-sm">Tutoriais</Link></li>
              <li><Link href="/ajuda/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/ajuda/status" className="text-gray-400 hover:text-white transition-colors text-sm">Status</Link></li>
=======
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Tutoriais</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Status</a></li>
>>>>>>> 5815f5b0d52d13452ffada30218b01153c703865
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">{CONTACT_INFO.email}</p>
              <p className="text-gray-400 text-sm">{CONTACT_INFO.phone}</p>
              <div className="flex space-x-4 mt-4">
                <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
                <a href={SOCIAL_LINKS.facebook} className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href={SOCIAL_LINKS.youtube} className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Papiro Tático. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
<<<<<<< HEAD
              <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors text-sm">Privacidade</Link>
              <Link href="/termos" className="text-gray-400 hover:text-white transition-colors text-sm">Termos</Link>
              <Link href="/ajuda" className="text-gray-400 hover:text-white transition-colors text-sm">Ajuda</Link>
=======
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Termos</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a>
>>>>>>> 5815f5b0d52d13452ffada30218b01153c703865
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
