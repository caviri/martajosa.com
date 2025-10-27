import { useState, useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videoSrc?: string;
  fallbackImage: string;
  fallbackColor: string;
  className?: string;
  parallaxOffset?: number;
}

export function VideoBackground({
  videoSrc,
  fallbackImage,
  fallbackColor,
  className = '',
  parallaxOffset = 0,
}: VideoBackgroundProps) {
  const [canPlayVideo, setCanPlayVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (!prefersReducedMotion && !isMobile && videoSrc) {
      const video = document.createElement('video');
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;

      video.oncanplay = () => {
        setCanPlayVideo(true);
      };

      video.onerror = () => {
        setCanPlayVideo(false);
      };

      video.src = videoSrc;
    }
  }, [videoSrc]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setCanPlayVideo(false);
      });
    }
  };

  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        transform: `translateY(${parallaxOffset}px)`,
        willChange: 'transform',
      }}
    >
      {/* Texture overlay layer */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Light brown background tint */}
      <div className="absolute inset-0 bg-amber-50/20 z-[1]" />

      {canPlayVideo && videoSrc ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={handleVideoLoaded}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={videoSrc} type="video/webm" />
          </video>
          {!videoLoaded && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${fallbackImage})` }}
            />
          )}
        </>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${fallbackImage})`,
            backgroundColor: fallbackColor,
          }}
        />
      )}

      {/* Enhanced gradient overlays - top and bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-20" />
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20" />
    </div>
  );
}
