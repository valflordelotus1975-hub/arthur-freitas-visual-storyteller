const BeforeAfter = () => {
  return (
    <section className="px-4 md:px-8 max-w-6xl mx-auto py-16">
      {/* Title with lines */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-px bg-border" />
        <h2
          className="font-ui uppercase text-primary whitespace-nowrap"
          style={{ fontSize: "13px", letterSpacing: "0.4em" }}
        >
          Antes e Depois
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Videos side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p
            className="font-ui uppercase text-primary text-center mb-3"
            style={{ fontSize: "13px", letterSpacing: "0.4em" }}
          >
            Antes
          </p>
          <div className="bg-card rounded-lg overflow-hidden relative" style={{ paddingBottom: "177.78%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/r_DrDHASNb4?modestbranding=1&rel=0&showinfo=0&controls=1&iv_load_policy=3"
              title="Antes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div>
          <p
            className="font-ui uppercase text-primary text-center mb-3"
            style={{ fontSize: "13px", letterSpacing: "0.4em" }}
          >
            Depois
          </p>
          <div className="bg-card rounded-lg overflow-hidden relative" style={{ paddingBottom: "177.78%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/R_GDz_3ml4o?modestbranding=1&rel=0&showinfo=0&controls=1&iv_load_policy=3"
              title="Depois"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 text-center max-w-2xl mx-auto">
        <h3 className="font-ui font-semibold text-foreground uppercase tracking-wider mb-2" style={{ fontSize: "16px" }}>
          Café da Origem
        </h3>
        <p style={{ fontSize: "14px" }} className="font-body text-secondary-foreground leading-relaxed">
          <span className="font-semibold text-foreground/70">Storytelling Visual:</span>{" "}
          Recut de material existente com maior dinâmica visual — do processo de produção à mesa do espectador.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfter;
