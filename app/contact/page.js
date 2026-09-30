import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Dr. Maqsood Ali Khan - ENT, Head-Neck & Skull-Base Surgeon",
  description: "Get in touch with Dr. Maqsood Ali Khan at Masina Hospital, Byculla or Saifee Hospital, Charni Road, Mumbai. Call 1800-266-0711.",
};

export default function Contact() {
  return (
    <div className="main-wrapper">
      <Header />

           
    
    



    
    <section className="page-header">
        <div className="page-header-bg">
            <img src="/assets/img/page-header-bg.jpg" alt="img" />
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
            <div className="row align-items-start mt-5">
                <div className="col-lg-5 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="contact-info ">
                        <h3>Contact Information</h3>
                        <p>Feel free to reach out via phone, email, or by completing the appointment request form.</p>
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
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="contact-card-text">
                                    <strong>Phone</strong>
                                    <span>1800-266-0711 (Masina Hospital)</span>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card-icon">
                                    <i className="fa-solid fa-clock"></i>
                                </div>
                                <div className="contact-card-text">
                                    <strong>OPD Timings</strong>
                                    <span>Tue, Wed &amp; Thu, 7:00 PM – 9:00 PM (Masina Hospital)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="contact-form-wrap ">
                        <form id="contactForm" noValidate="">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="firstName">First Name</label>
                                        <input type="text" id="firstName" className="form-control" placeholder="John" required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" className="form-control" placeholder="Doe" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email">Email Address</label>
                                        <input type="email" id="email" className="form-control" placeholder="john@email.com" required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" className="form-control" placeholder="+1 (000) 000-0000" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="service">Service Required</label>
                                <select id="service" className="form-control">
                                    <option value="">Select a service…</option>
                                    <option>Head &amp; Neck / Skull-Base Surgery</option>
                                    <option>Endoscopic Thyroid Surgery</option>
                                    <option>Sleep Apnea &amp; Snoring Treatment</option>
                                    <option>Voice &amp; Laryngeal Surgery</option>
                                    <option>Rhinoplasty &amp; Nasal Surgery</option>
                                    <option>General ENT &amp; Vertigo Care</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="preferredDate">Preferred Date</label>
                                <input type="date" id="preferredDate" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Additional Information</label>
                                <textarea id="message" className="form-control" placeholder="Describe your symptoms or any relevant medical history…"></textarea>
                            </div>
                            <button type="button" className="btn btn-primary w-100">
                                <i className="fa-solid fa-paper-plane"></i> Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <div className="doctor-map-area">
        <div className="container">
            <div className="doctor-map-box">
                <iframe src="https://www.google.com/maps?q=Masina+Hospital,+Byculla,+Mumbai&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>

    
        
        
          <Footer />
    </div>
  );
}
