"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Numbers = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container">
      <motion.h2
        initial={{ x: -15, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 1 }}
        className="bg-title text-3xl pt-10 md:text-5xl md:pt-20 font-bold"
      >
        “Aipply Academy” natijasi raqamlarda
      </motion.h2>

      <div className="grid my-10 grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
        {/* Card 1 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0 * 0.2, ease: "easeOut" }}
          className="rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
        >
          <h2 className="bg-title font-extrabold leading-none text-4xl sm:text-5xl md:text-6xl">
            80%
          </h2>
          <p className="mt-3 text-lg sm:text-xl font-semibold text-blue-600">
            Muvaffaqiyatli tugatganlar
          </p>

          {/* image */}
          <div className="mt-auto pt-6 flex justify-center">
            <motion.div
              initial={{ y: 0, rotate: 0 }}
              animate={{ y: [-6, 6, -6], rotate: [-1.5, 1.5, -1.5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.04 }}
              className="relative"
            >
              <span
                aria-hidden
                className="absolute inset-0 blur-2xl rounded-full bg-blue-100/60 -z-10 w-[220px] h-[220px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              />
              <Image
                src="/icons/1.webp"
                alt="Tasdiq belgisi 3D"
                width={160}
                height={160}
                className="select-none pointer-events-none object-contain drop-shadow-sm"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 1 * 0.2, ease: "easeOut" }}
          className="rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
        >
          <h2 className="bg-title font-extrabold leading-none text-4xl sm:text-5xl md:text-6xl">
            95%
          </h2>
          <p className="mt-3 text-lg sm:text-xl font-semibold text-blue-600">
            Ishga joylashgan bitiruvchilarimiz
          </p>

          <div className="mt-auto pt-6 flex justify-center">
            <motion.div
              initial={{ y: 0, rotate: 0 }}
              animate={{ y: [-6, 6, -6], rotate: [-1.5, 1.5, -1.5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.04 }}
              className="relative"
            >
              <span
                aria-hidden
                className="absolute inset-0 blur-2xl rounded-full bg-blue-100/60 -z-10 w-[220px] h-[220px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              />
              <Image
                src="/icons/2.webp"
                alt="Portfel 3D"
                width={160}
                height={160}
                className="select-none pointer-events-none object-contain drop-shadow-sm"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 2 * 0.2, ease: "easeOut" }}
          className="rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
        >
          <h3 className="bg-title font-bold text-xl sm:text-3xl md:text-3xl leading-tight">
            Bitiruvchilarning
            <br className="hidden sm:block" />
            o‘rtacha maoshi
          </h3>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-semibold text-lg">
                Dasturlash
              </span>
              <span className="font-extrabold text-2xl md:text-3xl tracking-tight">
                $330
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-semibold text-lg">
                Dizayn
              </span>
              <span className="font-extrabold text-2xl md:text-3xl tracking-tight">
                $350
              </span>
            </div>
          </div>

          <p className="mt-6 text-sm md:text-base text-gray-500 italic leading-relaxed">
            O‘quv markazini endi tugatgan bitiruvchilarning o‘rtacha maoshi.
            Tajriba ortgani sayin zamonaviy kasblarda daromad ham muntazam oshib
            boradi.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Numbers;
