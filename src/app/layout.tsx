import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "../components/Analytics";
import { StructuredData } from "../components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Papiro Tático - Sistema Inteligente de Controle de Estudos para Concursos Policiais",
  description: "Domine os concursos da PF, PRF, Polícia Civil e DEPEN com IA. Cronograma automático, análise de progresso e foco estratégico. 500+ aprovados!",
  keywords: "concursos policiais, PF, PRF, polícia civil, DEPEN, cronograma de estudos, inteligência artificial, aprovação, estudos organizados",
  authors: [{ name: "Papiro Tático" }],
  creator: "Papiro Tático",
  publisher: "Papiro Tático",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://papirotatico.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Papiro Tático - Sistema Inteligente de Controle de Estudos",
    description: "Domine os concursos da PF, PRF, Polícia Civil e DEPEN com IA. Cronograma automático e análise de progresso.",
    url: 'https://papirotatico.com',
    siteName: 'Papiro Tático',
    images: [
      {
        url: '/favicon.svg',
        width: 512,
        height: 512,
        alt: 'Papiro Tático - Sistema de Controle de Estudos',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Papiro Tático - Sistema Inteligente de Controle de Estudos",
    description: "Domine os concursos da PF, PRF, Polícia Civil e DEPEN com IA. Cronograma automático e análise de progresso.",
    images: ['/favicon.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Papiro Tático" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-white text-gray-900`}
      >
        <StructuredData />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
