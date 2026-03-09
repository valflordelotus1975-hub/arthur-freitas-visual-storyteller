interface VideoCardProps {
  title: string;
  tag: string;
  youtubeId: string;
  description: string;
}

const VideoCard = ({ title, tag, youtubeId, description }: VideoCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden flex flex-col h-full">
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
    </div>
  );
};

export default VideoCard;
