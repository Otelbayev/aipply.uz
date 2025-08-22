"use client";

import { motion } from "framer-motion";
import { SearchX } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 text-center"
      >
        {/* Icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <SearchX className="w-20 h-20 text-gray-700" />
        </motion.div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600">
          Oops! The page you are looking for does not exist.
        </p>

        {/* Button */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gray-800 text-white rounded-xl shadow-md hover:bg-gray-900 transition"
        >
          Go Home
        </motion.a>
      </motion.div>
    </div>
  );
}
