import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cadastrar - Papiro Tático',
  description: 'Crie sua conta gratuita no Papiro Tático e comece a otimizar seus estudos para concursos policiais.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
