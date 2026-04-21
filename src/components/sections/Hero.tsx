"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const words = ["Engineer", "Builder", "Creator"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background blobs */}
      <div
        className="blob w-96 h-96 bg-[#8b5cf6]"
        style={{ top: "10%", left: "5%", animationDelay: "0s" }}
      />
      <div
        className="blob w-80 h-80 bg-[#3b82f6]"
        style={{ bottom: "15%", right: "8%", animationDelay: "3s" }}
      />
      <div
        className="blob w-64 h-64 bg-[#06b6d4]"
        style={{ top: "40%", right: "20%", animationDelay: "1.5s" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-sm font-semibold tracking-widest uppercase text-[var(--text-secondary)] mb-4"
        >
          Full-Stack &amp; iOS Developer
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-2"
        >
          <span className="gradient-text">Yukiyoshi</span>
        </motion.h1>
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-[var(--text-primary)]"
        >
          Sakaguchi
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Web・iOS・ML まで幅広く手がけるエンジニア。
          <br className="hidden sm:block" />
          実用的なプロダクト開発と技術の探求を楽しんでいます。
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white hover:opacity-90 transition-opacity shadow-lg shadow-[rgba(139,92,246,0.3)]"
          >
            Projects を見る
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl font-semibold text-sm glass-card text-[var(--text-primary)] hover:border-[#8b5cf6] transition-colors"
          >
            Contact
          </a>
        </motion.div>

        {/* Animated role words */}
        <motion.div
          variants={itemVariants}
          className="mt-14 flex items-center justify-center gap-3 text-xs text-[var(--text-muted,#64748b)]"
        >
          {words.map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              <span>{word}</span>
              {i < words.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-[#8b5cf6] opacity-50" />
              )}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={20} className="text-[var(--text-muted,#64748b)]" />
      </motion.div>
    </section>
  );
}
