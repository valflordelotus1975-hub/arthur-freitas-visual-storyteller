import VideoCard from "./VideoCard";

const projects = [
  {
    title: "Amparo Maternal",
    subtitle: "WeSave",
    youtubeId: "dN41EVGepXQ",
    description:
      "Campanha social para arrecadação de fundos. Hook de lettering com riser nos primeiros 3 segundos para travar o scroll, duas linguagens visuais intencionais: coloração limpa e de autoridade na apresentadora, paleta suja e degradada nos assets das crianças para comunicar necessidade.",
  },
  {
    title: "Carmelo",
    subtitle: "WeSave",
    youtubeId: "LjqSX0nMQ5E",
    description:
      "Campanha de arrecadação para reforma de convento — edição com narrativa emocional e religiosa para maximizar conexão e doações.",
  },
  {
    title: "Pizzaria",
    subtitle: "Protótipo de vídeo gastronômico",
    youtubeId: "KXjn03f4qzo",
    description:
      "Storytelling visual estruturado em Hook, Processo, Entrega e Resultado. Decupagem alternando aceleração e slow motion para controlar a emoção do espectador e sincronizar com a música. Correção de cor para paleta quente e cinematográfica.",
  },
  {
    title: "Focaccia",
    subtitle: "Padaria Feito à Mão",
    youtubeId: "512Lhu6_s5s",
    description:
      "Primeiro projeto do Casa Branca — sistema próprio de produção cinematográfica com IA que substitui câmera, iluminação e locação física. Imagens geradas no Freepik, movimento interpolado no Kling. Food film de nível comercial sem produção tradicional.",
  },
];

const PortfolioGrid = () => {
  return (
    <section className="px-4 md:px-8 max-w-6xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <VideoCard key={project.youtubeId} {...project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
