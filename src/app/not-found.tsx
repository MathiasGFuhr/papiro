import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="/imagens/logo-policia.png"
            alt="Logo Papiro Tático"
            width={120}
            height={120}
            className="mx-auto opacity-50"
            priority
            unoptimized
          />
        </div>
        
        <h1 className="text-9xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-6">Página Não Encontrada</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Ops! A página que você está procurando não existe ou foi movida.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Voltar ao Início
          </Link>
          
          <div className="text-gray-400">
            <p className="mb-2">Ou navegue para:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/#como-funciona" className="hover:text-white transition-colors">
                Como Funciona
              </Link>
              <Link href="/#funcionalidades" className="hover:text-white transition-colors">
                Funcionalidades
              </Link>
              <Link href="/#precos" className="hover:text-white transition-colors">
                Preços
              </Link>
              <Link href="/#contato" className="hover:text-white transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
