"use client";

import { useEffect } from "react";

// The template's plugins must run in a strict order (jQuery first, main.js last).
// next/script "afterInteractive" injects scripts asynchronously with NO ordering
// guarantee, so on a first (uncached) visit main.js could run before jQuery/AOS
// existed and nothing animated until a refresh. This loader chains them in order.
const SCRIPTS = [
  "/assets/js/jquery.min.js",
  "/assets/js/bootstrap.min.js",
  "/assets/js/jquery.magnific-popup.min.js",
  "/assets/js/aos.js",
  "/assets/js/slick.min.js",
  "/assets/js/aos-ready.js",
  "/assets/js/main.js",
];

// Inserting script elements with async=false downloads them in PARALLEL but still
// executes them in insertion order, so the strict jQuery -> ... -> main.js order holds
// without waiting for each file one by one.
function loadAll(srcs) {
  return new Promise((resolve) => {
    let left = srcs.length;
    const done = () => {
      left -= 1;
      if (left === 0) resolve();
    };
    srcs.forEach((src) => {
      const s = document.createElement("script");
      s.src = src;
      s.async = false;
      s.onload = done;
      s.onerror = done; // never block; the CSS fallback keeps content visible
      document.body.appendChild(s);
    });
  });
}

export default function LegacyScripts() {
  useEffect(() => {
    if (window.__legacyScriptsStarted) return;
    window.__legacyScriptsStarted = true;
    const root = document.documentElement;

    // If the animation library is not running within 1.5s (slow network, dev server,
    // blocked script), stop hiding content so the page is never blank.
    const fallback = setTimeout(() => root.classList.add("no-aos"), 1500);

    loadAll(SCRIPTS).then(() => {
      clearTimeout(fallback);
      if (window.AOS) {
        window.__aosReady = true;
        window.AOS.refresh();
        // images/fonts change layout height after load; recalc trigger points
        window.addEventListener("load", () => window.AOS.refresh());
        // The Experience / Education / Expertise tabs swap display:none panels. Re-measure after a
        // switch so the newly shown timeline items animate in like the first one does.
        document.addEventListener("click", (e) => {
          if (e.target.closest && e.target.closest(".tab-btn")) {
            setTimeout(() => window.AOS && window.AOS.refreshHard(), 60);
          }
        });
      } else {
        root.classList.add("no-aos");
      }
    });
  }, []);

  return null;
}
