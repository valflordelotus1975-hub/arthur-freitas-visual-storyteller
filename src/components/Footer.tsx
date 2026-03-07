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
      </div>
    </footer>
  );
};

export default Footer;
