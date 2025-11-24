const Footer = () => {
  return (
    <footer className="w-full px-6 py-6 text-center">
      <p className="text-foreground text-xs md:text-sm mb-2">
        © 2025 SPRIG. TODOS OS DIREITOS RESERVADOS.
      </p>
      <div className="flex items-center justify-center gap-6 text-xs md:text-sm">
        <a href="#acessibilidade" className="text-foreground hover:text-accent transition-colors">
          Acessibilidade
        </a>
        <a href="#termos" className="text-foreground hover:text-accent transition-colors">
          Termos De Uso
        </a>
      </div>
    </footer>
  );
};

export default Footer;
