const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-12 mt-16">
      <div className="text-center">
        <p
          className="font-ui uppercase text-muted-foreground text-xs mb-4"
          style={{ letterSpacing: "0.35em" }}
        >
          Contato
        </p>
        <a
          href="tel:+5534997910546"
          className="font-ui text-foreground text-lg hover:text-primary transition-colors"
        >
          +55 (34) 99791-0546
        </a>
        <div className="mt-6">
          <a
            href="https://wa.me/5534997910546?text=Olá%20Arthur%2C%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20conversar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-ui uppercase text-sm tracking-[0.2em] text-foreground border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Fale Comigo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
