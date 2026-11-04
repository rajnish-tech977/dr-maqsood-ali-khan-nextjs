# Dr. Maqsood Ali Khan — Website (Next.js)

This is a Next.js (App Router) rebuild of the "Ayra" doctor/medical HTML template
(originally a static Bootstrap/jQuery site under `~/Downloads/ayra`), personalized
for Dr. Maqsood Ali Khan, ENT, Head-Neck & Skull-Base Endoscopic Surgeon, Mumbai.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start   # serves the static export in out/ at http://localhost:3000
```

This project is a static export (`output: "export"`), so `next start` does not work and
`out/index.html` must NOT be opened by double-click (file://): every asset path starts
with `/`, so the page would load without CSS or images. Always view the build through
`npm run start` (or any web server / cPanel).

## Structure

- `app/` — one folder per route (App Router), e.g. `app/about/page.js` → `/about`.
  `app/page.js` is the homepage.
- `components/Header.jsx` / `components/Footer.jsx` — shared site chrome used on every page.
- `public/assets/` — the original template's CSS, JS and images, referenced with
  root-relative paths (`/assets/...`).
- Legacy jQuery/Bootstrap/AOS/Slick/Magnific Popup scripts are loaded via
  `next/script` in `app/layout.js` (`strategy="afterInteractive"`), the same way
  they ran in the original static template — this keeps the mobile menu, sliders,
  animations, tabs and counters working without a React rewrite of that logic.

## Content that is REAL (sourced from masinahospital.com, practo.com, and a
LinkedIn export the client pasted directly from his own profile — direct
automated fetch of linkedin.com is blocked by robots.txt)

- Name: Dr. Maqsood Ali Khan
- Qualifications: MBBS, MS (Otorhinolaryngology/ENT), DORL (Diploma in Otorhinolaryngology).
  MS is listed as being from Maharashtra University of Health Sciences, Nashik (Practo).
- Specialization: Otorhinolaryngologist (ENT), Head-Neck Surgeon, Skull-Base Endoscopic Surgeon
- 17+ years of clinical practice
- Languages spoken: English, Hindi, Urdu, Marathi
- Practice locations: Masina Hospital, Sant Savta Mali Marg, Near Byculla Railway
  Station, Byculla, Mumbai; Saifee Hospital, Charni Road, Mumbai; and Gramy Hospital, Mumbai
- OPD (all strictly by appointment; edit in `opdSchedule` in `data/site.js`): Masina Hospital Tue/Wed/Thu 6:00 PM; Saifee Hospital Mon/Fri 7:00 PM; Gramy Hospital Mon/Fri 5:00 PM (closing times not provided; hospital name spelled "Gramy" as supplied — confirm spelling/address)
- Appointments: phone / WhatsApp +91 98204 03437 (supplied by the client; the ONLY number used on the site, set once in `data/site.js`). The earlier Masina Hospital helpline 1800-266-0711 was removed everywhere.
- Training: Skull-Base Surgery (Pittsburgh, USA), Robotic Surgical Techniques
  (Newcastle, UK), Endoscopic Thyroidectomy (Vietnam)
- Areas of expertise reflected in the Services/About sections: head & neck and
  skull-base tumour surgery, endoscopic thyroid surgery, sleep apnea & snoring
  treatment, voice & laryngeal surgery, rhinoplasty & nasal surgery, general ENT
  care (sinusitis, tonsillitis, ear infections) and vertigo management
- **Full work-experience timeline** (Home and About pages), taken directly from
  the client's LinkedIn export: CEO, Masina iMISS Center (since 2023); Faculty
  Member (part-time), IMMAST (since 2022); Skull-Base Cancer & ENT Surgeon at
  Breach Candy Hospital Trust, Saifee Hospital and S. L. Raheja Hospital (Fortis
  Associate) (since 2022); Apollo Spectra Hospitals (since 2019); Prince Aly Khan
  Hospital (since 2018); Wockhardt Hospitals (since 2017); Consultant at Global
  Hospital, Parel (since 2016) and Masina Hospital, Byculla (since 2015); private
  ENT/Head-Neck/Endoscopic consulting practice (since 2011); residency at
  Lokmanya Tilak Municipal Medical College & General Hospital, Sion (2008–2011)
  and Asst. Medical Officer at Seth A J B Municipal ENT Hospital (2011–2012).
- **Awards & Recognition photo** on the About page — the client's own photo from
  the Great Indian Healthcare Leaders Summit & Awards 2024, where he's shown
  receiving recognition as CEO of Masina iMISS Center and appears on the panel
  "Transforming Patient Experience: The Future of Personalized Healthcare." The
  caption sticks to only what's legible in the photo — no award category name
  was invented.
- **Conferences section** on the About page — the client's own photo and banner
  from the 1st Congress of SINGPRO (Society of Single Port Robotic Head and Neck
  Surgery), Eunmyung Auditorium, Severance Hospital, Seoul, 18–20 Sept 2026, shown
  with Prof. Yoon Woo Koh. Caption text only repeats what the poster states.
- **Google reviews** on the homepage "What Patients Say" section — 6 real,
  complete reviews (only non-truncated ones were used) copied from the client's
  Google Business Profile listing (iMISS Trust, Masina Hospital, Sant Savta Mali
  Marg, Byculla, Mumbai), lightly copyedited for punctuation/readability only —
  meaning and sentiment unchanged. Reviewer avatars use a generic person icon,
  not a stock photo, since no real reviewer photos were available. The homepage
  stats also now show the real aggregate: 5.0 rating across 387 Google reviews,
  replacing the earlier placeholder "10,000+ patients / 98% satisfaction" figures.

## Shop section — hidden

The homepage's "Clinic Essentials" shop preview, the header's "Shop" nav
dropdown, and the footer's Cart/Checkout quick links have all been commented
out / removed from navigation (they're demo e-commerce content unrelated to
the practice). The underlying pages (`/products`, `/product-details`,
`/shopping-cart`, `/checkout`) still exist in the codebase but are no longer
linked from anywhere — uncomment the marked blocks in `app/page.js` and
`components/Header.jsx` to bring the Shop section back if it's ever needed.

## Content-accuracy pass

The project was re-audited end-to-end to confirm everything is dedicated to
Dr. Khan's real profile, with no duplicate or fabricated content:

- Removed the 3 fictional demo blog comments (fake names, fake avatars,
  Latin filler text, dated 2019) from `/blog-details` — no real reader
  comments exist yet, so the comment list is now empty pending real ones.
- Fixed duplicated/garbled Lorem-ipsum body text on the (unlinked, demo)
  `/product-details` page.
- Confirmed no leftover references to the old placeholder phone/email,
  fictional doctor names, "Onco Surgeon"/oncology-only framing, or
  cardiology content remain anywhere in the project.

## Content that is a PLACEHOLDER — please review and update before publishing

- **Photos elsewhere on the site** — the client is adding these himself; only
  the Awards & Recognition photo he sent has been added so far.
- **No verified personal/clinic email exists** — the invented email used in an
  earlier draft has been removed. The site currently directs enquiries to the
  Masina Hospital phone line and the appointment form; add a real email once
  you have one.
- **Blog articles** — each of the 6 articles now has its own page at
  `/blog/<slug>/` (content lives in `data/articles.js`, rendered by
  `components/BlogArticle.jsx`; `/blog-details` still shows article 1). The text
  is general patient-education writing created for this project, not content
  Dr. Khan has published — review/approve it before going live. Invented demo
  details (fake publication dates, view counts, category/archive counts and a
  made-up quote attributed to Dr. Khan) were removed.
- **Weekly calendar** on the Book Appointment page shows the OPD schedule supplied
  by the clinic (Masina Tue/Wed/Thu 6 PM, Saifee Mon/Fri 7 PM, Gramy Mon/Fri
  5 PM). All strictly by appointment. Timings live in `opdSchedule` in
  `data/site.js`.
- **Shop / Cart / Checkout / Login / Register / 404 / Coming Soon pages** — kept
  from the template as generic utility pages (per the requested full conversion)
  and are not wired up to any real backend, payment, or auth system.

## SEO, search engines (Google & Bing) and AI assistants

All SEO settings live in `data/site.js` (domain, verification codes, address/phone),
`data/seo.js` (metadata + schema.org builders) and `data/faqs.js` (FAQ copy).

**Before launch (required):**
1. The domain is set to `https://drmaqsoodalikhan.com` in `data/site.js` (`SITE_URL`) and is used
   for canonical URLs, `sitemap.xml`, `robots.txt` and social-share links. Use the non-www
   form consistently; in cPanel, redirect `www` to the bare domain.
2. Re-run `npm run build` and upload the contents of `out/`.
3. Add the site in **Google Search Console** and **Bing Webmaster Tools**, paste the
   verification codes into `data/site.js` (`GOOGLE_SITE_VERIFICATION`,
   `BING_SITE_VERIFICATION`), rebuild, then submit `https://yourdomain/sitemap.xml`.
4. Optional: in Google Business Profile, make sure the website field uses this domain.

**What is already in place**
- Unique title, description and canonical URL on every public page; Open Graph and
  Twitter cards with a 1200x630 share image (`public/assets/img/og-image.png`);
  `lang="en-IN"`, theme colour, geo tags (Mumbai, IN-MH).
- Structured data (JSON-LD): `Physician` + `WebSite` on every page, `BreadcrumbList`
  on inner pages, `FAQPage` on Contact, `BlogPosting` on each article. Review stars
  (`aggregateRating`) are deliberately NOT marked up — Google disallows self-served
  review markup for local businesses.
- `robots.txt` (generated) welcomes Googlebot, Bingbot and AI crawlers (OpenAI,
  Claude, Perplexity, Apple, Google-Extended) and blocks demo/utility pages;
  `sitemap.xml` (generated, public pages only); `llms.txt` summary for AI assistants.
- Demo/utility pages (login, register, shop, cart, checkout, 404, coming-soon,
  `/blog-details`) are `noindex` and excluded from the sitemap.
- Visible FAQ on the Contact page (answers use only verified facts), descriptive
  image alt text, one `<h1>` per page, internal links with trailing slashes.
- `public/.htaccess` (copied into `out/`): custom 404, gzip, browser caching and
  security headers for cPanel/Apache; an HTTPS-redirect block is included but
  commented out until SSL is active.

**Still to do when content is real:** add `datePublished`/`dateModified` for articles
(`articleSchema` in `data/seo.js`) and `lastModified` in `app/sitemap.js`; keep
Name/Address/Phone identical to the Google Business Profile; add original photos
with descriptive alt text; get patient reviews on Google (they help local ranking far
more than any tag).

## Notes

- Routes were renamed slightly from the original filenames for cleanliness:
  `book-appoinment.html` → `/book-appointment`, `comming-soon.html` → `/coming-soon`.
- `index.html` and `index-2.html` were identical in the source template; both map
  to `/`.
