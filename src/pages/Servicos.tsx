import Header from "@/components/Header";
import Footer from "@/components/Footer";
import servicosBg from "@/assets/servicos-bg.png";
import { Package, Truck, MapPin, BarChart3 } from "lucide-react";

const Servicos = () => {
  const services = [
    {
      icon: Package,
      title: "Gestão De Estoque",
      description: "Cadastro E Gerenciamento Completo De Lotes De Sementes Com Controle De Validade, Alertas De Estoque Baixo E Geração Automática De QR Codes Para Rastreamento.",
      features: [
        "Cadastro De Lotes Com Informações Detalhadas",
        "Geração Automática De QR Code",
        "Alertas De Estoque Baixo E Validade",
        "Impressão De Etiquetas"
      ]
    },
    {
      icon: Truck,
      title: "Planejamento Logístico",
      description: "Sistema Inteligente De Planejamento De Rotas Que Otimiza Entregas, Reduz Custos E Melhora A Eficiência Da Distribuição De Sementes.",
      features: [
        "Otimização De Rotas Com Algoritmo VRP",
        "Gestão De Motoristas E Veículos",
        "Previsão Do Tempo Integrada",
        "Envio Automático De Rotas"
      ]
    },
    {
      icon: MapPin,
      title: "Rastreamento Em Tempo Real",
      description: "Acompanhamento Completo Das Entregas Com Linha Do Tempo, Notificações Automáticas E Confirmação De Recebimento Via QR Code.",
      features: [
        "Linha Do Tempo De Entregas",
        "Notificações Para Agricultores",
        "Confirmação Via QR Code",
        "Modo Offline Para Áreas Remotas"
      ]
    },
    {
      icon: BarChart3,
      title: "Relatórios E Transparência",
      description: "Geração Automática De Relatórios Detalhados E Painel Público De Transparência Com Dados Em Tempo Real Sobre O Programa.",
      features: [
        "Gráficos Interativos",
        "Filtros Avançados",
        "Exportação Em PDF E Excel",
        "Painel Público De Transparência"
      ]
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${servicosBg})` }}
    >
      <Header />
      
      <main className="flex-1 px-4 py-12 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 text-foreground"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-background/20 p-3 rounded-xl">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-xl font-semibold mt-2">{service.title}</h2>
                  </div>
                  
                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Recursos Principais:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-foreground/80 mt-1">•</span>
                          <span className="text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Servicos;
