import { SITE_URL } from "@/data/site";

export const dynamic = "force-static";

// Utility/demo pages that should not be crawled or indexed.
const blocked = [
  "/login/",
  "/register/",
  "/coming-soon/",
  "/404/",
  "/products/",
  "/product-details/",
  "/shopping-cart/",
  "/checkout/",
  "/blog-details/",
];

// Search engines and AI assistants/answer engines are explicitly welcome so the
// site can be found, cited and summarised (Google, Bing, ChatGPT/OpenAI, Claude,
// Perplexity, Apple, etc.). Remove an entry here if you want to opt out of one.
const crawlers = [
  "*",
  "Googlebot",
  "Bingbot",
  "Google-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Applebot-Extended",
  "DuckDuckBot",
];

export default function robots() {
  return {
    rules: crawlers.map((userAgent) => ({ userAgent, allow: "/", disallow: blocked })),
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
