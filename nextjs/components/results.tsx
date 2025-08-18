import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AutoMarqueeSlider from "./slider-item";

const Results = () => {
  const images = [
    "/images/results/dasturlash/1.jpg",
    "/images/results/dasturlash/2.png",
    "/images/results/dasturlash/3.png",
    "/images/results/dasturlash/4.jpg",
    "/images/results/grafik/1.png",
    "/images/results/grafik/2.png",
    "/images/results/grafik/3.png",
    "/images/results/inex/1.png",
    "/images/results/inex/2.png",
    "/images/results/inex/3.png",
    "/images/results/inex/4.png",
    "/images/results/inex/5.png",
    "/images/results/ks/2.jpg",
    "/images/results/ks/3.jpg",
  ];

  return (
    <>
      <div className="container">
        <motion.h2
          initial={{ x: -15, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className="bg-title text-3xl pt-10 pb-5 md:text-5xl md:pt-20  md:pb-10 font-bold"
        >
          O’quvchilar natijasi
        </motion.h2>
      </div>
      <AutoMarqueeSlider
        aspect="aspect-[4/7]"
        images={images}
        speed={60}
        gapClass="gap-2"
      />
    </>
  );
};

export default Results;
