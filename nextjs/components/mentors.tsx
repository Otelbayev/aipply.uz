"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "/images/mentors/1.png",
  "/images/mentors/2.png",
  "/images/mentors/3.png",
  "/images/mentors/4.png",
  "/images/mentors/5.png",
];

const Mentors = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const visibleImages = [
    images[index % images.length],
    images[(index + 1) % images.length],
    images[(index + 2) % images.length],
  ];

  return (
    <div className="container">
      <section id="mentors">
        <motion.h2
          initial={{ x: -15, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className="bg-title text-3xl pt-10 md:text-5xl md:pt-20 font-bold"
        >
          Bizning mentorlarimiz
        </motion.h2>
      </section>

      <div className="relative py-6 md:py-10">
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-4 justify-center"
            >
              {visibleImages.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[80%] sm:w-[45%] lg:w-[30%]"
                >
                  <Image
                    src={img}
                    alt={`Image ${i}`}
                    width={400}
                    height={300}
                    className=" shadow-lg object-cover w-full h-auto"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-10 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 border border-gray-300 p-2 rounded-full shadow-md transition"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-10 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 border border-gray-300 p-2 rounded-full shadow-md transition"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Mentors;
