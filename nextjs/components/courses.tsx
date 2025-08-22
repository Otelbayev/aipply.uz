import { courses } from "@/utils/courses";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const Courses = () => {
  return (
    <div className="container">
      <div id="courses"></div>
      <motion.h2
        initial={{ x: -15, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 1 }}
        className="bg-title text-3xl pt-10 md:text-5xl md:pt-20 font-bold"
      >
        Mavjud kurslar
      </motion.h2>

      <div className="grid grid-cols-1 py-5 md:py-10 md:grid-cols-2 gap-2 md:gap-4 xl:grid-cols-3">
        {courses.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-between items-center gap-4 text-center border border-blue-300 rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="bg-title font-bold text-2xl">{item.title}</h3>
            <div className="relative w-32 h-32">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 130px"
                className="object-contain"
              />
            </div>

            <p className="text-md">{item.desc}</p>
            <p className="bg-title font-semibold text-lg">
              {item.month} oy + sertifikat
            </p>
            <Link
              className="w-full cursor-pointer"
              prefetch
              href={`/${item.path}`}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundPosition: "right center",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full cursor-pointer text-sm font-medium rounded-lg px-4 py-2 
                  bg-gradient-to-r from-blue-600 to-cyan-500 bg-[length:200%_100%]
                  text-white shadow-md text-center transition-all duration-300"
              >
                Batafsil
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
