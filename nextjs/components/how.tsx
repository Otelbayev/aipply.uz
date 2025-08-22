"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { About } from "@/types";
import Image from "next/image";

const How = ({ data }: { data: About }) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  if (!data) return null;
  return (
    <div className="container">
      <motion.h2
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
        className="bg-title text-3xl pt-10 pb-5 md:max-w-2xl md:text-5xl md:pt-20 md:pb-10 font-bold"
      >
        {data.title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col md:flex-row gap-5 items-center text-sm md:text-2xl text-gray-400 mb-4"
      >
        <Image
          src={data.img}
          alt={data.name}
          className="object-cover w-50 h-50 md:w-auto md:h-auto rounded-xl shadow-lg"
          width={400}
          height={400}
        />
        <p>{data.desc}</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4"
      >
        {data.projects.map((item, i) => (
          <motion.div
            key={item}
            custom={i}
            variants={itemVariants}
            className="overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={item}
              alt={data.name}
              width={400}
              height={400}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default How;
