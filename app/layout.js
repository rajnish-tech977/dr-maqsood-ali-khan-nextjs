import LegacyScripts from "@/components/LegacyScripts";
// Template stylesheets are bundled by Next.js (hashed file under /_next/static), so they
// are always part of `npm run build` output - no separate /assets/css/*.css files to
// upload or lose. ORDER MATTERS (same cascade as the original template).
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/magnific-popup.css";
import "../public/assets/css/aos.css";
import "../styles/slick-theme.css";
import "../public/assets/css/slick.css";
import "../public/assets/css/style.css";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { rootMetadata, physicianSchema, websiteSchema } from "@/data/seo";

export const metadata = rootMetadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00505e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        {/* Font Awesome stays a plain stylesheet: its icon fonts live in /assets/webfonts and are
            referenced by relative url(), which is simplest to leave untouched. It has no
            overlap with the bundled template CSS, so load order does not matter. */}
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        {/* Preload the icon fonts so icons are there on the first paint (not popping in after). */}
        <link rel="preload" href="/assets/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        />
        {/* Never leave content hidden: if the animation library is not running 2.5s
            after the document starts (slow network / slow dev server / blocked script),
            reveal everything. Independent of React, so it works even if hydration is slow. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "setTimeout(function(){if(!window.__aosReady)document.documentElement.classList.add('no-aos')},2500)",
          }}
        />
        <noscript>
          <style>{"[data-aos]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body>
        <JsonLd data={[physicianSchema(), websiteSchema()]} />
        {children}

        <LegacyScripts />
      </body>
    </html>
  );
}
