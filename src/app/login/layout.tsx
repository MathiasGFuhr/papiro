import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Entrar - Papiro Tático',
  description: 'Faça login na sua conta do Papiro Tático e continue seus estudos para concursos policiais.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
