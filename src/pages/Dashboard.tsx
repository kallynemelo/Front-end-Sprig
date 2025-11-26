import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import iconPackage from "@/assets/icon-package.png";
import iconTruck from "@/assets/icon-truck.png";
import iconMoney from "@/assets/icon-money.png";
import iconClock from "@/assets/icon-clock.png";
import MapComponent from "@/components/MapComponent";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-3 md:px-12 bg-background flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Sprig Logo" className="h-12 md:h-14" />
        </Link>
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#9BAA94] flex items-center justify-center text-white font-bold text-lg md:text-xl">
          GTE
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="w-full bg-[#586D5F] px-6 md:px-12">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-3 overflow-x-auto">
          <button className="px-6 py-2 rounded-full bg-[#9BAA94] text-white text-sm font-medium whitespace-nowrap">
            DASHBOARD
          </button>
          <button className="px-4 py-1 text-white text-sm font-medium whitespace-nowrap hover:opacity-80 transition-opacity">
            LOGÍSTICA
          </button>
          <button className="px-4 py-1 text-white text-sm font-medium whitespace-nowrap hover:opacity-80 transition-opacity">
            RASTREABILIDADE
          </button>
          <button className="px-4 py-1 text-white text-sm font-medium whitespace-nowrap hover:opacity-80 transition-opacity">
            ESTOQUE
          </button>
          <button className="px-4 py-1 text-white text-sm font-medium whitespace-nowrap hover:opacity-80 transition-opacity">
            RELATÓRIOS
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 md:px-12 md:py-12">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            DASHBOARD GERAL
          </h1>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {/* Card 1 */}
            <div className="bg-[#69835C] rounded-3xl p-6 md:p-8 text-white">
              <p className="text-sm md:text-base font-medium mb-4 opacity-90">
                TEMPO MÉDIO DE ENTREGA
              </p>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-4xl md:text-5xl font-bold">4h 32 min</h2>
                <img src={iconPackage} alt="Package" className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <button className="text-sm text-[#091855] font-medium hover:underline">
                Click para mais detalhes
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#69835C] rounded-3xl p-6 md:p-8 text-white">
              <p className="text-sm md:text-base font-medium mb-4 opacity-90">
                ENTREGAS CONCLUÍDAS
              </p>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-4xl md:text-5xl font-bold">1.200</h2>
                <img src={iconTruck} alt="Truck" className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <button className="text-sm text-[#091855] font-medium hover:underline">
                Click para mais detalhes
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#69835C] rounded-3xl p-6 md:p-8 text-white">
              <p className="text-sm md:text-base font-medium mb-4 opacity-90">
                ENTREGAS EM ANDAMENTO
              </p>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-4xl md:text-5xl font-bold">8</h2>
                <img src={iconClock} alt="Clock" className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <button className="text-sm text-[#091855] font-medium hover:underline">
                Click para mais detalhes
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-[#69835C] rounded-3xl p-6 md:p-8 text-white">
              <p className="text-sm md:text-base font-medium mb-4 opacity-90">
                CUSTO POR KM
              </p>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-4xl md:text-5xl font-bold">R$ 2,50</h2>
                <img src={iconMoney} alt="Money" className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <button className="text-sm text-[#091855] font-medium hover:underline">
                Click para mais detalhes
              </button>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Mapas de Rotas e Status
            </h2>
            <div className="bg-muted/30 p-4 md:p-8 rounded-lg">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div style={{ height: "400px", width: "100%" }} className="rounded-lg">
                  <MapComponent />
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-600"></div>
                  <span className="text-sm font-medium">Entregue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <span className="text-sm font-medium">Em Rota</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-600"></div>
                  <span className="text-sm font-medium">Atraso</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gray-800"></div>
                  <span className="text-sm font-medium">Armazém</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-6 md:px-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground mb-2">
            © 2025 SPRIG. TODOS OS DIREITOS RESERVADOS.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Acessibilidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Termos De Uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
