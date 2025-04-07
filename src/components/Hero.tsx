'use client'
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100"
    >
      <div className="text-center">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          whileHover={{ scale: 1.05 }}
        >
          Hi, I am <span className="text-purple-600">Carlos Miguel Sandrino</span>
        </motion.h1>
        <p className="text-xl text-gray-600">FullStack Web and App Developer</p>
      </div>
    </motion.section>
  );
}