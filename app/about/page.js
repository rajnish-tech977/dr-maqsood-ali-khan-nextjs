import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Dr. Maqsood Ali Khan | ENT, Head-Neck & Skull-Base Surgeon",
  description: "MBBS, MS (ENT), DORL. Otorhinolaryngologist, Head-Neck Surgeon and Skull-Base Endoscopic Surgeon with 17+ years of experience, consulting at Masina Hospital and Saifee Hospital, Mumbai.",
};

export default function About() {
  return (
    <div className="main-wrapper">
      <Header />

            
    
    



    
    <section className="page-header">
        <div className="page-header-bg">
            <img src="/assets/img/page-header-bg.jpg" alt="img" />
        </div>
        <div className="container">
            <div className="page-header-inner">
                <h1>About</h1>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span>/</span></li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    </section>
    

    
    <div className="client-area">
        <div className="container">
            <div className="client-slider">
                <div className="client-track" id="marquee">
                    <div className="client-logo">
                        <img src="/assets/img/brand-1.png" alt="" />
                    </div>
                    <div className="client-logo">
                        <img src="/assets/img/brand-2.png" alt="" />
                    </div>
                    <div className="client-logo">
                        <img src="/assets/img/brand-3.png" alt="" />
                    </div>
                    <div className="client-logo">
                        <img src="/assets/img/brand-4.png" alt="" />
                    </div>
                    <div className="client-logo">
                        <img src="/assets/img/brand-5.png" alt="" />
                    </div>
                    <div className="client-logo">
                        <img src="/assets/img/brand-1.png" alt="" />
                    </div>
                    <div className="client-logo">
                        <img src="/assets/img/brand-2.png" alt="" />
                    </div>
                    <div className="client-logo">
                        <img src="/assets/img/brand-3.png" alt="" />
                    </div>
                    <div className="client-logo">
                        <img src="/assets/img/brand-4.png" alt="" />
                    </div>
                    <div className="client-logo">
                        <img src="/assets/img/brand-5.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    
    <section className="about-section about-us" id="about">
        <div className="container">
            <div className="row align-items-lg-center">
                <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-right" data-aos-delay="300">
                    <div className="about-image-wrap">
                        <div className="about-image">
                            <img src="/assets/img/about-us.webp" alt="image" className="img-fluid" />
                        </div>
                        <div className="about-image-accent">
                            <img src="/assets/img/about-accent.webp" alt="Medical consultation" className="img-fluid" />
                        </div>
                        <div className="about-experience-badge">
                            <span>17+</span>
                            <span>Years of<br />Experience</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-left" data-aos-delay="300">
                    <div className="about-content">
                        <div className="section-label">
                            <span>About Me</span>
                        </div>
                        <h2 className="section-heading">
                            Committed to <em>Precision Care</em><br />
                            In ENT, Head &amp; Neck Surgery
                        </h2>
                        <p>
                            I'm Dr. Maqsood Ali Khan, an Otorhinolaryngologist (ENT), Head-Neck Surgeon and
                            Skull-Base Endoscopic Surgeon with 17+ years of clinical practice, consulting at
                            Masina Hospital (Byculla) and Saifee Hospital (Charni Road) in Mumbai.
                        </p>
                        <p>
                            I hold an MBBS, an MS in Otorhinolaryngology (ENT) and a Diploma in Otorhinolaryngology
                            (DORL), with advanced fellowship training in Skull-Base Surgery (Pittsburgh, USA),
                            Robotic Surgical Techniques (Newcastle, UK) and Endoscopic Thyroidectomy (Vietnam).
                            I consult in English, Hindi, Urdu and Marathi.
                        </p>
                        <div className="highlight-box">
                            <p>
                                <i className="fa-solid fa-quote-left"></i>
                                My goal isn't just to remove disease — it's to help every patient return to
                                speaking, breathing and living well after treatment.
                            </p>
                        </div>
                        <div className="about-meta row">
                            <div className="col-md-12 col-sm-12 meta-item">
                                <div className="meta-label">Full Name</div>
                                <div className="meta-value">Dr. Maqsood Ali Khan, MBBS, MS (ENT), DORL</div>
                            </div>
                            <div className="col-md-12 col-sm-12 meta-item">
                                <div className="meta-label">Specialty</div>
                                <div className="meta-value">Otorhinolaryngologist, Head-Neck &amp; Skull-Base Endoscopic Surgeon</div>
                            </div>
                            <div className="col-md-12 col-sm-12 meta-item">
                                <div className="meta-label">Hospitals</div>
                                <div className="meta-value">Masina Hospital, Byculla &amp; Saifee Hospital, Charni Road</div>
                            </div>
                            <div className="col-md-12 col-sm-12 meta-item">
                                <div className="meta-label">Location</div>
                                <div className="meta-value">Mumbai, Maharashtra</div>
                            </div>
                            <div className="col-md-12 col-sm-12 meta-item">
                                <div className="meta-label">Languages</div>
                                <div className="meta-value">English, Hindi, Urdu, Marathi</div>
                            </div>
                            <div className="col-md-12 col-sm-12 meta-item">
                                <div className="meta-label">Phone</div>
                                <div className="meta-value">1800-266-0711 (Masina Hospital)</div>
                            </div>
                            <div className="col-md-12 col-sm-12 meta-item">
                                <div className="meta-label">Availability</div>
                                <div className="meta-value1">OPD: Tue, Wed &amp; Thu, 7–9 PM (Masina Hospital)</div>
                            </div>
                        </div>
                        <div className="about-specialties">
                            <a className="specialty-tag" href="/services"><span>Head &amp; Neck / Skull-Base Surgery</span></a>
                            <a className="specialty-tag" href="/services"><span>Endoscopic Thyroid Surgery</span></a>
                            <a className="specialty-tag" href="/services"><span>Sleep Apnea &amp; Snoring Treatment</span></a>
                            <a className="specialty-tag" href="/services"><span>Voice &amp; Laryngeal Surgery</span></a>
                            <a className="specialty-tag" href="/services"><span>Rhinoplasty &amp; Nasal Surgery</span></a>
                            <a className="specialty-tag" href="/services"><span>General ENT &amp; Vertigo Care</span></a>
                        </div>
                        <div className="d-flex flex-wrap gap-2">
                            <div className="group_btn">
                                <a href="/book-appointment" className="btn btn-primary">
                                    <i className="fa-regular fa-calendar-check"></i>
                                    Book Appointment
                                </a>
                                <a href="javascript:;" className="btn btn-secondary">
                                    <i className="fa-solid fa-download"></i>
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    



    
    <section className="why-choose">
        <div className="container">
            <div className="row mb-4" data-aos="fade-up" data-aos-delay="300">
                <div className="col-lg-12 text-center">
                    <div className="section-label">
                        <span>Why Choose Us</span>
                    </div>
                    <h2 className="section-heading">Excellence in<em> Head &amp; Neck Care</em></h2>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="200">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fa-solid fa-microchip"></i>
                        </div>
                        <h3>Advanced Technology</h3>
                        <p>Robotic and endoscopic surgical platforms for precise, minimally invasive treatment</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="300">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fa-solid fa-user-doctor"></i>
                        </div>
                        <h3>Internationally Trained</h3>
                        <p>Specialised training in Pittsburgh (USA), Newcastle (UK) and Vietnam</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="400">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fa-solid fa-shield-heart"></i>
                        </div>
                        <h3>Patient Safety</h3>
                        <p>Strict protocols ensuring the highest standards of surgical care</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="500">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fa-solid fa-clock"></i>
                        </div>
                        <h3>17+ Years Experience</h3>
                        <p>A long-standing clinical practice in ENT, head-neck and skull-base surgery</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="600">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fa-solid fa-heart-pulse"></i>
                        </div>
                        <h3>Personalized Care</h3>
                        <p>Customized treatment plans tailored to each patient</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="700">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fa-solid fa-file-medical"></i>
                        </div>
                        <h3>Comprehensive Reports</h3>
                        <p>Detailed medical reports and structured follow-up care</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    


    
    <section className="education-area">
        <div className="container">
            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-8 col-md-10 col-sm-12 text-center">
                    <div className="section-label">
                        <span>Background</span>
                    </div>
                    <h2 className="section-heading">
                        Experience &amp; <em>Education</em>
                    </h2>
                    <p>
                        A career built on rigorous academic training, hands-on clinical excellence,
                        and a commitment to continuous learning.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="timeline-tabs text-center">
                        <button className="tab-btn active" data-tab="experience-panel">Work Experience</button>
                        <button className="tab-btn" data-tab="education-panel">Education &amp; Training</button>
                        <button className="tab-btn" data-tab="awards-panel">Areas of Expertise</button>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="tab-panel active" id="experience-panel">
                        <div className="timeline">
                            <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-user-tie"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">Since 2023</div>
                                    <h2>Chief Executive Officer</h2>
                                    <div className="timeline-institution">Masina iMISS Center, South Mumbai</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-chalkboard-user"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">Since 2022</div>
                                    <h2>Faculty Member (Part-time)</h2>
                                    <div className="timeline-institution">IMMAST</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-hospital"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">Since 2022</div>
                                    <h2>Skull-Base Cancer &amp; ENT Surgeon</h2>
                                    <div className="timeline-institution">Breach Candy Hospital Trust, Saifee Hospital &amp; S. L. Raheja Hospital (Fortis Associate)</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-hospital"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">Since 2019</div>
                                    <h2>Skull-Base Cancer &amp; ENT Surgeon</h2>
                                    <div className="timeline-institution">Apollo Spectra Hospitals</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-hospital"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">Since 2018</div>
                                    <h2>Skull-Base Cancer &amp; ENT Surgeon</h2>
                                    <div className="timeline-institution">Prince Aly Khan Hospital</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-hospital"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">Since 2017</div>
                                    <h2>Skull-Base Cancer &amp; ENT Surgeon</h2>
                                    <div className="timeline-institution">Wockhardt Hospitals</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-hospital"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">Since 2016</div>
                                    <h2>Consultant</h2>
                                    <div className="timeline-institution">Global Hospital, Parel</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-hospital"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">Since 2015</div>
                                    <h2>Consultant, ENT &amp; Skull-Base Endoscopic Surgeon</h2>
                                    <div className="timeline-institution">Masina Hospital, Byculla</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-user-doctor"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">Since 2011</div>
                                    <h2>ENT, Head-Neck &amp; Endoscopic Surgeon (Consultant)</h2>
                                    <div className="timeline-institution">Private Practice, Mumbai Metropolitan Region</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-graduation-cap"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">2008 – 2012</div>
                                    <h2>Early Career</h2>
                                    <div className="timeline-institution">
                                        Residency, Lokmanya Tilak Municipal Medical College &amp; General
                                        Hospital, Sion, Mumbai (2008–2011); Asst. Medical Officer, Seth A J B
                                        Municipal ENT Hospital, Mumbai (2011–2012)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="tab-panel" id="education-panel">
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-graduation-cap"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">Degree</div>
                                    <h2>MBBS</h2>
                                    <p>Bachelor of Medicine, Bachelor of Surgery.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-flask"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">Postgraduate</div>
                                    <h2>MS (ENT)</h2>
                                    <p>Master of Surgery in Otorhinolaryngology, Maharashtra University of Health Sciences, Nashik.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-award"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">Diploma</div>
                                    <h2>DORL</h2>
                                    <p>Diploma in Otorhinolaryngology.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-certificate"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">International Training</div>
                                    <h2>Skull-Base Surgery</h2>
                                    <div className="timeline-institution">Pittsburgh, USA</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-certificate"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">International Training</div>
                                    <h2>Robotic Head &amp; Neck Surgery</h2>
                                    <div className="timeline-institution">Newcastle, UK</div>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-certificate"></i>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline-period">International Training</div>
                                    <h2>Endoscopic Thyroidectomy</h2>
                                    <div className="timeline-institution">Vietnam</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="tab-panel" id="awards-panel">
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-brain"></i>
                                </div>
                                <div className="timeline-content">
                                    <h2>Head &amp; Neck / Skull-Base Surgery</h2>
                                    <p>Surgical management of head &amp; neck and skull-base tumours.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-bolt"></i>
                                </div>
                                <div className="timeline-content">
                                    <h2>Endoscopic Thyroid Surgery</h2>
                                    <p>Scarless thyroidectomy using advanced endoscopic techniques.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-moon"></i>
                                </div>
                                <div className="timeline-content">
                                    <h2>Sleep Apnea &amp; Snoring Treatment</h2>
                                    <p>Diagnosis and management of obstructive sleep apnea and chronic snoring.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-microphone"></i>
                                </div>
                                <div className="timeline-content">
                                    <h2>Voice &amp; Laryngeal Surgery</h2>
                                    <p>Evaluation and surgical treatment of voice and vocal cord disorders.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-wave-square"></i>
                                </div>
                                <div className="timeline-content">
                                    <h2>Rhinoplasty &amp; Nasal Surgery</h2>
                                    <p>Functional and aesthetic nasal surgery, including septoplasty.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot">
                                    <i className="fa-solid fa-stethoscope"></i>
                                </div>
                                <div className="timeline-content">
                                    <h2>General ENT &amp; Vertigo Care</h2>
                                    <p>Sinusitis, tonsillitis, ear infections, and vertigo and balance disorders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    


    
    <section className="instructor-area">
        <div className="container">
            <div className="row mb-4" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-12 text-center">
                    <div className="section-label">
                        <span>International Training</span>
                    </div>
                    <h2 className="section-heading">Where I <em>Trained</em></h2>
                </div>
            </div>
            <div className="instructor-box">
                <div className="row g-3 justify-content-center">
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="feature-card text-center">
                            <div className="feature-icon">
                                <i className="fa-solid fa-brain"></i>
                            </div>
                            <h3>Skull-Base Surgery</h3>
                            <span>Pittsburgh, USA</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="feature-card text-center">
                            <div className="feature-icon">
                                <i className="fa-solid fa-user-doctor"></i>
                            </div>
                            <h3>Robotic Head &amp; Neck Surgery</h3>
                            <span>Newcastle, UK</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="feature-card text-center">
                            <div className="feature-icon">
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <h3>Endoscopic Thyroidectomy</h3>
                            <span>Vietnam</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section className="about-section" id="awards">
        <div className="container">
            <div className="row align-items-lg-center">
                <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-right" data-aos-delay="300">
                    <div className="about-image-wrap">
                        <div className="about-image">
                            <img src="/assets/img/award-ghlsa-2024.png" alt="Dr. Maqsood Ali Khan recognised at the Great Indian Healthcare Leaders Summit and Awards 2024" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-left" data-aos-delay="300">
                    <div className="about-content">
                        <div className="section-label">
                            <span>Recognition</span>
                        </div>
                        <h2 className="section-heading">
                            Great Indian <em>Healthcare Leaders</em><br />
                            Summit &amp; Awards 2024
                        </h2>
                        <p>
                            Dr. Maqsood Ali Khan, Chief Executive Officer of Masina iMISS Center, was recognised
                            at the Great Indian Healthcare Leaders Summit &amp; Awards 2024, and joined the panel
                            discussion "Transforming Patient Experience: The Future of Personalized Healthcare"
                            alongside other healthcare leaders.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>





          <Footer />
    </div>
  );
}
