import { SITE_URL, site, abs, opdSchedule, GOOGLE_SITE_VERIFICATION, BING_SITE_VERIFICATION } from "@/data/site";

const NOINDEX = { index: false, follow: false, googleBot: { index: false, follow: false } };

/** Build a complete Next.js metadata object for a page. */
export function pageMeta({
  title,
  description,
  path,
  image = site.ogImage,
  type = "website",
  noindex = false,
  canonical,
  keywords,
}) {
  const url = canonical ?? path;
  const images = [{ url: image, width: 1200, height: 630, alt: `${site.name} - ${site.tagline}` }];
  return {
    title: { absolute: title },
    description,
    ...(keywords?.length ? { keywords: [...new Set(keywords)] } : {}),
    ...(url ? { alternates: { canonical: url } } : {}),
    ...(noindex ? { robots: NOINDEX } : {}),
    openGraph: {
      title,
      description,
      url: url ?? undefined,
      siteName: site.name,
      locale: site.locale,
      type,
      images,
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export const rootMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dr. Maqsood Ali Khan | ENT & Head-Neck Surgeon in Mumbai",
    template: "Dr. Maqsood Ali Khan | %s",
  },
  description: site.description,
  applicationName: site.name,
  keywords: site.keywords,
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  category: "health",
  formatDetection: { telephone: true, email: false, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    url: "/",
    title: "Dr. Maqsood Ali Khan | ENT & Head-Neck Surgeon in Mumbai",
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} - ${site.tagline}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maqsood Ali Khan | ENT & Head-Neck Surgeon in Mumbai",
    description: site.description,
    images: [site.ogImage],
  },
  verification: {
    ...(GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : {}),
    ...(BING_SITE_VERIFICATION ? { other: { "msvalidate.01": BING_SITE_VERIFICATION } } : {}),
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "content-language": "en-IN",
  },
  // "?v=2" busts the browser's favicon cache after the icon change.
  icons: {
    icon: [
      { url: "/assets/img/favicon/favicon.ico?v=2", sizes: "any" },
      { url: "/assets/img/favicon/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/assets/img/favicon/favicon-96x96.png?v=2", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/assets/img/favicon/favicon.ico?v=2",
    apple: [{ url: "/assets/img/favicon/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/assets/img/favicon/site.webmanifest",
};

/* ───────────────────────── JSON-LD (schema.org) ───────────────────────── */

const physicianId = abs("/#physician");

export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": physicianId,
    name: site.name,
    url: SITE_URL,
    image: abs(site.ogImage),
    description: site.description,
    jobTitle: "ENT (Otorhinolaryngology), Head-Neck & Skull-Base Endoscopic Surgeon",
    medicalSpecialty: "Otolaryngologic",
    telephone: site.phoneTel,
    address: { "@type": "PostalAddress", ...site.address },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "AdministrativeArea", name: "Maharashtra" },
    ],
    knowsLanguage: ["English", "Hindi", "Urdu", "Marathi"],
    knowsAbout: [
      "Otorhinolaryngology (ENT)",
      "Head and neck surgery",
      "Skull-base endoscopic surgery",
      "Endoscopic thyroid surgery",
      "Sleep apnea and snoring treatment",
      "Voice and laryngeal surgery",
      "Rhinoplasty and nasal surgery",
      "Vertigo and balance disorders",
      "Head and neck cancer",
      "Sinusitis, tonsillitis and ear infections",
      "Robotic surgical techniques",
    ],
    availableService: [
      "Head & Neck / Skull-Base Surgery",
      "Endoscopic Thyroid Surgery",
      "Sleep Apnea & Snoring Treatment",
      "Voice & Laryngeal Surgery",
      "Rhinoplasty & Nasal Surgery",
      "General ENT & Vertigo Care",
    ].map((name) => ({ "@type": "MedicalProcedure", name })),
    hospitalAffiliation: [
      {
        "@type": "Hospital",
        name: "Masina Hospital",
        address: { "@type": "PostalAddress", ...site.address },
      },
      {
        "@type": "Hospital",
        name: "Saifee Hospital",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Charni Road",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
      {
        "@type": "Hospital",
        name: "Gramy Hospital",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
    ],
    // Start times only (closing times not provided). All consultations are by appointment.
    openingHoursSpecification: opdSchedule.map((o) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: o.days,
      opens: o.hour24,
    })),
    sameAs: [site.linkedin],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": abs("/#website"),
    url: SITE_URL,
    name: site.name,
    description: site.description,
    inLanguage: "en-IN",
    publisher: { "@id": physicianId },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(article) {
  const url = abs(`/blog/${article.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: article.title,
    description: article.excerpt,
    image: abs(article.image),
    articleSection: article.category,
    keywords: article.tags.join(", "),
    inLanguage: "en-IN",
    author: { "@id": physicianId },
    publisher: { "@id": physicianId },
    // NOTE: add "datePublished" / "dateModified" here once real publication dates exist.
  };
}

export function serviceSchema(service) {
  const url = abs(`/services/${service.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#page`,
    url,
    name: `${service.title} in Mumbai`,
    description: service.short,
    inLanguage: "en-IN",
    about: { "@type": "MedicalProcedure", name: service.title },
    mainEntity: { "@type": "MedicalProcedure", name: service.title },
    author: { "@id": physicianId },
    publisher: { "@id": physicianId },
  };
}
