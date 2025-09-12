// Constantes globais do projeto

export const NAVIGATION_ITEMS = [
  { href: '#como-funciona', label: 'Como Funciona', id: 'como-funciona' },
  { href: '#funcionalidades', label: 'Funcionalidades', id: 'funcionalidades' },
  { href: '#precos', label: 'Preços', id: 'precos' },
  { href: '#contato', label: 'Contato', id: 'contato' },
] as const;

export const FEATURES = [
  {
    icon: '🤖',
    title: 'Cronograma Automático',
    description: 'IA cria seu plano de estudos personalizado baseado no seu tempo disponível e objetivos.'
  },
  {
    icon: '📊',
    title: 'Análise de Progresso',
    description: 'Acompanhe sua evolução com relatórios detalhados e métricas de performance.'
  },
  {
    icon: '🎯',
    title: 'Foco Estratégico',
    description: 'Priorize o que realmente importa para maximizar suas chances de aprovação.'
  },
  {
    icon: '📱',
    title: 'Responsivo',
    description: 'Funciona perfeitamente em qualquer dispositivo - desktop, tablet ou mobile.'
  },
  {
    icon: '🔄',
    title: 'Sincronização',
    description: 'Acesse seus dados de qualquer lugar, sempre atualizados em tempo real.'
  },
  {
    icon: '⚡',
    title: 'Performance',
    description: 'Interface rápida e otimizada para uma experiência fluida de estudos.'
  }
] as const;

export const PRICING_PLANS = [
  {
    name: 'Básico',
    price: 'R$ 29',
    period: '/mês',
    features: [
      'Cronograma automático',
      'Até 2 concursos',
      'Relatórios básicos',
      'Suporte por email'
    ],
    isPopular: false,
    buttonText: 'Começar Agora',
    buttonVariant: 'secondary' as const
  },
  {
    name: 'Profissional',
    price: 'R$ 49',
    period: '/mês',
    features: [
      'Cronograma automático',
      'Concursos ilimitados',
      'Relatórios avançados',
      'Suporte prioritário',
      'Análise de performance',
      'Backup automático'
    ],
    isPopular: true,
    buttonText: 'Mais Popular',
    buttonVariant: 'primary' as const
  },
  {
    name: 'Premium',
    price: 'R$ 79',
    period: '/mês',
    features: [
      'Tudo do Profissional',
      'Mentoria personalizada',
      'Simulados exclusivos',
      'Grupo VIP no WhatsApp',
      'Acesso antecipado a recursos'
    ],
    isPopular: false,
    buttonText: 'Escolher Premium',
    buttonVariant: 'secondary' as const
  }
] as const;

export const TESTIMONIALS = [
  {
    name: 'Carlos Silva',
    role: 'Aprovado na PF 2023',
    content: 'O Papiro Tático foi essencial para minha aprovação. O cronograma automático me ajudou a organizar meus estudos de forma eficiente.'
  },
  {
    name: 'Ana Santos',
    role: 'Aprovada na PRF 2023',
    content: 'A análise de progresso me mostrou exatamente onde focar. Consegui identificar minhas fraquezas e melhorar rapidamente.'
  },
  {
    name: 'João Oliveira',
    role: 'Aprovado na PC-SP 2023',
    content: 'Interface intuitiva e funcionalidades que realmente fazem a diferença. Recomendo para todos que estão estudando para concursos.'
  }
] as const;

export const FAQ_ITEMS = [
  {
    question: 'Como funciona o cronograma automático?',
    answer: 'Nossa IA analisa o edital do concurso, seu tempo disponível e cria um plano personalizado com cronograma diário, semanal e mensal.'
  },
  {
    question: 'Posso usar para múltiplos concursos?',
    answer: 'Sim! Você pode gerenciar vários concursos simultaneamente e criar cronogramas específicos para cada um.'
  },
  {
    question: 'Os dados são seguros?',
    answer: 'Sim, utilizamos criptografia de ponta e backup automático. Seus dados estão sempre seguros e acessíveis.'
  },
  {
    question: 'Há suporte técnico?',
    answer: 'Oferecemos suporte por email, chat e WhatsApp. Nossos especialistas estão sempre disponíveis para ajudar.'
  }
] as const;

export const CONTACT_INFO = {
  email: 'contato@papirotatico.com',
  phone: '(11) 99999-9999',
  website: 'https://papirotatico.com'
} as const;

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/papirotatico',
  facebook: 'https://facebook.com/papirotatico',
  youtube: 'https://youtube.com/papirotatico',
  whatsapp: 'https://wa.me/5511999999999'
} as const;
