import { motion } from "framer-motion";
import config from "../config";

export default function Footer() {
  const { couple, hero, footer } = config;
  const f = footer || {};

  // Build couple initials monogram, e.g. "K & K"
  const initials = `${(couple.bride || "").charAt(0)} ${couple.separator} ${(couple.groom || "").charAt(0)}`.trim();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <motion.div
          className="footer-monogram"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          aria-hidden
        >
          <span className="ring" />
          <span className="initials">{initials}</span>
          <span className="ring" />
        </motion.div>

        {f.eyebrow && (
          <motion.div
            className="footer-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {f.eyebrow}
          </motion.div>
        )}

        {f.script && (
          <motion.h2
            className="footer-script"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {f.script}
          </motion.h2>
        )}

        {f.message && (
          <motion.p
            className="footer-message"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            {f.message}
          </motion.p>
        )}

        {(f.brideFamily || f.groomFamily) && (
          <motion.div
            className="footer-families"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            {f.brideFamily && <div>{f.brideFamily}</div>}
            {f.groomFamily && <div>{f.groomFamily}</div>}
          </motion.div>
        )}

        {couple.hashtag && (
          <motion.p
            className="footer-hashtag"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.55 }}
          >
            {couple.hashtag}
          </motion.p>
        )}

        <div className="footer-divider" aria-hidden>
          <span className="line" />
          <span className="glyph">✦</span>
          <span className="line" />
        </div>

        <div className="footer-meta">
          <div className="footer-names">
            {couple.bride} {couple.separator} {couple.groom}
          </div>
          <div className="footer-when-where">
            {hero.weddingDate}
            {hero.locationLine ? `  •  ${hero.locationLine}` : ""}
          </div>
        </div>

        {f.credit && <div className="footer-credit">{f.credit}</div>}
      </div>
    </footer>
  );
}
