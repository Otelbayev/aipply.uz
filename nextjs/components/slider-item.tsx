"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function AutoMarqueeSlider({
  images,
  speed = 120,
  gapClass = "gap-4",
  aspect,
  width,
}: {
  images: string[];
  speed?: number;
  gapClass?: string;
  aspect: string;
  width?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const shouldReduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  const doubled = [...images, ...images];

  // 🔹 useCallback bilan o‘raldi
  const startLoop = useCallback(async () => {
    if (!trackRef.current) return;
    const total = trackRef.current.scrollWidth / 2;
    if (total <= 0) return;

    const duration = total / speed;
    await controls.start({
      x: -total,
      transition: { duration, ease: "linear" },
    });

    await controls.set({ x: 0 });
    startLoop();
  }, [controls, speed]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = window.setTimeout(() => setReady(true), 50);
    return () => window.clearTimeout(id);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion || !ready) return;

    let paused = false;

    const run = () => {
      if (!paused) startLoop();
    };

    controls.set({ x: 0 });
    run();

    const onResize = () => {
      paused = true;
      controls.stop();
      requestAnimationFrame(() => {
        paused = false;
        controls.set({ x: 0 });
        run();
      });
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      controls.stop();
    };
  }, [ready, shouldReduceMotion, speed, images, startLoop, controls]);

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => {
    if (!shouldReduceMotion) startLoop();
  };

  return (
    <div
      className="w-full overflow-hidden"
      aria-label="Auto scrolling image slider"
    >
      <motion.div
        ref={trackRef}
        animate={controls}
        className={`flex ${gapClass} items-center will-change-transform`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className={`
              relative flex-none
              ${width ? width : "w-1/2"} md:w-1/4 lg:w-1/5 
              ${aspect} overflow-hidden rounded-2xl shadow-lg
            `}
          >
            <Image
              src={src}
              alt={`slide-${i}`}
              fill
              className="object-contain"
              priority={i < 5}
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
