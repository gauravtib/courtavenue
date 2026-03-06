'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactLenis, type LenisRef } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useLayoutEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

type SmoothScrollingProps = {
  children: React.ReactNode;
};

export default function SmoothScrolling({ children }: SmoothScrollingProps) {
  const lenisRef = useRef<LenisRef | null>(null);
  const isSpacePressed = useRef(false);
  const pathname = usePathname();

  // Disable browser scroll restoration globally
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Reset scroll position on route change and page load
  useLayoutEffect(() => {
    // Reset Lenis scroll position immediately
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
    // Also reset native scroll as fallback
    window.scrollTo(0, 0);
  }, [pathname]);

  // Refresh ScrollTrigger after scroll reset and DOM updates
  useEffect(() => {
    // Delay refresh to allow page components to clean up and reinitialize
    const timeoutId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    return () => cancelAnimationFrame(timeoutId);
  }, [pathname]);

  // Handle page reload/refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Reset scroll before page unloads
      if (lenisRef.current?.lenis) {
        lenisRef.current.lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // 1. Handle Spacebar Press
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        isSpacePressed.current = true;
      }
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === 'Space') isSpacePressed.current = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // 2. The Animation Loop
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);

      // Manual Spacebar Scrolling
      if (isSpacePressed.current && lenisRef.current?.lenis) {
        const scrollSpeed = 15;
        const currentScroll = lenisRef.current.lenis.scroll;

        lenisRef.current.lenis.scrollTo(currentScroll + scrollSpeed, {
          immediate: true,
        });
      }
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // 3. Lenis Settings for Mouse Wheel
  const lenisOptions = {
    autoRaf: false, // We manage the loop manually via GSAP
    duration: 1.5, // The "smoothness" duration (higher = smoother)
    wheelMultiplier: 0.8, // Mouse wheel speed (higher = faster)
    touchMultiplier: 2, // Touch/Trackpad speed
    infinite: false, // Infinite scrolling
  };

  return (
    <ReactLenis root options={lenisOptions} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
