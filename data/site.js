// ─────────────────────────────────────────────────────────────────────────────
// Central SEO / site settings. Edit this ONE file (or set NEXT_PUBLIC_SITE_URL
// when building) once the real domain is known.
//
// Live domain: https://drmaqsoodalikhan.com (no trailing slash). Canonical URLs,
// sitemap.xml, robots.txt and social-share links are all built from it.
// ─────────────────────────────────────────────────────────────────────────────
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://drmaqsoodalikhan.com"
).replace(/\/$/, "");

export const IS_PLACEHOLDER_DOMAIN = SITE_URL === "https://your-domain.com";

// Optional: paste the verification codes from Google Search Console / Bing
// Webmaster Tools here (leave empty to omit the tag).
export const GOOGLE_SITE_VERIFICATION = "";
export const BING_SITE_VERIFICATION = "";

export const site = {
  name: "Dr. Maqsood Ali Khan",
  shortName: "Dr. Maqsood Ali Khan - ENT Surgeon Mumbai",
  tagline: "ENT, Head-Neck & Skull-Base Endoscopic Surgeon, Mumbai",
  description:
    "Dr. Maqsood Ali Khan (MBBS, MS ENT, DORL) is an ENT, Head-Neck and Skull-Base Endoscopic Surgeon in Mumbai with 17+ years of experience, consulting at Masina Hospital, Byculla, Saifee Hospital, Charni Road and Gramy Hospital. Book an appointment.",
  locale: "en_IN",
  // The ONE contact number used everywhere on the site (calls + WhatsApp).
  phone: "+91 98204 03437",
  phoneTel: "+919820403437", // for tel: links and schema.org
  whatsappNumber: "919820403437", // wa.me format: country code + number, digits only
    linkedin: "https://in.linkedin.com/in/dr-maqsood-ali-khan-10224953",
  ogImage: "/assets/img/og-image.png",
  keywords: [
    "ENT surgeon Mumbai",
    "ENT doctor Mumbai",
    "ENT specialist Byculla",
    "ENT specialist Charni Road",
    "best ENT surgeon in Mumbai",
    "head and neck surgeon Mumbai",
    "head and neck cancer surgeon Mumbai",
    "skull base surgeon Mumbai",
    "skull base endoscopic surgery Mumbai",
    "otorhinolaryngologist Mumbai",
    "Dr. Maqsood Ali Khan",
    "Dr. Maqsood Ali Khan ENT",
    "Dr. Maqsood Ali Khan Masina Hospital",
    "Masina Hospital ENT",
    "Saifee Hospital ENT",
    "Gramy Hospital ENT",
    "Grammy Hospital ENT",
    "endoscopic thyroid surgery Mumbai",
    "thyroid surgeon Mumbai",
    "robotic head and neck surgery",
    "sleep apnea treatment Mumbai",
    "snoring treatment Mumbai",
    "vertigo treatment Mumbai",
    "voice and laryngeal surgery Mumbai",
    "rhinoplasty Mumbai",
    "sinusitis treatment Mumbai",
    "tonsillitis treatment Mumbai",
    "ear infection treatment Mumbai",
    "ENT appointment Mumbai",
  ],
  // Keyword sets reused per page (kept to real specialties/locations only).
  keywordSets: {
    home: ["ENT surgeon Mumbai", "ENT doctor Mumbai", "head and neck surgeon Mumbai", "skull base surgeon Mumbai", "Dr. Maqsood Ali Khan", "Masina Hospital ENT", "Saifee Hospital ENT", "Gramy Hospital ENT", "Grammy Hospital ENT", "ENT specialist Byculla"],
    about: ["Dr. Maqsood Ali Khan", "Dr. Maqsood Ali Khan qualifications", "MBBS MS ENT DORL", "ENT surgeon 17 years experience", "Masina iMISS Center", "skull base surgery training Pittsburgh", "robotic surgery training Newcastle", "endoscopic thyroidectomy training Vietnam", "SINGPRO congress"],
    services: ["ENT services Mumbai", "head and neck surgery Mumbai", "skull base surgery Mumbai", "endoscopic thyroid surgery", "sleep apnea treatment Mumbai", "snoring treatment Mumbai", "voice surgery Mumbai", "rhinoplasty Mumbai", "sinusitis treatment Mumbai", "vertigo treatment Mumbai"],
    surgery: ["head and neck tumour surgery", "skull base tumour surgery", "endoscopic skull base surgery", "thyroid surgery Mumbai", "head and neck cancer treatment Mumbai", "ENT cancer surgeon Mumbai"],
    contact: ["ENT clinic Byculla", "Masina Hospital Byculla contact", "Saifee Hospital Charni Road ENT", "Gramy Hospital ENT doctor", "Gramy Hospital OPD timings", "ENT OPD Monday Friday Mumbai", "ENT OPD timings Mumbai", "ENT doctor near Byculla station", "Masina Hospital phone number"],
    appointment: ["book ENT appointment Mumbai", "ENT consultation Mumbai", "ENT OPD Tuesday Wednesday Thursday", "ENT OPD Monday Friday", "Gramy Hospital appointment", "Saifee Hospital OPD booking", "Masina Hospital OPD booking", "book appointment Dr. Maqsood Ali Khan"],
    blog: ["ENT health articles", "head and neck cancer symptoms", "robotic surgery head and neck", "thyroid surgery recovery", "skull base surgery explained", "vertigo causes and treatment", "ENT patient education India"],
  },

  address: {
    streetAddress: "Masina Hospital, Sant Savta Mali Marg, Near Byculla Railway Station",
    addressLocality: "Byculla, Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400027",
    addressCountry: "IN",
  },
};

export const telHref = `tel:${site.phoneTel}`;
export const whatsappHref = (text = "Hello Dr. Maqsood Ali Khan, I would like to book an appointment.") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const abs = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

if (IS_PLACEHOLDER_DOMAIN && process.env.NODE_ENV === "production") {
  console.warn(
    "\n[SEO] SITE_URL is still the placeholder 'https://your-domain.com'. " +
      "Set the real domain in data/site.js (or NEXT_PUBLIC_SITE_URL) before the final build.\n"
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// Consulting (OPD) schedule - the ONE place to edit timings. Used on the home,
// about, contact, appointment, footer, service pages, FAQs and schema.org data.
// All consultations are strictly by appointment. Closing times were not given,
// so only the start time is shown.
// ─────────────────────────────────────────────────────────────────────────────
export const opdSchedule = [
  {
    id: "masina",
    place: "Masina iMISS Center, Masina Hospital, Byculla",
    shortPlace: "Masina Hospital",
    days: ["Tuesday", "Wednesday", "Thursday"],
    daysShort: "Tue, Wed & Thu",
    time: "6:00 PM",
    hour24: "18:00",
  },
  {
    id: "saifee",
    place: "Saifee Hospital, Charni Road",
    shortPlace: "Saifee Hospital",
    days: ["Monday", "Friday"],
    daysShort: "Mon & Fri",
    time: "7:00 PM",
    hour24: "19:00",
  },
  {
    id: "gramy",
    place: "Gramy Hospital",
    shortPlace: "Gramy Hospital",
    days: ["Monday", "Friday"],
    daysShort: "Mon & Fri",
    time: "5:00 PM",
    hour24: "17:00",
  },
];
export const opdNote = "All consultations are strictly by appointment.";

// ─────────────────────────────────────────────────────────────────────────────
// Google Business Profile listings shown on the Contact page. Links are the
// public Google search pages (account/session tokens removed). Ratings are only
// shown where they were confirmed - add `rating` / `reviews` to the first one
// once known.
// ─────────────────────────────────────────────────────────────────────────────
const gq = (q) => "https://www.google.com/search?q=" + encodeURIComponent(q).replace(/%20/g, "+");
export const googleListings = [
  {
    id: "robotic-endoscopic",
    name: "Dr Maqsood Ali Khan | ENT Surgeon",
    subtitle: "Robotic & Endoscopic Head-Neck Cancer Surgeon in Mumbai",
    url: gq("Dr Maqsood Ali Khan | ENT Surgeon - Robotic & Endoscopic Head-Neck Cancer Surgeon in Mumbai"),
    reviewsUrl: gq("Dr Maqsood Ali Khan | ENT Surgeon - Robotic & Endoscopic Head-Neck Cancer Surgeon in Mumbai reviews"),
  },
  {
    id: "imiss-masina",
    name: "Dr Maqsood Ali Khan",
    subtitle: "ENT specialist in Mumbai, Maharashtra",
    rating: "5.0",
    reviews: 404,
    url: gq("Dr Maqsood Ali Khan"),
    reviewsUrl: gq("Dr Maqsood Ali Khan iMISS Masina Hospital Byculla reviews"),
  },
];
