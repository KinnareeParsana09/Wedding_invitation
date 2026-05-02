import { motion } from "framer-motion";
import config from "../config";

// Resolve a photo URL so it works in dev, on a subpath GitHub Pages deploy,
// and with absolute https:// URLs alike.
//   - "https://..."        → returned as-is
//   - "/photos/foo.jpg"    → "<BASE_URL>photos/foo.jpg"
//   - "photos/foo.jpg"     → "<BASE_URL>photos/foo.jpg"
function resolveSrc(src) {
  if (!src) return src;
  if (/^(https?:)?\/\//i.test(src) || src.startsWith("data:")) return src;
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "/");
  const cleaned = src.replace(/^\/+/, "");
  return base + cleaned;
}

function PhotoBlock({ photo, flip, index }) {
  // Orientation hints (config-driven):
  //   photo.orientation: "portrait" (default) | "landscape" | "square"
  //   photo.fit:         "cover" (default) | "contain"
  const orientation = photo.orientation || "portrait";
  const fit = photo.fit || (orientation === "landscape" ? "contain" : "cover");
  const frameClass = `photo-frame photo-${orientation} photo-fit-${fit}`;

  return (
    <div className={`photo-block ${flip ? "flip" : ""}`}>
      <motion.div
        className={frameClass}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
          src={resolveSrc(photo.src)}
          alt={photo.alt || `Memory ${index + 1}`}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div>
        <motion.blockquote
          className="photo-quote"
          initial={{ opacity: 0, x: flip ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          &ldquo;{photo.quote}&rdquo;
        </motion.blockquote>
        {photo.author && (
          <motion.div
            className="photo-author"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.35 }}
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
