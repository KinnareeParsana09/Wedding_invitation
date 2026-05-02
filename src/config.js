// =============================================================
//  WEDDING INVITATION CONFIG
//  Edit this file to update names, dates, events, photos & more.
//  All copy is config-driven — no need to touch components.
// =============================================================

export const config = {
  // ---- Couple ----
  couple: {
    bride: "Kinnaree",
    groom: "Kaushal",
    // The "&" separator shown between names
    separator: "&",
    // Tagline shown under names on the hero
    tagline: "are getting married",
    // Hashtag shown in the footer (optional, set to "" to hide)
    hashtag: "#KinAndKash",
  },

  // ---- Hero / Save the date ----
  hero: {
    eyebrow: "With the blessings of our families",
    weddingDate: "May 10, 2026",
    // Short location line on the hero
    locationLine: "Rajkot • Gujarat • India",
    // Subtle scroll cue
    scrollCue: "Scroll to begin our story",
  },

  // ---- Love story / intro paragraph ----
  story: {
    title: "Our Little Story",
    paragraphs: [
      "Two souls, one journey — woven together by quiet conversations, shared laughter, and a thousand ordinary moments that quietly turned into forever.",
      "On a soft May evening in Rajkot, we begin a new chapter. We would be honoured to have you stand beside us as we say, “yes, always.”",
    ],
  },

  // ---- Events Timeline ----
  // Add as many events as you like. Each becomes a node in the timeline.
  // Optional `mapUrl` shows a "View on map" pin link for that event.
  // Leave it blank/undefined and the link is hidden.
  events: [
     {
        title: "Mandap Muhurat",
        date: "May 9, 2026",
        time: "2:30 PM",
        venue: "Shreeji Event Place - 1",
        address: "Kothariya Main Rd, Rajkot, Kothariya, Gujarat",
        mapUrl: "https://maps.app.goo.gl/9HDYNVJ4R6diKv5m7",
        description: "We bow our heads in blessing as the sacred mandap is raised.",
        icon: "🛕",
     },
    {
      title: "Shreenathji Zankhi",
      date: "May 9, 2026",
      time: "8:30 PM onwards followed by dinner",
      venue: "Shreeji Event Place - 1",
      address: "Kothariya Main Rd, Rajkot, Kothariya, Gujarat",
      mapUrl: "https://maps.app.goo.gl/9HDYNVJ4R6diKv5m7",
      description: "A fragrant rain of blessings and bhakti — our celebrations begin in joy.",
      icon: "🌸",
    },
    {
      title: "Baraat",
      date: "May 10, 2026",
      time: "5:00 PM",
      venue: "Shreeji Event Place — 2",
      address: "Kothariya Main Rd, Rajkot, Kothariya, Gujarat",
      mapUrl: "https://maps.app.goo.gl/9HDYNVJ4R6diKv5m7",
      description: "The dhol calls and the groom arrives — come dance him in.",
      icon: "🐎🥁",
    },
    {
      title: "Wedding Ceremony",
      date: "May 10, 2026",
      time: "7:30 PM",
      venue: "Shreeji Event Place — 2",
      address: "Kothariya Main Rd, Rajkot, Kothariya, Gujarat",
      mapUrl: "https://maps.app.goo.gl/9HDYNVJ4R6diKv5m7",
      description: "Around the sacred fire, two paths quietly become one.",
      icon: "💍",
    },
    {
      title: "Wedding Feast",
      date: "May 10, 2026",
      time: "8:00 PM onwards",
      venue: "Shreeji Event Place — 2",
      address: "Kothariya Main Rd, Rajkot, Kothariya, Gujarat",
      mapUrl: "https://maps.app.goo.gl/9HDYNVJ4R6diKv5m7",
      description: "A feast under the stars — a joyful toast to forever, with you.",
      icon: "🍽️",
    },
  ],

  // ---- Photo Gallery ----
  // Place images in /public/photos/ and reference them as "/photos/your.jpg".
  // Each photo can have an animated quote that appears as the user scrolls.
  // Until you add your own, beautiful Unsplash placeholders are used.
  photos: [
    {
    	src: "/photos/holding_hands.jpeg",
      //src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80",
      alt: "Couple holding hands",
      quote: "In a sea of faces, my heart will always find yours.",
      author: "— Where it all began",
    },
    {
      src: "/photos/smile_closeup.jpeg",
      alt: "Wedding rings",
      quote: "And just like that, every love song made sense.",
      author: "— A promise made",
    },
    {
      src: "/photos/eile.jpeg",
      alt: "Bride and groom dancing",
      quote: "Two hearts, one story — and a forever just beginning.",
      author: "— Together, always",
    },
  ],

  // ---- RSVP ----
  rsvp: {
    enabled: true,
    title: "Be there with us",
    subtitle:
      "Your warmth, your laughter, your love — that is all we wish for. Please grace us with your presence as we begin this beautiful new chapter.",
    // Optional CTAs — leave commented to hide them.
    // primaryCtaText: "RSVP",
    // primaryCtaHref: "mailto:rsvp@example.com?subject=RSVP%20-%20Kinnaree%20%26%20Kaushal",
    // secondaryCtaText: "Get in touch",
    // secondaryCtaHref: "tel:+919999999999",
  },

  // ---- Footer (closing note) ----
  footer: {
    // Small line above the script line
    eyebrow: "With love & gratitude",
    // Big script line — feels handwritten
    script: "See you in May",
    // One-line warm thank-you below the script
    message:
      "Thank you for being a part of our story. Your blessings mean the world to us.",
    // Family lines (set to "" to hide)
    brideFamily: "Daughter of Mr. & Mrs. Parsana",
    groomFamily: "Son of Mr. & Mrs. Sorathiya",
    // Tiny credit line at the very bottom (set to "" to hide)
    credit: "Made with love, for our family & friends",
  },

  // ---- Theme tweaks (optional) ----
  theme: {
    // Pick any of: "blush" | "ivory" | "midnight"
    palette: "blush",
  },
};

export default config;
