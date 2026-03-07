interface VideoCardProps {
  title: string;
  subtitle?: string;
  youtubeId: string;
  description: string;
}

const VideoCard = ({ title, subtitle, youtubeId, description }: VideoCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden flex flex-col h-full">
      <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?vq=hd1080`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-ui text-sm font-semibold text-foreground uppercase tracking-wider">
          {title}
        </h3>
        {subtitle && (
          <p className="font-ui text-xs text-muted-foreground mt-1">{subtitle}</p>
        )}
        <p className="font-body text-sm text-secondary-foreground mt-3 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
