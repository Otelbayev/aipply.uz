"use client";

import { Showcase } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: -20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 py-2 bg-white/70 backdrop-blur-md"
      >
        <div className="h-16 flex items-center justify-between">
          <motion.a
            variants={fadeUp}
            href="/"
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="flex cursor-pointer items-center gap-2"
          >
            <Image
              src="/logo.png"
              alt="Aipply Academy"
              width={130}
              height={60}
            />
          </motion.a>

          {/* Desktop menu */}
          <motion.nav
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="hidden md:flex items-center gap-8 text-sm font-medium"
          >
            <motion.a
              href="/#about"
              whileHover={{ scale: 1.05 }}
              className="bg-title font-semibold hover:text-blue-600"
            >
              Biz haqimizda
            </motion.a>
            <motion.a
              href="/#courses"
              whileHover={{ scale: 1.05 }}
              className="bg-title font-semibold hover:text-blue-600"
            >
              Kurslar
            </motion.a>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              className="bg-title font-semibold hover:text-blue-600"
            >
              Kontakt
            </motion.a>
          </motion.nav>

          {/* CTA button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="hidden md:block"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/#courses"
              className="text-sm font-medium rounded-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md hover:opacity-90 transition"
            >
              Kurslarni ko‘rish
            </motion.a>
          </motion.div>

          {/* Hamburger menu */}
          <motion.button
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            whileTap={{ scale: 0.9 }}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t mt-2 border-gray-200 bg-white/95 overflow-hidden"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                className="flex flex-col my-4 gap-4"
              >
                <motion.a
                  onClick={() => setOpen(false)}
                  href="/#about"
                  whileHover={{ x: 5 }}
                  className="bg-title font-semibold hover:text-blue-600"
                >
                  Biz haqimizda
                </motion.a>
                <motion.a
                  onClick={() => setOpen(false)}
                  href="/#courses"
                  whileHover={{ x: 5 }}
                  className="bg-title font-semibold hover:text-blue-600"
                >
                  Kurslar
                </motion.a>
                <motion.a
                  onClick={() => setOpen(false)}
                  href="/#contact"
                  whileHover={{ x: 5 }}
                  className="bg-title font-semibold hover:text-blue-600"
                >
                  Kontakt
                </motion.a>
                <motion.a
                  onClick={() => setOpen(false)}
                  href="/#courses"
                  whileHover={{ scale: 1.05 }}
                  className="mt-2 text-sm font-medium rounded-full px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md text-center"
                >
                  Kurslarni ko‘rish
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
};

export default Header;
