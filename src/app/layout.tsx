import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "../components/Analytics";

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
        url: '/imgens/banner-policia.png',
        width: 1200,
        height: 630,
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
    images: ['/imgens/banner-policia.png'],
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
    icon: "/imgens/logo-policia.png",
    shortcut: "/imgens/logo-policia.png",
    apple: "/imgens/logo-policia.png",
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
        <link rel="icon" href="/imgens/logo-policia.png" type="image/png" />
        <link rel="shortcut icon" href="/imgens/logo-policia.png" type="image/png" />
        <link rel="apple-touch-icon" href="/imgens/logo-policia.png" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
