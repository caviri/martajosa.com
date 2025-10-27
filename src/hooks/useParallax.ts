import { useState, useEffect } from 'react';

export function useParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const supportsPassive = (() => {
      let passive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          get: () => {
            passive = true;
            return true;
          },
        });
        window.addEventListener('test', () => {}, opts);
        window.removeEventListener('test', () => {});
      } catch (e) {
        passive = false;
      }
      return passive;
    })();

    window.addEventListener('scroll', handleScroll, supportsPassive ? { passive: true } : false);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
}

export function calculateParallax(scrollY: number, speed: number): number {
  return scrollY * speed;
}
