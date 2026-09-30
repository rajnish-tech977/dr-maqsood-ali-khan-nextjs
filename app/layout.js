import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Dr. Maqsood Ali Khan | ENT, Head-Neck & Skull-Base Surgeon, Mumbai",
  description:
    "Dr. Maqsood Ali Khan, MBBS, MS (ENT), DORL, is an Otorhinolaryngologist, Head-Neck Surgeon and Skull-Base Endoscopic Surgeon in Mumbai with 17+ years of experience, consulting at Masina Hospital (Byculla) and Saifee Hospital (Charni Road).",
  icons: {
    icon: [
      { url: "/assets/img/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/assets/img/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/assets/img/favicon/favicon.ico",
    apple: "/assets/img/favicon/apple-touch-icon.png",
  },
  manifest: "/assets/img/favicon/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/slick-theme.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        {children}

        <Script src="/assets/js/jquery.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/aos.js" strategy="afterInteractive" />
        <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
