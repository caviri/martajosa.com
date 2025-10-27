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
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
    </div>
  );
}
