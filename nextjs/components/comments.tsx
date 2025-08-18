import { motion } from "framer-motion";
import React from "react";
import AutoMarqueeSlider from "./slider-item";

const Comments = () => {
  const images = [
    "/images/comments/1.png",
    "/images/comments/2.png",
    "/images/comments/3.png",
    "/images/comments/4.png",
    "/images/comments/5.png",
    "/images/comments/6.png",
    "/images/comments/7.png",
    "/images/comments/8.png",
    "/images/comments/9.png",
    "/images/comments/10.png",
  ];
  return (
    <>
      <div className="container">
        <motion.h2
          initial={{ x: -15, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className="bg-title text-3xl pt-10  pb-5 md:text-5xl md:pt-20 md:pb-10 font-bold"
        >
          Izohlar
        </motion.h2>
      </div>
      <AutoMarqueeSlider
        aspect="aspect-[9/4]"
        images={images}
        speed={60}
        gapClass="gap-2"
      />
    </>
  );
};

export default Comments;
