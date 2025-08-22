"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        {/* Lucide Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        >
          <Loader2 className="w-16 h-16 text-gray-700" />
        </motion.div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-700 text-xl font-medium tracking-wide"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}
