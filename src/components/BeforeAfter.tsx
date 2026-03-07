const BeforeAfter = () => {
  return (
    <section className="px-4 md:px-8 max-w-6xl mx-auto py-16">
      {/* Title with lines */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-px bg-border" />
        <h2
          className="font-ui uppercase text-muted-foreground text-xs whitespace-nowrap"
          style={{ letterSpacing: "0.35em" }}
        >
          Antes e Depois
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Videos side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p
            className="font-ui uppercase text-muted-foreground text-center mb-3"
            style={{ fontSize: "10px", letterSpacing: "0.3em" }}
          >
            Antes
          </p>
          <div className="bg-card rounded-lg overflow-hidden relative" style={{ paddingBottom: "177.78%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/r_DrDHASNb4?vq=hd1080"
              title="Antes"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div>
          <p
            className="font-ui uppercase text-muted-foreground text-center mb-3"
            style={{ fontSize: "10px", letterSpacing: "0.3em" }}
          >
            Depois
          </p>
          <div className="bg-card rounded-lg overflow-hidden relative" style={{ paddingBottom: "177.78%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/R_GDz_3ml4o?vq=hd1080"
              title="Depois"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8 text-center max-w-2xl mx-auto">
        <h3 className="font-ui text-sm font-semibold text-foreground uppercase tracking-wider">
          Recut de vídeo gastronômico (Café da Origem)
        </h3>
        <p className="font-body text-sm text-secondary-foreground mt-3 leading-relaxed">
          Análise e reconstrução de material existente. Problema identificado: takes de 40 segundos
          sem sincronia com a música mesmo em ritmo acelerado. Solução: cortes cirúrgicos
          sincronizados nas batidas, ritmo reconstruído e storytelling visual aplicado. Mesmo
          material bruto, resultado completamente diferente.
        </p>
      </div>
    </section>
  );
};

export default BeforeAfter;
