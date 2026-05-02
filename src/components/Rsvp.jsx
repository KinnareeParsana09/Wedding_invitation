import { motion } from "framer-motion";
import config from "../config";

export default function Rsvp() {
  const { rsvp } = config;
  if (!rsvp?.enabled) return null;

  return (
    <section className="rsvp">
      <div className="container">
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          With love
        </motion.div>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          {rsvp.title}
        </motion.h2>
        <motion.p
          className="section-sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {rsvp.subtitle}
        </motion.p>
        <motion.div
          className="actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          {rsvp.primaryCtaText && (
            <a className="btn btn-primary" href={rsvp.primaryCtaHref}>
              {rsvp.primaryCtaText}
            </a>
          )}
          {rsvp.secondaryCtaText && (
            <a className="btn btn-ghost" href={rsvp.secondaryCtaHref}>
              {rsvp.secondaryCtaText}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
