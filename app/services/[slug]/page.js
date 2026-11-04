import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { services, getService } from "@/data/services";
import { pageMeta } from "@/data/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: `Dr. Maqsood Ali Khan | ${service.title} in Mumbai`,
    description: `${service.short} Consult Dr. Maqsood Ali Khan, ENT, Head-Neck & Skull-Base Surgeon at Masina Hospital, Byculla, Saifee Hospital, Charni Road and Gramy Hospital, Mumbai.`,
    path: `/services/${service.slug}/`,
    keywords: [...service.keywords, "Dr. Maqsood Ali Khan", "ENT Mumbai"],
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
