'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center transition-all duration-300"
      style={{
        background: `
          linear-gradient(
            to bottom right,
            var(--hero-gradient-from),
            var(--hero-gradient-to)
          )
        `,
        backgroundSize: '200% 200%',
        animation: 'gradientShift 10s ease infinite'
      }}
    >
      <div className="text-center px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-4"
          whileHover={{ scale: 1.05 }}
          style={{ color: 'var(--foreground)' }}
        >
          Hi, I am <span style={{ color: 'var(--accent)' }}>Carlos Miguel Sandrino</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl mb-8"
          style={{ color: 'var(--foreground)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          FullStack Web and App Developer
        </motion.p>

        <motion.div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover="hover"
            className="relative group"
          >
            <Link 
              href="#contact"
              style={{
                backgroundColor: 'var(--accent)',
                color: 'white'
              }}
              className="inline-block hover:opacity-90 font-medium py-3 px-6 rounded-lg transition-all duration-300"
            >
              Contact Me
            </Link>

            <motion.div 
              className="absolute flex gap-3 mt-4 w-full justify-center"
              variants={{
                hover: { 
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial={{ opacity: 0, y: -10 }}
            >
              {[
                { icon: <FaFacebook className="text-2xl"/>, url: "https://facebook.com/KreizzyCarl" },
                { icon: <FaGithub className="text-2xl"/>, url: "https://github.com/Crl0sDEV" },
                { icon: <FaLinkedin className="text-2xl"/>, url: "https://www.linkedin.com/in/sandrino-carlos-miguel/" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'var(--social-bg)',
                    color: 'var(--foreground)'
                  }}
                  className="p-2 rounded-full shadow-lg hover:opacity-80 transition-colors"
                  variants={{
                    hover: { 
                      y: 0,
                      opacity: 1
                    }
                  }}
                  initial={{ y: -10, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}