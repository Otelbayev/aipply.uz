"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { Module } from "@/types";

export default function Accardion({ modules }: { modules?: Module[] }) {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!modules) return null;
  return (
    <section className="container">
      <motion.div
        className="py-8"
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
          className="bg-title text-3xl pt-10 pb-5 md:text-5xl md:pt-20  md:pb-10 font-bold"
        >
          Kurs modullari
        </motion.h2>
        <div className="space-y-3 ">
          {modules.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-blue-600 rounded-xl overflow-hidden bg-gradient-to-tr from-[#02a5e0] to-[#0000b0]"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex justify-between gap-3 items-center px-5 py-4 hover:bg-blue-600 transition"
              >
                <span className="font-bold flex items-center gap-4  text-left text-white text-base sm:text-lg">
                  <span className="text-4xl">0{index + 1}</span> {faq.title}
                </span>
                <div>
                  <ChevronDown
                    className={`w-[30px] h-[30px] p-1 border rounded-full text-blue-200 transition-transform duration-300 ${
                      openIndex === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === faq.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-blue/10 border font-semibold border-blue/40 rounded-xl m-4 p-4 text-white text-sm leading-relaxed">
                      {faq.body.map((item) => {
                        return (
                          <div className="text-lg" key={item.id}>
                            {item.title}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
