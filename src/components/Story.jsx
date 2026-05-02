import { motion } from "framer-motion";
import config from "../config";

export default function Story() {
  const { story } = config;

  return (
    <section className="story">
      <div className="container">
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          {story.title}
        </motion.div>

        <div className="ornament">
          <span className="line" />
          <span className="glyph">❦</span>
          <span className="line" />
        </div>

        {story.paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          >
            {p}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
