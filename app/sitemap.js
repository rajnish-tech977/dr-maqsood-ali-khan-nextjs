import { abs } from "@/data/site";
import { articles } from "@/data/articles";
import { services } from "@/data/services";

export const dynamic = "force-static";

// NOTE: "lastModified" is intentionally omitted until real dates are known — a wrong
// date is worse than none. Add it per entry when content is published/updated.
export default function sitemap() {
  const pages = [
    { path: "/", changeFrequency: "monthly", priority: 1 },
    { path: "/about/", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/", changeFrequency: "monthly", priority: 0.9 },
    ...services.map((s) => ({ path: `/services/${s.slug}/`, changeFrequency: "monthly", priority: 0.8 })),
    { path: "/book-appointment/", changeFrequency: "yearly", priority: 0.8 },
    { path: "/contact/", changeFrequency: "yearly", priority: 0.8 },
    { path: "/blog/", changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((a) => ({ path: `/blog/${a.slug}/`, changeFrequency: "yearly", priority: 0.6 })),
  ];
  return pages.map(({ path, changeFrequency, priority }) => ({
    url: abs(path),
    changeFrequency,
    priority,
  }));
}
