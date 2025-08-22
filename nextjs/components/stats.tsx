"use client";

import type { Statistics } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CourseInfo({ statistics }: { statistics: Statistics }) {
  if (!statistics) return null;

  return (
    <div className="container overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-blue-700 to-sky-500 text-white p-6 rounded-2xl shadow-lg"
        >
          <p className="text-lg  md:text-3xl  font-medium leading-relaxed mb-6">
            {statistics.aiDesc}
          </p>

          <div className="flex space-x-4">
            {statistics.ai.map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="relative md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center"
              >
                <Image
                  src={src}
                  alt="AI icon"
                  fill
                  sizes="(max-width: 768px) 40px, 64px"
                  className="object-contain p-2"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-blue-300 p-6 rounded-2xl shadow-lg flex flex-col justify-between"
        >
          <h2 className="text-xl md:text-3xl font-semibold bg-title mb-6">
            {statistics.computerTitle}
          </h2>

          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <div className="space-y-3 mb-6">
              <p className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-4 py-2 rounded-xl w-fit">
                Protsessor: {statistics.processor}
              </p>
              <p className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-4 py-2 rounded-xl w-fit">
                Hotira SSD: {statistics.memory}
              </p>
              <p className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-4 py-2 rounded-xl w-fit">
                Operativka: {statistics.ram}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <Image
                src="/images/laptop.png"
                alt="Laptop"
                width={220}
                height={150}
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
