import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/data/services";
import { pageMeta } from "@/data/seo";

// Kept for backwards compatibility: /service-details shows the first service.
// Real pages live at /services/<slug>/ - this URL is a duplicate (noindex + canonical).
export const metadata = pageMeta({
  title: `Dr. Maqsood Ali Khan | ${services[0].title} in Mumbai`,
  description: services[0].short,
  path: "/service-details/",
  canonical: `/services/${services[0].slug}/`,
  noindex: true,
});

export default function ServiceDetails() {
  return <ServiceDetail service={services[0]} />;
}
