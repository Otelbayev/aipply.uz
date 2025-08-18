import { motion } from "framer-motion";
import React from "react";

const Courses = () => {
  return (
    <div className="container">
      <motion.h2
        initial={{ x: -15, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 1 }}
        className="bg-title text-3xl pt-10 md:text-5xl md:pt-20 font-bold"
      >
        Mavjud kurslar
      </motion.h2>
    </div>
  );
};

export default Courses;
