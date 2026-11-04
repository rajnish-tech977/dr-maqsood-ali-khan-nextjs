import { site, telHref, whatsappHref, opdSchedule, opdNote, googleListings } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema, faqSchema } from "@/data/seo";
import { faqs } from "@/data/faqs";

export const metadata = pageMeta({
  title: "Dr. Maqsood Ali Khan | Contact & Clinic Locations, Mumbai",
  description: "Contact Dr. Maqsood Ali Khan at Masina Hospital, Byculla, Saifee Hospital, Charni Road or Gramy Hospital, Mumbai. Call or WhatsApp +91 98204 03437. OPD timings, map and FAQs.",
  path: "/contact/",
  keywords: site.keywordSets.contact,
});

export default function Contact() {
  return (
    <div className="main-wrapper">
      <JsonLd data={[faqSchema(faqs), breadcrumbSchema([{name:"Home",path:"/"},{name:"Contact",path:"/contact/"}])]} />
      <Header />

           
    
    



    
    <section className="page-header">
        <div className="page-header-bg">
            <img src="/assets/img/page-header-bg.jpg" alt="" />
        </div>
        <div className="container">
            <div className="page-header-inner">
                <h1>Contact</h1>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span>/</span></li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </section>
    

    
    <section className="contact-area" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="section-label">
                        <span>get in touch</span>
                    </div>
                    <h2 className="section-heading">Schedule Your <em>Consultation</em></h2>
                    <p>
                        Ready to take the first step toward better ENT and head-neck health? Reach out
                        and the clinic team will get back to you promptly.
                    </p>
                </div>
            </div>
            <div className="row align-items-stretch mt-5">
                <div className="col-lg-5 col-md-6 col-sm-6 contact-left" data-aos="fade-up" data-aos-delay="200">
                    <div className="contact-info ">
                        <h3>Contact Information</h3>
                        <p>Reach us on WhatsApp or by phone, or visit us at any of our hospitals. OPD hours and locations are below.</p>
                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="contact-card-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="contact-card-text">
                                    <strong>Masina Hospital</strong>
                                    <span>Sant Savta Mali Marg, Near Byculla Railway Station, Byculla, Mumbai</span>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="contact-card-text">
                                    <strong>Saifee Hospital</strong>
                                    <span>Charni Road, Mumbai</span>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card-icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="contact-card-text">
                                    <strong>Gramy Hospital</strong>
                                    <span>Mon &amp; Fri, 5:00 PM</span>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="contact-card-text">
                                    <strong>Phone</strong>
                                    <span><a href={telHref}>{site.phone}</a> (call &amp; WhatsApp)</span>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card-icon">
                                    <i className="fa-solid fa-clock"></i>
                                </div>
                                <div className="contact-card-text">
                                    <strong>OPD Timings</strong>
                                    <span>
                                        {opdSchedule.map((o) => (
                                            <span key={o.id} style={{display: 'block'}}>{o.daysShort}, {o.time} · {o.shortPlace}</span>
                                        ))}
                                        <span style={{display: 'block'}}>{opdNote}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-6 contact-side" data-aos="fade-up" data-aos-delay="300">
                    <div className="contact-form-wrap text-center">
                        <div className="contact-photo">
                            <img src="/assets/img/maqsood-nameboard.jpg" alt="Dr. Maqsood Ali Khan beside his name board at the clinic" loading="lazy" />
                        </div>
                        <div className="section-label">
                            <span>Schedule your visit online</span>
                        </div>
                        <h2 className="section-heading" style={{fontSize: '36px'}}>Take the next step and schedule an appointment today</h2>
                        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                            <a href={telHref} className="btn btn-primary">
                                <i className="fa-solid fa-phone"></i> Call Us
                            </a>
                            <a href={whatsappHref()} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-whatsapp"></i> WhatsApp Us
                            </a>
                        </div>
                        <p className="mt-3 mb-0">
                            Call or WhatsApp us on <strong><a href={telHref}>{site.phone}</a></strong>
                        </p>
                    </div>
                    <div className="google-stack">
                        {googleListings.map((g) => (
                            <div key={g.id} data-aos="fade-up" data-aos-delay="400">
                        <div className="google-card">
                            <div className="google-info">
                                <span className="google-badge"><i className="fa-brands fa-google"></i> Google Business Profile</span>
                                <h2 className="google-card-name">{g.name}</h2>
                                <p className="google-sub">{g.subtitle}</p>
                                {g.rating && (
                                    <div className="google-rating">
                                        <strong>{g.rating}</strong>
                                        <span className="google-stars" aria-label={`${g.rating} out of 5 stars`}>
                                            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                        </span>
                                        <span className="google-count">{g.reviews} Google reviews</span>
                                    </div>
                                )}
                            </div>
                            <div className="google-actions">
                                <a href={g.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-google"></i> View on Google
                                </a>
                                <a href={g.reviewsUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-solid fa-star"></i> Read Reviews
                                </a>
                            </div>
                        </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Map (below the Google listings) */}
    <section className="contact-map-area">
        <div className="container">
            <div className="doctor-map-box contact-map-fill" data-aos="fade-up" data-aos-delay="200">
                <iframe title="Dr Maqsood Ali Khan on Google Maps" src="https://www.google.com/maps?q=Dr+Maqsood+Ali+Khan+ENT+Surgeon+Masina+Hospital+Byculla+Mumbai&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>

    <section className="faq-area" id="faq" style={{padding: '60px 0 70px'}}>
        <div className="container">
            <div className="row justify-content-center text-center mb-4">
                <div className="col-lg-8">
                    <div className="section-label">
                        <span>FAQ</span>
                    </div>
                    <h2 className="section-heading">Frequently Asked <em>Questions</em></h2>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    {faqs.map((f) => (
                        <details key={f.q} className="faq-item" style={{borderBottom: '1px solid #e4e0d6', padding: '16px 4px'}}>
                            <summary style={{cursor: 'pointer', fontWeight: 600, fontSize: '18px'}}>{f.q}</summary>
                            <p style={{margin: '10px 0 0'}}>{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    </section>

    
        
        
          <Footer />
    </div>
  );
}
