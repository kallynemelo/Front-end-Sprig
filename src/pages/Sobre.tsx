import Header from "@/components/Header";
import Footer from "@/components/Footer";
import sobreBg from "@/assets/sobre-bg.png";
import sobreDecoration from "@/assets/sobre-decoration.png";

const Sobre = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${sobreBg})` }}
    >
      <div className="absolute inset-0 bg-background/40" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
          <div className="w-full max-w-4xl">
            <div className="bg-card/90 backdrop-blur-sm rounded-[3rem] px-8 py-12 md:px-16 md:py-16">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-8">
                SOBRE NÓS
              </h1>
              
              <div className="space-y-8 text-foreground">
                <p className="text-lg md:text-xl leading-relaxed">
                  Seja bem-vindo(a) a Sprig!
                </p>
                
                <p className="text-base md:text-lg leading-relaxed">
                  Somos uma empresa que integra o controle de estoque, logística, rastreamento e transparência pública do Programa de Aquisição e Distribuição de Sementes. Além disso, otimizamos o transporte e acompanhamento das entregas, garantindo que gestores, técnicos e agricultores tenham acesso rápido, eficiente e sustentável às informações.
                </p>
                
                <div className="pt-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    MISSÃO
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed">
                    Fornecer soluções inovadoras e sustentáveis que capacitem nossos clientes a atingir seu potencial máximo, simplificando processos e criando um impacto positivo duradouro na comunidade
                  </p>
                </div>
                
                <div className="pt-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    VALORES
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
                    <li>Integridade e Transparência</li>
                    <li>Excelência e Qualidade</li>
                    <li>Inovação Constante</li>
                    <li>Foco no Cliente</li>
                    <li>Sustentabilidade</li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    VISÃO
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed">
                    Ser reconhecido como a marca líder de referência no setor logístico até 5 anos, expandindo nossa atuação para todo Nordeste brasileiro e mantendo a mais alta taxa de satisfação e fidelidade de nossos usuários.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Sobre;
