import VideoCard from "./VideoCard";

const projects = [
  {
    title: "Amparo Maternal",
    tag: "Estrutura de Retenção + Emocional",
    youtubeId: "dN41EVGepXQ",
    description:
      "Campanha social de arrecadação de fundos para um instituto de crianças carentes.",
  },
  {
    title: "Carmelo",
    tag: "Estrutura de Retenção + Emocional",
    youtubeId: "LjqSX0nMQ5E",
    description:
      "Campanha social de arrecadação de fundos para o Carmelo de Patos de Minas.",
  },
  {
    title: "Pizzaria",
    tag: "Storytelling Visual",
    youtubeId: "KXjn03f4qzo",
    description:
      "Hook, Processo, Entrega e Resultado com correção de cores para despertar desejo e manter qualidade cinematográfica.",
  },
  {
    title: "Focaccia",
    tag: "Storytelling Visual + IA",
    youtubeId: "512Lhu6_s5s",
    description:
      "Sistema próprio de produção cinematográfica com IA — substitui câmera, iluminação e locação física.",
  },
];

const PortfolioGrid = () => {
  return (
    <section className="px-4 md:px-8 max-w-6xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <VideoCard key={project.youtubeId} {...project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
