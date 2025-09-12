"use client";

import { Header, Footer } from '../../components';

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-700">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Política de <span className="text-red-600">Privacidade</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Última atualização: 12 de janeiro de 2024
              </p>
              <p className="text-lg text-gray-400">
                Saiba como coletamos, usamos e protegemos suas informações pessoais
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                
                <h2 className="text-2xl font-bold text-white mb-6">1. Informações que Coletamos</h2>
                
                <h3 className="text-xl font-semibold text-white mb-4">1.1 Informações Pessoais</h3>
                <p className="text-gray-300 mb-4">
                  Coletamos informações que você nos fornece diretamente, incluindo:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Nome completo e endereço de email</li>
                  <li>Informações de conta e perfil</li>
                  <li>Dados de estudos e progresso acadêmico</li>
                  <li>Preferências de cronograma e matérias</li>
                  <li>Comunicações conosco (suporte, feedback)</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-4">1.2 Informações de Uso</h3>
                <p className="text-gray-300 mb-4">
                  Coletamos automaticamente informações sobre como você usa nosso serviço:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Dados de navegação e interação com a plataforma</li>
                  <li>Informações de dispositivo e navegador</li>
                  <li>Endereço IP e localização aproximada</li>
                  <li>Cookies e tecnologias similares</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">2. Como Usamos suas Informações</h2>
                
                <p className="text-gray-300 mb-4">
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Criar cronogramas personalizados de estudos</li>
                  <li>Gerar relatórios de progresso e análises</li>
                  <li>Enviar notificações e lembretes de estudo</li>
                  <li>Responder a suas solicitações de suporte</li>
                  <li>Detectar e prevenir fraudes e abusos</li>
                  <li>Cumprir obrigações legais</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">3. Compartilhamento de Informações</h2>
                
                <p className="text-gray-300 mb-4">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Com seu consentimento explícito</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                  <li>Em caso de fusão, aquisição ou venda de ativos</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">4. Segurança dos Dados</h2>
                
                <p className="text-gray-300 mb-4">
                  Implementamos medidas de segurança robustas para proteger suas informações:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>Controles de acesso rigorosos</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Backup regular e seguro dos dados</li>
                  <li>Treinamento regular da equipe em segurança</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">5. Seus Direitos</h2>
                
                <p className="text-gray-300 mb-4">
                  Você tem os seguintes direitos sobre suas informações pessoais:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li><strong>Acesso:</strong> Solicitar uma cópia dos seus dados</li>
                  <li><strong>Retificação:</strong> Corrigir informações incorretas</li>
                  <li><strong>Exclusão:</strong> Solicitar a remoção dos seus dados</li>
                  <li><strong>Portabilidade:</strong> Transferir seus dados para outro serviço</li>
                  <li><strong>Oposição:</strong> Opor-se ao processamento dos seus dados</li>
                  <li><strong>Limitação:</strong> Restringir o processamento em certas circunstâncias</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">6. Cookies e Tecnologias Similares</h2>
                
                <p className="text-gray-300 mb-4">
                  Utilizamos cookies e tecnologias similares para:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Lembrar suas preferências e configurações</li>
                  <li>Analisar o uso da plataforma</li>
                  <li>Personalizar sua experiência</li>
                  <li>Garantir a segurança da plataforma</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">7. Retenção de Dados</h2>
                
                <p className="text-gray-300 mb-4">
                  Mantemos suas informações pessoais apenas pelo tempo necessário para:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Fornecer nossos serviços</li>
                  <li>Cumprir obrigações legais</li>
                  <li>Resolver disputas</li>
                  <li>Fazer cumprir nossos acordos</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">8. Menores de Idade</h2>
                
                <p className="text-gray-300 mb-4">
                  Nossos serviços não são direcionados a menores de 16 anos. Não coletamos 
                  intencionalmente informações pessoais de menores. Se tomarmos conhecimento 
                  de que coletamos dados de um menor, tomaremos medidas para excluir essas informações.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">9. Alterações nesta Política</h2>
                
                <p className="text-gray-300 mb-4">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos 
                  sobre mudanças significativas por email ou através da plataforma. Recomendamos 
                  revisar esta política regularmente.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">10. Contato</h2>
                
                <p className="text-gray-300 mb-4">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como 
                  tratamos suas informações pessoais, entre em contato conosco:
                </p>
                
                <div className="bg-gray-700 p-6 rounded-lg">
                  <p className="text-gray-300 mb-2">
                    <strong>Email:</strong> privacidade@papirotatico.com
                  </p>
                  <p className="text-gray-300 mb-2">
                    <strong>Endereço:</strong> Rua das Flores, 123 - São Paulo, SP - 01234-567
                  </p>
                  <p className="text-gray-300">
                    <strong>Telefone:</strong> (11) 99999-9999
                  </p>
                </div>

                <div className="mt-8 p-4 bg-blue-900 border border-blue-700 rounded-lg">
                  <p className="text-blue-200 text-sm">
                    <strong>Nota:</strong> Esta política está em conformidade com a Lei Geral de 
                    Proteção de Dados (LGPD) e outras regulamentações aplicáveis no Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

