"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    src: "/icons/partners/1.png",
    alt: "Toshkent Davlat Transport Universiteti",
  },
  { src: "/icons/partners/2.png", alt: "O‘zbekiston Respublikasi" },
  { src: "/icons/partners/3.png", alt: "Davlat Belgisi" },
  {
    src: "/icons/partners/4.png",
    alt: "Maktabgacha va Maktab Ta’limi Vazirligi",
  },
  { src: "/icons/partners/5.png", alt: "SQB Bank" },
  { src: "/icons/partners/6.png", alt: "IT Park" },
  { src: "/icons/partners/7.png", alt: "Bilgi" },
  { src: "/icons/partners/8.png", alt: "IT Bilim" },
];

import React from "react";

const Sponsors = () => {
  return (
    <div className="container">
      <section className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl p-6 md:p-10 text-white">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" text-3xl md:text-5xl font-bold mb-4"
        >
          Bitiruvchilarimiz ish joylari
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm md:text-base mb-8"
        >
          Aipplyning eng yaxshi bitiruvchilarini bizning hamkorlar –
          O‘zbekistonning yetakchi kompaniyalari ishga qabul qiladilar.
        </motion.p>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-[150px] h-[80px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="150px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
