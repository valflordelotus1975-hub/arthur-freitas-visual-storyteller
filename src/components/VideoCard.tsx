import { motion } from "framer-motion";

interface VideoCardProps {
  title: string;
  tag: string;
  youtubeId: string;
  description: string;
  index?: number;
}

const VideoCard = ({ title, tag, youtubeId, description, index = 0 }: VideoCardProps) => {
  return (
    <motion.div
      className="bg-card rounded-lg overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?modestbranding=1&rel=0&showinfo=0&controls=1&iv_load_policy=3`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4 md:p-5 flex-1 flex flex-col">
        <h3 className="font-ui font-semibold text-foreground uppercase tracking-wider mb-2" style={{ fontSize: "16px" }}>
          {title}
        </h3>
        <p style={{ fontSize: "14px" }} className="font-body text-secondary-foreground leading-relaxed">
          <span className="font-semibold text-foreground/70">{tag}:</span>{" "}
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default VideoCard;
