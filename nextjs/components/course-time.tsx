"use client";

import { motion } from "framer-motion";
import { PiDotsThree } from "react-icons/pi";

interface CourseTimeProps {
  month: number;
}

const CourseTime = ({ month }: CourseTimeProps) => {
  return (
    <div className="container px-4 pb-24 md:pb-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <div className="text-center">
          <PiDotsThree size={80} className="text-blue-800" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full ">
          <div className="text-center w-full">
            <div className="text-4xl md:text-5xl font-bold  bg-title ">
              {month} oy
            </div>
            <div className="w-full h-px bg-gray-400 my-4"></div>
            <div className="text-sm md:text-lg font-semibold text-gray-700">
              Davomiyligi
            </div>
          </div>

          <div className="text-center w-full">
            <div className="text-4xl md:text-5xl font-bold bg-title">3 kun</div>
            <div className="w-full h-px bg-gray-400 my-4"></div>
            <div className="text-sm md:text-lg font-semibold text-gray-700">
              Haftada
            </div>
          </div>

          <div className="text-center w-full">
            <div className="text-4xl md:text-5xl font-bold bg-title">
              2 soat
            </div>
            <div className="w-full h-px bg-gray-400 my-4"></div>
            <div className="text-sm md:text-lg font-semibold text-gray-700">
              Dars soati
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseTime;
