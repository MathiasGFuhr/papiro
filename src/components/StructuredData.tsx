export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Papiro Tático",
    "description": "Sistema inteligente de controle de estudos para concursos policiais com inteligência artificial",
    "url": "https://papirotatico.com",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "description": "Plano gratuito disponível"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Papiro Tático"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Papiro Tático",
      "url": "https://papirotatico.com"
    },
    "keywords": "concursos policiais, PF, PRF, polícia civil, DEPEN, cronograma de estudos, inteligência artificial, aprovação",
    "audience": {
      "@type": "Audience",
      "audienceType": "Estudantes de concursos policiais"
    },
    "featureList": [
      "Cronograma Automático com IA",
      "Análise de Progresso",
      "Foco Estratégico",
      "Interface Responsiva",
      "Sincronização em Tempo Real",
      "Relatórios Avançados"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
