"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const data = [
  {
    icon: "/icons/why/1.png",
    title: "Kasbingizda sun’iy intellektni qo‘llang!",
  },
  { icon: "/icons/why/2.png", title: "Ish topishingizga yordamlashamiz!" },
  { icon: "/icons/why/3.png", title: "Bilimingizni muvaffaqiyatli soting!" },
  { icon: "/icons/why/4.png", title: "Mablag'ingiz yo'qmi?-yechimi bor!" },
  { icon: "/icons/why/5.png", title: "Eng so‘ngi o‘quv dasturlari Siz uchun!" },
  {
    icon: "/icons/why/6.png",
    title: "Kuchli mutaxassislardan sifatli ta’lim oling!",
  },
  { icon: "/icons/why/7.png", title: "Amaliyot, real loyihalar va portfolio!" },
  {
    icon: "/icons/why/8.png",
    title: "Zamonaviy muhit bepul Coworking va Wi-fi",
  },
  { icon: "/icons/why/9.png", title: "Bepul mahorat darslari va musobaqalar" },
  { icon: "/icons/why/10.png", title: "Sertifikat" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const Why = () => {
  return (
    <div className="container">
      <div id="about"></div>
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
        className="bg-title text-3xl pt-10 md:text-5xl md:pt-20 font-bold"
      >
        Nega aynan Aipply Academy?
      </motion.h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 pt-6 md:pt-12">
        {data.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex-col md:flex-row rounded-2xl border border-blue-200 bg-white p-4 md:p-6 flex md:items-center gap-4 transition-transform"
          >
            <div className="flex-shrink-0 ">
              <Image
                src={item.icon}
                width={90}
                height={90}
                alt={item.title}
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
              />
            </div>
            <div className="bg-title font-semibold text-xl lg:text-2xl md:w-md leading-snug">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Why;
