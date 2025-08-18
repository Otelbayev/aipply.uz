"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = isMobile ? "/images/mobile-hero.png" : "/images/hero.png";
    img.onload = () => setBgLoaded(true);
  }, [isMobile]);

  const fadeVariant = (delay = 0) => ({
    initial: isMobile
      ? { opacity: 0, x: 0, y: 30 }
      : { opacity: 0, y: 0, x: -30 },
    animate: { opacity: 1, x: 0, y: 0 },
    transition: { duration: 0.5 + delay, delay },
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={bgLoaded ? { opacity: 1 } : {}}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="
    relative min-h-[calc(100dvh-64px)] flex items-center
    bg-center bg-cover
    bg-[url('/images/mobile-hero.png')]  
    md:bg-[url('/images/hero.png')]  
    before:absolute before:top-0 before:left-0 before:right-0 before:h-24 
    before:bg-gradient-to-b before:from-white before:to-transparent
    after:absolute after:bottom-0 after:left-0 after:right-0 after:h-24
    after:bg-gradient-to-t after:from-white after:to-transparent
  "
    >
      {bgLoaded && (
        <div className="container">
          <motion.div {...fadeVariant()}>
            <div className="flex flex-col justify-around md:items-start items-center min-h-[calc(100vh-64px)] md:min-h-auto">
              <h1 className="text-4xl text-center md:text-left md:text-7xl max-w-3xl bg-title font-extrabold title leading-snug">
                Daromadli kelajak sari qadam tashlang!
              </h1>

              <motion.div {...fadeVariant(0.3)} className="mt-10 inline-block">
                <div className="bg-white/50 w-fit backdrop-blur-[2px] shadow-xl rounded-lg p-8 flex flex-col items-center md:items-start">
                  <p className="text-sky-600 font-bold text-3xl text-center md:text-4xl md:text-left bg-title mb-5">
                    Ochiq darsga yoziling!
                  </p>
                  <Link href={"/lid"} className="w-full">
                    <button className="w-full px-6 py-2  cursor-pointer bg-blue-700 hover:bg-blue-800 text-white rounded-md font-medium transition">
                      Ro&apos;yxatdan o&apos;tish
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
