import { ThenItem } from "@/types";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Where = ({ data }: { data?: ThenItem[] }) => {
  if (!data) return null;
  return (
    <div className="container">
      <motion.div
        className="pt-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ x: -15, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 1 }}
          className="bg-title text-3xl pt-10 pb-5 md:max-w-2xl md:text-5xl md:pt-20  md:pb-10 font-bold"
        >
          Kursni tugatib qayerlarda ishlashingiz mumkin
        </motion.h2>

        <div className="space-y-3 ">
          {data.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: item.id * 0.05 }}
              className="flex gap-5 items-center"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={200}
                height={200}
                className="w-20 h-20 md:w-40 md:h-40 object-cover"
              />
              <div className="text-gray-700 font-medium text-md md:text-3xl">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Where;
