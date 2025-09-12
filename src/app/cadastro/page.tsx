import { RegisterForm } from '../../components/auth/RegisterForm';
import { Logo } from '../../components/ui/Logo';
import Link from 'next/link';

export default function CadastroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link href="/" className="inline-block">
            <Logo size="lg" showText={true} />
          </Link>
          <p className="mt-4 text-gray-400">
            Crie sua conta gratuita e comece seus estudos hoje
          </p>
        </div>

        {/* Register Form */}
        <RegisterForm />

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Ao continuar, você concorda com nossos{' '}
            <Link href="/termos" className="text-red-600 hover:text-red-500 transition-colors">
              Termos de Uso
            </Link>
            {' '}e{' '}
            <Link href="/privacidade" className="text-red-600 hover:text-red-500 transition-colors">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
