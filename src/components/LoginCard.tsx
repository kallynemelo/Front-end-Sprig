import { useState } from "react";
import logo from "@/assets/logo.png";
import govbrLogo from "@/assets/govbr-logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  const handleGovBrLogin = () => {
    console.log("Gov.br login initiated");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-card rounded-[3rem] px-8 py-12 md:px-12 md:py-16 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <img src={logo} alt="Sprig Logo" className="h-16 md:h-20 mb-4" />
          <p className="text-card-foreground text-center text-sm md:text-base max-w-xs">
            Transparência e Eficiência no Ciclo das Sementes.
          </p>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground mb-8">
          ENTRAR
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="E-MAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-accent text-accent-foreground placeholder:text-accent-foreground/70 border-0 h-12 rounded-full px-6"
            required
          />
          
          <Input
            type="password"
            placeholder="SENHA"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-accent text-accent-foreground placeholder:text-accent-foreground/70 border-0 h-12 rounded-full px-6"
            required
          />

          <div className="text-right">
            <a 
              href="#esqueci-senha" 
              className="text-xs text-primary-foreground hover:underline font-medium"
            >
              ESQUECI MINHA SENHA
            </a>
          </div>

          <Button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-full text-base"
          >
            ENTRAR
          </Button>

          <Button
            type="button"
            onClick={handleGovBrLogin}
            className="w-full bg-govbr hover:bg-govbr/90 text-secondary-foreground font-medium h-12 rounded-full text-base flex items-center justify-center gap-2"
          >
            <span>Entrar com</span>
            <img src={govbrLogo} alt="Gov.br" className="h-5" />
          </Button>

          <div className="text-center pt-2">
            <a 
              href="#criar-conta" 
              className="text-sm text-primary-foreground hover:underline font-medium"
            >
              CRIAR CONTA
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
