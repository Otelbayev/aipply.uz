"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Banner: React.FC = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-5 md:mt-10 p-4 md:p-8 bg-blue-100 shadow-xl rounded-2xl">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl text-center md:text-4xl font-bold text-gray-800">
            O'zbekistondagi birinchi Sun'iy intellektga ixtisoslashtirilgan
            zamonaviy kasblar o'quv markazi!
          </h2>
          <div className="rounded-lg max-w-2xl bg-white p-4 md:p-8  mt-4 text-center">
            <h2 className="bg-title font-bold text-xl md:text-2xl mb-4">
              Ochiq darsga yoziling!
            </h2>
            <Link href={"/lid"} className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer w-full rounded-lg py-2 font-semibold text-lg md:text-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md text-center"
              >
                Ro'yxatdan o'tish
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-80 lg:h-100"
        >
          <Image
            src={"/images/banner.png"}
            className="object-cover rounded-2xl"
            alt="banner"
            fill
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
