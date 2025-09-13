"use client";

import { Header, Footer } from '../../components';

export default function TermosPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-700">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Termos de <span className="text-red-600">Uso</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Última atualização: 12 de janeiro de 2024
              </p>
              <p className="text-lg text-gray-400">
                Leia atentamente os termos e condições de uso da plataforma Papiro Tático
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                
                <h2 className="text-2xl font-bold text-white mb-6">1. Aceitação dos Termos</h2>
                
                <p className="text-gray-300 mb-4">
                  Ao acessar e usar a plataforma Papiro Tático, você concorda em cumprir e 
                  estar vinculado a estes Termos de Uso. Se você não concordar com qualquer 
                  parte destes termos, não deve usar nossos serviços.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">2. Descrição do Serviço</h2>
                
                <p className="text-gray-300 mb-4">
                  O Papiro Tático é uma plataforma de controle de estudos para concursos 
                  policiais que oferece:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Cronogramas de estudos personalizados com inteligência artificial</li>
                  <li>Análise de progresso e relatórios detalhados</li>
                  <li>Ferramentas de organização e planejamento</li>
                  <li>Sistema de notificações e lembretes</li>
                  <li>Suporte especializado para candidatos</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">3. Elegibilidade</h2>
                
                <p className="text-gray-300 mb-4">
                  Para usar nossos serviços, você deve:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Ter pelo menos 16 anos de idade</li>
                  <li>Fornecer informações verdadeiras e precisas</li>
                  <li>Manter a segurança de sua conta</li>
                  <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
                  <li>Ser responsável por todas as atividades em sua conta</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">4. Conta do Usuário</h2>
                
                <h3 className="text-xl font-semibold text-white mb-4">4.1 Criação de Conta</h3>
                <p className="text-gray-300 mb-4">
                  Para acessar certas funcionalidades, você deve criar uma conta fornecendo 
                  informações precisas e completas. Você é responsável por manter a 
                  confidencialidade de suas credenciais.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">4.2 Segurança da Conta</h3>
                <p className="text-gray-300 mb-4">
                  Você é responsável por todas as atividades que ocorrem em sua conta. 
                  Notifique-nos imediatamente sobre qualquer uso não autorizado ou 
                  violação de segurança.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">5. Uso Aceitável</h2>
                
                <h3 className="text-xl font-semibold text-white mb-4">5.1 Condutas Permitidas</h3>
                <p className="text-gray-300 mb-4">
                  Você pode usar nossa plataforma para:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Criar e gerenciar cronogramas de estudos</li>
                  <li>Acompanhar seu progresso acadêmico</li>
                  <li>Utilizar ferramentas de análise e relatórios</li>
                  <li>Participar de comunidades de estudo</li>
                  <li>Buscar suporte e orientação</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-4">5.2 Condutas Proibidas</h3>
                <p className="text-gray-300 mb-4">
                  É proibido usar nossa plataforma para:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Atividades ilegais ou fraudulentas</li>
                  <li>Violar direitos de propriedade intelectual</li>
                  <li>Interferir no funcionamento da plataforma</li>
                  <li>Coletar dados de outros usuários</li>
                  <li>Transmitir vírus ou código malicioso</li>
                  <li>Spam ou comunicações não solicitadas</li>
                  <li>Assédio ou comportamento inadequado</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">6. Propriedade Intelectual</h2>
                
                <p className="text-gray-300 mb-4">
                  Todo o conteúdo da plataforma, incluindo textos, gráficos, logos, 
                  ícones, imagens, software e outros materiais, é propriedade do 
                  Papiro Tático ou de seus licenciadores e está protegido por leis 
                  de direitos autorais e outras leis de propriedade intelectual.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">7. Pagamentos e Assinaturas</h2>
                
                <h3 className="text-xl font-semibold text-white mb-4">7.1 Planos e Preços</h3>
                <p className="text-gray-300 mb-4">
                  Oferecemos diferentes planos de assinatura. Os preços e funcionalidades 
                  estão sujeitos a alterações com aviso prévio de 30 dias.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">7.2 Cobrança e Renovação</h3>
                <p className="text-gray-300 mb-4">
                  As assinaturas são cobradas antecipadamente e renovadas automaticamente. 
                  Você pode cancelar a qualquer momento através de sua conta.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">7.3 Reembolsos</h3>
                <p className="text-gray-300 mb-4">
                  Oferecemos garantia de 30 dias para novos usuários. Reembolsos são 
                  processados conforme nossa política de reembolso.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">8. Privacidade</h2>
                
                <p className="text-gray-300 mb-4">
                  Sua privacidade é importante para nós. Nossa coleta e uso de informações 
                  pessoais é regida por nossa Política de Privacidade, que faz parte 
                  integrante destes Termos de Uso.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">9. Limitação de Responsabilidade</h2>
                
                <p className="text-gray-300 mb-4">
                  Em nenhuma circunstância o Papiro Tático será responsável por:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                  <li>Danos diretos, indiretos, incidentais ou consequenciais</li>
                  <li>Perda de dados, lucros ou oportunidades de negócio</li>
                  <li>Interrupção de serviços ou falhas técnicas</li>
                  <li>Resultados de estudos ou aprovações em concursos</li>
                  <li>Conteúdo de terceiros ou links externos</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-6">10. Isenção de Garantias</h2>
                
                <p className="text-gray-300 mb-4">
                  Nossos serviços são fornecidos &quot;como estão&quot; e &quot;conforme disponível&quot;. 
                  Não garantimos que o serviço será ininterrupto, livre de erros ou 
                  atenderá às suas necessidades específicas.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">11. Rescisão</h2>
                
                <h3 className="text-xl font-semibold text-white mb-4">11.1 Rescisão pelo Usuário</h3>
                <p className="text-gray-300 mb-4">
                  Você pode encerrar sua conta a qualquer momento através das configurações 
                  da conta ou entrando em contato conosco.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">11.2 Rescisão pela Empresa</h3>
                <p className="text-gray-300 mb-4">
                  Podemos suspender ou encerrar sua conta imediatamente se você violar 
                  estes termos ou por outras razões legítimas.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">12. Modificações dos Termos</h2>
                
                <p className="text-gray-300 mb-4">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  Alterações significativas serão comunicadas com 30 dias de antecedência. 
                  O uso continuado constitui aceitação dos novos termos.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">13. Lei Aplicável</h2>
                
                <p className="text-gray-300 mb-4">
                  Estes termos são regidos pelas leis brasileiras. Qualquer disputa será 
                  resolvida nos tribunais competentes do Brasil.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">14. Disposições Gerais</h2>
                
                <h3 className="text-xl font-semibold text-white mb-4">14.1 Integralidade</h3>
                <p className="text-gray-300 mb-4">
                  Estes termos constituem o acordo completo entre você e o Papiro Tático 
                  em relação ao uso da plataforma.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">14.2 Divisibilidade</h3>
                <p className="text-gray-300 mb-4">
                  Se qualquer disposição destes termos for considerada inválida, as 
                  demais disposições permanecerão em vigor.
                </p>

                <h3 className="text-xl font-semibold text-white mb-4">14.3 Renúncia</h3>
                <p className="text-gray-300 mb-4">
                  A falha em fazer cumprir qualquer disposição destes termos não 
                  constituirá renúncia a tal disposição.
                </p>

                <h2 className="text-2xl font-bold text-white mb-6">15. Contato</h2>
                
                <p className="text-gray-300 mb-4">
                  Para questões relacionadas a estes Termos de Uso, entre em contato conosco:
                </p>
                
                <div className="bg-gray-700 p-6 rounded-lg">
                  <p className="text-gray-300 mb-2">
                    <strong>Email:</strong> legal@papirotatico.com
                  </p>
                  <p className="text-gray-300 mb-2">
                    <strong>Endereço:</strong> Rua das Flores, 123 - São Paulo, SP - 01234-567
                  </p>
                  <p className="text-gray-300">
                    <strong>Telefone:</strong> (11) 99999-9999
                  </p>
                </div>

                <div className="mt-8 p-4 bg-red-900 border border-red-700 rounded-lg">
                  <p className="text-red-200 text-sm">
                    <strong>Importante:</strong> Ao usar nossa plataforma, você confirma 
                    que leu, entendeu e concorda com estes Termos de Uso.
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

