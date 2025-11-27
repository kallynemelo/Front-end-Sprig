import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import cadastroBg from "@/assets/cadastro-bg.png";

type UserType = "gestor" | "tecnico" | "agricultor" | null;

const Cadastro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [userType, setUserType] = useState<UserType>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cadastro:", { nome, cpfCnpj, email, senha, userType });
    navigate("/");
  };

  return (
    <div 
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${cadastroBg})` }}
    >
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-2xl mx-auto">
          <div className="bg-card rounded-[2rem] px-8 py-10 md:px-12 md:py-12 shadow-2xl">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-primary-foreground mb-8">
              CRIE SUA CONTA
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-foreground">
                    NOME COMPLETO / RAZÃO SOCIAL
                  </label>
                  <Input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="bg-accent text-accent-foreground border-0 h-12 rounded-lg px-4"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-foreground">
                    CPF OU CNPJ
                  </label>
                  <Input
                    type="text"
                    value={cpfCnpj}
                    onChange={(e) => setCpfCnpj(e.target.value)}
                    className="bg-accent text-accent-foreground border-0 h-12 rounded-lg px-4"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-foreground">
                    EMAIL
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-accent text-accent-foreground border-0 h-12 rounded-lg px-4"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-foreground">
                    CRIE SUA SENHA
                  </label>
                  <Input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="bg-accent text-accent-foreground border-0 h-12 rounded-lg px-4"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-foreground">
                  CONFIRME A SUA SENHA
                </label>
                <Input
                  type="password"
                  value={confirmaSenha}
                  onChange={(e) => setConfirmaSenha(e.target.value)}
                  className="bg-accent text-accent-foreground border-0 h-12 rounded-lg px-4"
                  required
                />
              </div>

              {/* User Type Selector */}
              <div className="bg-accent rounded-full p-2 mt-6">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setUserType("gestor")}
                    className={`flex-1 py-3 px-4 text-sm font-bold text-primary-foreground transition-all rounded-full ${
                      userType === "gestor"
                        ? "bg-white shadow-md"
                        : "hover:bg-white/20"
                    }`}
                  >
                    GESTOR
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("tecnico")}
                    className={`flex-1 py-3 px-4 text-sm font-bold text-primary-foreground transition-all rounded-full ${
                      userType === "tecnico"
                        ? "bg-white shadow-md"
                        : "hover:bg-white/20"
                    }`}
                  >
                    TÉCNICO
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("agricultor")}
                    className={`flex-1 py-3 px-4 text-sm font-bold text-primary-foreground transition-all rounded-full ${
                      userType === "agricultor"
                        ? "bg-white shadow-md"
                        : "hover:bg-white/20"
                    }`}
                  >
                    AGRICULTOR
                  </button>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button 
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-primary-foreground font-bold h-12 px-16 rounded-full text-base"
                >
                  FINALIZAR
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cadastro;
