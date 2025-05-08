
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  posterUrl,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={posterUrl}
        playsInline
        loop
        muted={isMuted}
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute bottom-3 right-3 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className="bg-black/30 hover:bg-black/50 backdrop-blur-sm border-0 text-white"
          onClick={togglePlay}
        >
          <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-black/30 hover:bg-black/50 backdrop-blur-sm border-0 text-white"
          onClick={toggleMute}
        >
          <Icon name={isMuted ? "VolumeX" : "Volume2"} size={16} />
        </Button>
      </div>
    </div>
  );
};

export default VideoPlayer;
