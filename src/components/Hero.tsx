const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-20">
      <h1 className="font-display font-light text-4xl md:text-7xl text-primary tracking-tight">
        Arthur Freitas
      </h1>
      <p
        className="mt-6 font-ui uppercase text-muted-foreground"
        style={{ fontSize: "10px", letterSpacing: "0.35em" }}
      >
        Editor de Vídeo — Emoção, Retenção e Conversão
      </p>
      <div className="mt-6 w-16 h-px bg-muted-foreground/40" />
    </section>
  );
};

export default Hero;
