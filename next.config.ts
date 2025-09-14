import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otimizações de performance
  experimental: {
    optimizePackageImports: ['@/components', '@/hooks', '@/utils'],
    scrollRestoration: true,
  },
  
  // Otimizações de imagem
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 ano
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
    loader: 'default',
    qualities: [25, 50, 75, 100], // Suporte para quality no componente Image
  },
  
  // Compilador otimizado
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  
  // Headers de performance
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  
  // Otimizações de rede
  httpAgentOptions: {
    keepAlive: true,
  },
  
  // Otimizações de bundle
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
  
  // Headers de cache
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;