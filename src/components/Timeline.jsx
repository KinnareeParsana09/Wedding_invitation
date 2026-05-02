import { motion } from "framer-motion";
import config from "../config";

// Parse "May 10, 2026" → { day: "10", month: "May" } for the big numeric badge.
function splitDate(d) {
  if (!d) return { day: "", month: "" };
  const m = d.match(/^([A-Za-z]+)\s+(\d{1,2})/);
  if (m) return { month: m[1].slice(0, 3).toUpperCase(), day: m[2] };
  return { day: d, month: "" };
}

// Spell out 1–10, fall back to numerals beyond.
const NUMBER_WORDS = [
  "zero", "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine", "ten",
];
function spellNumber(n) {
  return NUMBER_WORDS[n] || String(n);
}

export default function Timeline() {
  const { events } = config;

  // Count unique event dates so the heading scales with the actual schedule.
  const uniqueDays = new Set(
    (events || []).map((e) => (e.date || "").trim()).filter(Boolean)
  ).size;
  const dayWord = spellNumber(uniqueDays);
  const dayLabel = uniqueDays === 1 ? "day" : "days";

  return (
    <section className="timeline" id="events">
      <div className="container">
        <div className="eyebrow" style={{ textAlign: "center" }}>
          The Celebrations
        </div>
        <h2 className="section-title" style={{ marginTop: ".5rem" }}>
          {uniqueDays > 0 ? (
            <>
              {dayWord.charAt(0).toUpperCase() + dayWord.slice(1)} {dayLabel} of light &amp; laughter
            </>
          ) : (
            <>Days of light &amp; laughter</>
          )}
        </h2>
        <p className="section-sub">
          A handful of evenings, an ocean of memories. We can&rsquo;t wait to make them with you.
        </p>

        <div className="timeline-track">
          {events.map((e, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            const xFrom = side === "left" ? -60 : 60;
            const { day, month } = splitDate(e.date);
            return (
              <motion.div
                key={i}
                className={`tl-item ${side}`}
                initial={{ opacity: 0, x: xFrom }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.05 * i, ease: "easeOut" }}
              >
                <div className="tl-card">
                  <div className="tl-head">
                    <div className="tl-datebadge" aria-label={e.date}>
                      <span className="tl-day">{day}</span>
                      <span className="tl-month">{month}</span>
                    </div>
                    <div className="tl-headtext">
                      <h3 className="tl-title">{e.title}</h3>
                      {e.time && <div className="tl-time">{e.time}</div>}
                    </div>
                  </div>

                  {e.venue && <div className="tl-row tl-venue"><strong>{e.venue}</strong></div>}
                  {e.address && <div className="tl-row tl-address">{e.address}</div>}

                  {e.mapUrl && (
                    <a
                      className="tl-map"
                      href={e.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${e.title} venue on Google Maps`}
                    >
                      <span className="tl-pin" aria-hidden>📍</span>
                      View on map
                    </a>
                  )}

                  {e.description && <p className="tl-desc">{e.description}</p>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
