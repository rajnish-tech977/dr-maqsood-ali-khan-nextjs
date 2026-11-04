import { site, telHref, whatsappHref, opdSchedule, opdNote } from "@/data/site";
import { services, serviceHref } from "@/data/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/data/seo";

const STEPS = [
  ["Initial Consultation", "Evaluation of your history, symptoms and examination."],
  ["Diagnostic Testing", "Tests are advised only where your condition needs them."],
  ["Treatment Plan", "Options explained clearly, and the plan agreed with you."],
  ["Follow-Up Care", "Review after treatment to check recovery and progress."],
];

export default function ServiceDetail({ service }) {
  const others = services.filter((s) => s.slug !== service.slug);
  return (
    <div className="main-wrapper">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: service.title, path: serviceHref(service) },
          ]),
          serviceSchema(service),
        ]}
      />
      <Header />

      <section className="page-header">
        <div className="page-header-bg">
          <img src="/assets/img/page-header-bg.jpg" alt="" />
        </div>
        <div className="container">
          <div className="page-header-inner">
            <h1 className="page-header-article-title">{service.title}</h1>
            <ul className="thm-breadcrumb list-unstyled">
              <li><a href="/">Home</a></li>
              <li><span>/</span></li>
              <li><a href="/services/">Services</a></li>
              <li><span>/</span></li>
              <li>{service.title}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="row align-items-lg-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="service-hero-text">
                  <div className="section-label"><span>Medical Specialty</span></div>
                  <h2 className="section-heading">{service.title}</h2>
                  <p>{service.heroText}</p>
                  <div className="service-meta">
                    <div className="service-item">
                      <i className="fa-regular fa-clock"></i>
                      OPD: {opdSchedule.map((o) => `${o.daysShort}, ${o.time} (${o.shortPlace})`).join(" · ")}
                    </div>
                    <div className="service-item">
                      <i className="fa-solid fa-user-doctor"></i>
                      Dr. Maqsood Ali Khan
                    </div>
                    <div className="service-item">
                      <i className="fa-solid fa-briefcase-medical"></i>
                      17+ Years Experience
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <div className="group_btn">
                      <a href={telHref} className="btn btn-primary">
                        <i className="fa-solid fa-phone"></i>
                        Book Appointment
                      </a>
                      <a href={whatsappHref(`Hello Dr. Maqsood Ali Khan, I would like to know more about ${service.title}.`)} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp"></i>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="service-hero-image text-center">
                  <img src="/assets/img/maqsood-consulting-room.jpg" alt={`${service.title} - Dr. Maqsood Ali Khan, Mumbai`} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12">
              <div className="content-main">
                <div className="content-section">
                  <h2 className="content-heading">Service Overview</h2>
                  {service.overview.map((p, i) => (<p key={i}>{p}</p>))}
                </div>
                <div className="content-section">
                  <h2 className="content-heading">Conditions We Treat</h2>
                  <div className="row conditions-grid">
                    {service.conditions.map((c) => (
                      <div className="col-lg-6 col-sm-12" key={c}>
                        <span className="condition-item">
                          <i className="fa-solid fa-arrow-trend-up"></i>
                          {c}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="content-section">
                  <h2 className="content-heading">Available Procedures</h2>
                  <div className="row g-4 procedures-list">
                    {service.procedures.map((p) => (
                      <div className="col-md-12 col-sm-12" key={p.name}>
                        <div className="procedure-card">
                          <div className="procedure-icon"><i className={`fa-solid ${p.icon}`}></i></div>
                          <div className="procedure-text">
                            <h3>{p.name}</h3>
                            <p>{p.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="expect-wrapper">
                  <h2 className="content-heading">What to Expect</h2>
                  <div className="expect-timeline">
                    {STEPS.map(([t, d], i) => (
                      <div className="expect-step" key={t}>
                        <div className="expect-dot">{i + 1}</div>
                        <div className="expect-text"><h2>{t}</h2><p>{d}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-4" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                  This page is general information, not medical advice. Whether a treatment is suitable for you is decided only after an in-person consultation.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12">
              <aside className="content-sidebar">
                <div className="row">
                  <div className="col-lg-12 col-sm-6 col-md-12">
                    <div className="sidebar-card">
                      <h3 className="widget-title">Need Help?</h3>
                      <ul className="sidebar-contact">
                        <li>Call: <a href={telHref}>{site.phone}</a></li>
                        <li>WhatsApp: <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">{site.phone}</a></li>
                        <li>Location: Byculla &amp; Charni Road, Mumbai</li>
                        {opdSchedule.map((o) => (
                          <li key={o.id}>OPD: {o.daysShort}, {o.time} ({o.shortPlace})</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6 col-md-12">
                    <div className="sidebar-card related-card">
                      <h3 className="widget-title">Other Services</h3>
                      {others.map((s) => (<a key={s.slug} href={serviceHref(s)}>{s.title}</a>))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
