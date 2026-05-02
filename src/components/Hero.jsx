import { motion } from "framer-motion";
import config from "../config";

export default function Hero() {
  const { couple, hero } = config;

  return (
    <section className="hero">
      <motion.div
        className="hero-frame"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {hero.eyebrow}
        </motion.div>

        <motion.h1
          className="hero-names"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          {couple.bride}
          <span className="hero-amp">{couple.separator}</span>
          {couple.groom}
        </motion.h1>

        <motion.div
          className="ornament"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <span className="line" />
          <span className="glyph">✦</span>
          <span className="line" />
        </motion.div>

        <motion.div
          className="hero-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          {couple.tagline}
        </motion.div>

        <motion.div
          className="hero-date"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1 }}
        >
          {hero.weddingDate}
        </motion.div>

        <motion.div
          className="hero-loc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1 }}
        >
          {hero.locationLine}
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1.2 }}
      >
        <span>{hero.scrollCue}</span>
        <span className="bar" />
      </motion.div>
    </section>
  );
}
