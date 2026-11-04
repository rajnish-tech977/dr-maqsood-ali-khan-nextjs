import BlogArticle from "@/components/BlogArticle";
import { articles } from "@/data/articles";
import { pageMeta } from "@/data/seo";

// Kept for backwards compatibility: /blog-details shows the first article.
// Individual articles live at /blog/<slug>/ — this URL is a duplicate, so it is
// marked noindex and canonicalised to the real article page.
export const metadata = pageMeta({
  title: `${articles[0].shortTitle} | Dr. Maqsood Ali Khan`,
  description: `${articles[0].excerpt} A patient guide from Dr. Maqsood Ali Khan, ENT, Head-Neck & Skull-Base Surgeon in Mumbai.`,
  path: "/blog-details/",
  canonical: `/blog/${articles[0].slug}/`,
  noindex: true,
});

export default function BlogDetails() {
  return <BlogArticle article={articles[0]} />;
}
