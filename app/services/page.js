import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Services | Dr. Maqsood Ali Khan - ENT, Head-Neck & Skull-Base Surgeon",
  description: "Head & Neck / Skull-Base Surgery, Endoscopic Thyroid Surgery, Sleep Apnea & Snoring Treatment, Voice & Laryngeal Surgery, Rhinoplasty and General ENT & Vertigo Care in Mumbai.",
};

export default function Services() {
  return (
    <div className="main-wrapper">
      <Header />

           
    
    


    
    <section className="page-header">
        <div className="page-header-bg">
            <img src="/assets/img/page-header-bg.jpg" alt="img" />
        </div>
        <div className="container">
            <div className="page-header-inner">
                <h1>Services</h1>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span>/</span></li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    </section>
    

    
    <section className="service-area">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="300">
                    <div className="section-label">
                        <span>what i offer</span>
                    </div>
                    <h2 className="section-heading">Medical <em>Services</em></h2>
                    <p>
                        Comprehensive ENT, head-neck and skull-base care combining advanced endoscopic and
                        robotic techniques with compassionate, patient-first care.
                    </p>
                </div>
            </div>
            <div className="row services g-lg-4 g-3">
                <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="service-card ">
                        <div className="service-icon-wrap">
                            <i className="service-icon fa-solid fa-brain"></i>
                        </div>
                        <h2>Head &amp; Neck / Skull-Base Surgery</h2>
                        <p>Surgical management of head &amp; neck and skull-base tumours, with fellowship training in skull-base surgery from Pittsburgh, USA.</p>
                        <a href="/book-appointment" className="service-link">
                            Schedule Now <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="service-card ">
                        <div className="service-icon-wrap">
                            <i className="service-icon fa-solid fa-bolt"></i>
                        </div>
                        <h2>Endoscopic Thyroid Surgery</h2>
                        <p>Scarless endoscopic thyroidectomy techniques, refined through specialised training in Vietnam, for safer and faster recovery.</p>
                        <a href="/book-appointment" className="service-link">
                            Schedule Now <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="service-card ">
                        <div className="service-icon-wrap">
                            <i className="service-icon fa-solid fa-moon"></i>
                        </div>
                        <h2>Sleep Apnea &amp; Snoring Treatment</h2>
                        <p>Diagnosis and treatment of obstructive sleep apnea and chronic snoring, including surgical and non-surgical options.</p>
                        <a href="/book-appointment" className="service-link">
                            Schedule Now <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="600">
                    <div className="service-card ">
                        <div className="service-icon-wrap">
                            <i className="service-icon fa-solid fa-microphone"></i>
                        </div>
                        <h2>Voice &amp; Laryngeal Surgery</h2>
                        <p>Evaluation and surgical treatment of voice and vocal cord disorders affecting speech and swallowing.</p>
                        <a href="/book-appointment" className="service-link">
                            Schedule Now <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="700">
                    <div className="service-card ">
                        <div className="service-icon-wrap">
                            <i className="service-icon fa-solid fa-wave-square"></i>
                        </div>
                        <h2>Rhinoplasty &amp; Nasal Surgery</h2>
                        <p>Functional and aesthetic nasal surgery, including septoplasty and rhinoplasty, for breathing and appearance concerns.</p>
                        <a href="/book-appointment" className="service-link">
                            Schedule Now <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="800">
                    <div className="service-card ">
                        <div className="service-icon-wrap">
                            <i className="service-icon fa-solid fa-stethoscope"></i>
                        </div>
                        <h2>General ENT &amp; Vertigo Care</h2>
                        <p>Diagnosis and treatment of sinusitis, tonsillitis, ear infections, vertigo and balance disorders.</p>
                        <a href="/book-appointment" className="service-link">
                            Schedule Now <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    


    
    <section className="services-cta">
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="services-cta-content">
                        <div className="cta-title">
                            <h2>
                                Need Help Choosing a Service?
                            </h2>
                            <p>
                                Our medical team is here to guide you.
                                Contact us for a free consultation.
                            </p>
                        </div>

                        <div className="d-flex flex-wrap justify-content-center gap-2">
                            <div className="group_btn">
                                <a href="/book-appointment" className="btn btn-primary">
                                    <i className="fa-solid fa-user-doctor"></i>
                                    Schedule Consultation
                                </a>

                                <a href="tel:18002660711" className="btn btn-secondary">
                                    <i className="fa-solid fa-phone"></i>
                                    1800-266-0711
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    

    
        
        
          <Footer />
    </div>
  );
}
