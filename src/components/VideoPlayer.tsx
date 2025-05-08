
import React, { useRef, useState, useEffect } from "react";
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

  // Auto-play when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !isPlaying) {
            videoRef.current.play();
            setIsPlaying(true);
          } else if (!entry.isIntersecting && videoRef.current && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={posterUrl}
        playsInline
        loop
        muted={isMuted}
        preload="auto"
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
</current-code>

<pp-write filepath="src/components/Header.tsx" partial>
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import VideoPlayer from "@/components/VideoPlayer";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-b from-[#1A1F2C] to-[#33C3F0] min-h-[60vh] overflow-hidden">
      {/* Animated clouds */}
      <div className="absolute inset-0 opacity-30">
        <div className="cloud absolute top-[10%] left-[10%] w-24 h-12 bg-[#FEC6A1] rounded-full animate-float"></div>
        <div className="cloud absolute top-[15%] right-[15%] w-32 h-16 bg-[#FEC6A1] rounded-full animate-float-delay"></div>
        <div className="cloud absolute top-[25%] left-[30%] w-20 h-10 bg-[#FEC6A1] rounded-full animate-float-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto py-4 px-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png"
            alt="MEMELAND Logo"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-white font-bold text-xl font-playfair">
            MEMELAND
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-white hover:text-[#FFC107] transition-colors"
          >
            About
          </a>
          <a
            href="#map"
            className="text-white hover:text-[#FFC107] transition-colors"
          >
            Island Map
          </a>
          <a
            href="#features"
            className="text-white hover:text-[#FFC107] transition-colors"
          >
            Features
          </a>
          <a
            href="#community"
            className="text-white hover:text-[#FFC107] transition-colors"
          >
            Community
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-12 pb-24 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-playfair mb-4">
            Welcome to the <span className="text-[#FFC107]">MEMELAND</span>{" "}
            Island
          </h1>
          <p className="text-white/80 text-lg mb-4 max-w-lg">
            "Bitcoin is boring. We're buying a REAL ISLAND."
          </p>
          <p className="text-white/80 mb-8 max-w-lg">
            The first token in the world that will transform into a real island
            in the ocean. And this is not a joke.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-[#FFC107] text-[#1A1F2C] hover:bg-[#FFC107]/80">
              <Icon name="Compass" className="mr-2" size={18} />
              Explore Island
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1A1F2C]"
              as="a"
              href="https://t.me/memeland_CTO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="Users" className="mr-2" size={18} />
              Join Community
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <VideoPlayer 
            videoUrl="https://cdn.poehali.dev/files/memeland_promo.mp4" 
            posterUrl="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png"
            className="w-full max-w-md rounded-2xl shadow-lg overflow-hidden"
          />
        </div>
      </div>

      {/* Gentle waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
