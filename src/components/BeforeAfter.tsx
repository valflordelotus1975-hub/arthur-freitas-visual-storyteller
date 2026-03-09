import { motion } from "framer-motion";

const BeforeAfter = () => {
  return (
    <section className="px-4 md:px-8 max-w-6xl mx-auto py-16">
      {/* Title with lines */}
      <motion.div
        className="flex items-center gap-4 mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex-1 h-px bg-border" />
        <h2
          className="font-ui uppercase text-primary whitespace-nowrap"
          style={{ fontSize: "13px", letterSpacing: "0.4em" }}
        >
          Antes e Depois
        </h2>
        <div className="flex-1 h-px bg-border" />
      </motion.div>

      {/* Videos side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>

      {/* Description */}
      <motion.div
        className="mt-8 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        <h3 className="font-ui font-semibold text-foreground uppercase tracking-wider mb-2" style={{ fontSize: "16px" }}>
          Café da Origem
        </h3>
        <p style={{ fontSize: "14px" }} className="font-body text-secondary-foreground leading-relaxed">
          <span className="font-semibold text-foreground/70">Storytelling Visual:</span>{" "}
          Recut de material existente com maior dinâmica visual — do processo de produção à mesa do espectador.
        </p>
      </motion.div>
    </section>
  );
};

export default BeforeAfter;
