import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Sprig Logo" className="h-12 md:h-16" />
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link 
            to="/sobre" 
            className="px-8 py-3 rounded-full bg-card text-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            SOBRE
          </Link>
          <a 
            href="#servicos" 
            className="px-8 py-3 rounded-full text-foreground text-sm font-medium hover:opacity-80 transition-opacity"
          >
            SERVIÇOS
          </a>
          <a 
            href="#contato" 
            className="px-8 py-3 rounded-full text-foreground text-sm font-medium hover:opacity-80 transition-opacity"
          >
            CONTATO
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
