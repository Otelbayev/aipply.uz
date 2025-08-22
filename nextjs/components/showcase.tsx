"use client";

import type { Showcase as ShowcaseType } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Showcase = ({ showcase }: { showcase?: ShowcaseType }) => {
  if (!showcase) return null;

  return (
    <section className="py-10 md:py-20">
      <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl text-center md:text-left bg-title md:text-7xl font-extrabold leading-snug mb-4">
            {showcase.title}
          </h1>
          <p className="text-lg  text-center md:text-left text-gray-500 mb-8">
            {showcase.desc}
          </p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="bg-white rounded-2xl  border border-gray-200 w-full shadow-xl p-6 inline-block"
          >
            <h2 className="text-xl md:text-4xl py-5 font-bold text-center bg-title mb-3">
              Ochiq darsga yoziling!
            </h2>
            <Link
              href="/lid"
              className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center rounded-lg shadow-md font-semibold hover:opacity-90 transition"
            >
              Ro'yxatdan o'tish
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center"
        >
          <Image
            src={showcase.icon}
            alt={showcase.title}
            width={450}
            height={450}
            priority
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
