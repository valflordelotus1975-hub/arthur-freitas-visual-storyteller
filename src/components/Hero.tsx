const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-10 md:pt-20 pb-2 md:pb-6">
      <h1 className="font-display font-light text-primary tracking-tight w-full" style={{ fontSize: "52px" }}>
        <span className="md:text-7xl md:block hidden">Arthur Freitas</span>
        <span className="md:hidden">Arthur Freitas</span>
      </h1>
      <p
        className="mt-4 font-ui uppercase text-muted-foreground text-center w-full px-4"
        style={{ fontSize: "14px", letterSpacing: "0.22em" }}
      >
        Editor de Vídeo — Emoção, Retenção e Conversão
      </p>
      <div className="mt-4 w-16 h-px bg-muted-foreground/40" />
      <p
        className="mt-4 font-ui uppercase text-primary tracking-widest"
        style={{ fontSize: "13px", letterSpacing: "0.4em" }}
      >
        Trabalhos
      </p>
    </section>
  );
};

export default Hero;
