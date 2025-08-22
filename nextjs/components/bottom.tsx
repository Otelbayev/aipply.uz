"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="container overflow-hidden">
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl text-center md:text-left xl:text-6xl font-bold leading-snug bg-title">
            Aipply Academy bilan <br />
            zamonaviy kasblarni <br />
            zamon talabida o‘rganing
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center md:block"
          >
            <div className="bg-gradient-to-b text-center from-white to-blue-50 shadow-lg rounded-xl p-6 max-w-sm">
              <p className="text-2xl font-semibold text-gray-800 mb-4">
                Ochiq darsga yoziling!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/lid")}
                className="w-full bg-gradient-to-r from-blue-700 to-sky-500 text-white py-3 px-6 rounded-lg font-medium shadow-md"
              >
                Ochiq darsga yoziling!
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/boy.png"
            alt="Student with tablet"
            width={400}
            height={400}
            className="object-contain w-auto  xl:w-150"
          />
        </motion.div>
      </section>
    </div>
  );
}
