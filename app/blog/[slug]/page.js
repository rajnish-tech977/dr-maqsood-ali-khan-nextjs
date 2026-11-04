import { notFound } from "next/navigation";
import BlogArticle from "@/components/BlogArticle";
import { articles, getArticle } from "@/data/articles";
import { pageMeta } from "@/data/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMeta({
    title: `Dr. Maqsood Ali Khan | ${article.shortTitle}`,
    description: `${article.excerpt} A patient guide from Dr. Maqsood Ali Khan, ENT, Head-Neck & Skull-Base Surgeon in Mumbai.`,
    path: `/blog/${article.slug}/`,
    image: article.image,
    type: "article",
    keywords: [...article.tags, article.title, "Dr. Maqsood Ali Khan", "ENT Mumbai"],
  });
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <BlogArticle article={article} />;
}
