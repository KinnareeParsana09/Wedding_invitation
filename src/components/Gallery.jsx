import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import config from "../config";

function PhotoBlock({ photo, flip, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Subtle parallax — image floats slightly slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <div className={`photo-block ${flip ? "flip" : ""}`} ref={ref}>
      <motion.div
        className="photo-frame"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={photo.src}
          alt={photo.alt || `Memory ${index + 1}`}
          loading="lazy"
          style={{ y, scale }}
        />
      </motion.div>

      <div>
        <motion.blockquote
          className="photo-quote"
          initial={{ opacity: 0, x: flip ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          &ldquo;{photo.quote}&rdquo;
        </motion.blockquote>
        {photo.author && (
          <motion.div
            className="photo-author"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {photo.author}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function Gallery() {
  const { photos } = config;
  if (!photos?.length) return null;

  return (
    <section className="gallery">
      <div className="container">
        <div className="eyebrow" style={{ textAlign: "center" }}>
          Moments
        </div>
        <h2 className="section-title" style={{ marginTop: ".5rem" }}>
          A little of us
        </h2>
        <div className="ornament">
          <span className="line" />
          <span className="glyph">✦</span>
          <span className="line" />
        </div>

        {photos.map((p, i) => (
          <PhotoBlock key={i} photo={p} flip={i % 2 === 1} index={i} />
        ))}
      </div>
    </section>
  );
}
