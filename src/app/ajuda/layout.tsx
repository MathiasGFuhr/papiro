import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Central de Ajuda - Papiro Tático',
  description: 'Encontre respostas rápidas, tutoriais detalhados e suporte especializado para maximizar seu uso do Papiro Tático.',
  keywords: 'ajuda, suporte, tutoriais, FAQ, Papiro Tático, concursos policiais',
};

export default function AjudaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
