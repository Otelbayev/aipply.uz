"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const socialIconVariants: Variants = {
  hover: { scale: 1.2, transition: { type: "spring", stiffness: 300 } },
};

const Footer = () => {
  return (
    <footer
      className="relative w-full text-white pt-16 pb-12"
      style={{
        background: "linear-gradient(273.54deg, #02A5E0 19.32%, #0000B0 100%)",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-8">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-2xl font-bold">AIPPLY ACADEMY</h2>
          <Link href="/images/certificate.png" target="blank">
            <Image
              src="/images/certificate.png"
              alt="Guvohnoma"
              className="w-32 h-auto mt-2 rounded-lg"
              width={200}
              height={200}
            />
          </Link>
          <p className="text-sm">
            Telefon:{" "}
            <Link
              href="tel:+998771233300"
              className="underline hover:text-yellow-300"
            >
              +998 77 123 33 00
            </Link>
          </p>
          <div className="flex gap-4 mt-2">
            <motion.a
              href="https://www.instagram.com/aipply.academy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={socialIconVariants}
            >
              <FaInstagram size={24} />
            </motion.a>
            <motion.a
              href="https://t.me/aipplyacademy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={socialIconVariants}
            >
              <FaTelegramPlane size={24} />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/channel/UCzueY2lK3VYGPgC6AWy2HNQ"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={socialIconVariants}
            >
              <FaYoutube size={24} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/aipply"
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              variants={socialIconVariants}
            >
              <FaFacebookF size={24} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold">Sayt bo‘limlari</h3>
          <Link
            href="/#about"
            className="hover:underline hover:text-yellow-300 transition-colors"
          >
            Biz haqimizda
          </Link>
          <Link
            href="/#courses"
            className="hover:underline hover:text-yellow-300 transition-colors"
          >
            Kurslar
          </Link>
          <Link
            href="/#mentors"
            className="hover:underline hover:text-yellow-300 transition-colors"
          >
            Mentorlar
          </Link>
          <Link
            href="/lid"
            className="hover:underline hover:text-yellow-300 transition-colors"
          >
            Bepul ochiq darsga yozilish!
          </Link>
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="md:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold mb-2">Manzilimiz</h3>
          <div className="w-full rounded-xl overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?z=16&ol=biz&oid=75493422112"
              width="100%"
              className="border-0 h-55 rounded-xl"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-12 text-center text-sm text-white/70"
        id="contact"
      >
        © 2025 AIPPLY ACADEMY. Barcha huquqlar himoyalangan.
      </motion.div>
    </footer>
  );
};

export default Footer;
