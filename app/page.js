import { site, telHref, whatsappHref, opdSchedule, opdNote } from "@/data/site";
import { articles, articleHref } from "@/data/articles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { pageMeta } from "@/data/seo";

export const metadata = pageMeta({
  title: "Dr. Maqsood Ali Khan | ENT & Head-Neck Surgeon in Mumbai",
  description: "Dr. Maqsood Ali Khan (MBBS, MS ENT, DORL): ENT, Head-Neck and Skull-Base Surgeon in Mumbai with 17+ years of experience at Masina, Saifee and Gramy Hospitals.",
  path: "/",
  keywords: site.keywordSets.home,
});

export default function Home() {
  return (
    <div className="main-wrapper">
      <Header />

        
        
        

        
        <section className="hero-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="hero-text" data-aos="fade-up" data-aos-delay="300">
                            <div className="hero-sub-heading">
                                <span><em className="fa fa-star"></em> 17+ Years of Advanced ENT, Head-Neck &amp; Skull-Base Care</span>
                            </div>
                            <h1 className="h1">Dr. Maqsood Ali Khan</h1>
                            <h2 className="h2">Otorhinolaryngologist, Head-Neck &amp; Skull-Base Endoscopic Surgeon</h2>
                            <p>
                                Dr. Maqsood Ali Khan, MBBS, MS (ENT), DORL, is a Consultant ENT, Head-Neck and
                                Skull-Base Endoscopic Surgeon with 17+ years of clinical practice, consulting at
                                Masina Hospital (Byculla), Saifee Hospital (Charni Road) and Gramy Hospital in Mumbai.
                            </p>
                            <div className="group_btn">
                                <a href={telHref} className="btn btn-primary">
                                    Book Appointment
                                </a>
                                <a href="/about/" className="btn btn-secondary">
                                    More About Me
                                </a>
                            </div>
                        </div>
                        <div className="stats counter-section">
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4" data-aos="fade-up" data-aos-delay="300">
                                    <div className="stat-box">
                                        <h2 className="counter" data-target="17" data-suffix="+">0</h2>
                                        <p>Years Experience</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4" data-aos="fade-up" data-aos-delay="500">
                                    <div className="stat-box">
                                        <h2 className="counter" data-target="387" data-suffix="+">0</h2>
                                        <p>Google Reviews</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-4" data-aos="fade-up" data-aos-delay="700">
                                    <div className="stat-box">
                                        <h2>5.0<i className="fa-solid fa-star" style={{fontSize: '0.55em', marginLeft: '4px'}}></i></h2>
                                        <p>Google Rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="hero-img">
                            <img src="/assets/img/maqsood.png" alt="Dr. Maqsood Ali Khan, ENT, Head-Neck and Skull-Base Surgeon, Mumbai" className="img-fluid" style={{ transform: 'scaleX(-1) translateY(0)' }} />
                            <div className="hero-bar">
                                <div className="hero-info">
                                    <div className="hero-icon">
                                        <i className="fa-regular fa-calendar"></i>
                                    </div>
                                    <div className="text">
                                        <h2>Available Today</h2>
                                        <p>Book your consultation now</p>
                                    </div>
                                </div>
                                <a href={telHref} className="btn btn-primary">Book Now</a>
                            </div>
                        </div>
                        <div className="header-background"></div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="about-section home-about" id="about">
            <div className="container">
                <div className="row align-items-center g-4 g-lg-5">
                    <div className="col-lg-5 col-md-12" data-aos="fade-right" data-aos-delay="300">
                        <div className="home-photo">
                            <img src="/assets/img/maqsood-desk.jpg" alt="Dr. Maqsood Ali Khan, ENT and Head-Neck Surgeon, at his desk in Mumbai" />
                            <div className="home-photo-badge">
                                <strong>17+</strong>
                                <span>Years of<br />Experience</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12" data-aos="fade-left" data-aos-delay="300">
                        <div className="about-content">
                            <div className="section-label">
                                <span>Meet the Surgeon</span>
                            </div>
                            <h2 className="section-heading">
                                Advanced <em>ENT &amp; Head-Neck</em> Care in Mumbai
                            </h2>
                            <p>
                                Dr. Maqsood Ali Khan is an Otorhinolaryngologist, Head-Neck Surgeon and Skull-Base
                                Endoscopic Surgeon with 17+ years of clinical practice, trained in skull-base surgery,
                                robotic techniques and endoscopic thyroid surgery.
                            </p>
                            <div className="home-facts">
                                <div className="home-fact">
                                    <div className="home-fact-icon"><i className="fa-solid fa-graduation-cap"></i></div>
                                    <div>
                                        <h3>Qualifications</h3>
                                        <p>MBBS, MS (ENT), DORL</p>
                                    </div>
                                </div>
                                <div className="home-fact">
                                    <div className="home-fact-icon"><i className="fa-solid fa-brain"></i></div>
                                    <div>
                                        <h3>Skull-Base Fellowship</h3>
                                        <p>Pittsburgh, USA</p>
                                    </div>
                                </div>
                                <div className="home-fact">
                                    <div className="home-fact-icon"><i className="fa-solid fa-microscope"></i></div>
                                    <div>
                                        <h3>Advanced Training</h3>
                                        <p>Robotic surgery (Newcastle, UK) &amp; endoscopic thyroidectomy (Vietnam)</p>
                                    </div>
                                </div>
                                <div className="home-fact">
                                    <div className="home-fact-icon"><i className="fa-solid fa-hospital"></i></div>
                                    <div>
                                        <h3>Consults At</h3>
                                        <p>Masina, Saifee &amp; Gramy Hospitals, Mumbai</p>
                                    </div>
                                </div>
                            </div>
                            <div className="group_btn mt-4">
                                <a href="/about/" className="btn btn-primary">
                                    <i className="fa-solid fa-user-doctor"></i>
                                    Read Full Profile
                                </a>
                                <a href={telHref} className="btn btn-secondary">
                                    <i className="fa-regular fa-calendar-check"></i>
                                    Book Appointment
                                </a>
                            </div>
                        </div>
                    </div>
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
                            <a href="/services/head-neck-skull-base-surgery/" className="service-link">
                            View Details <i className="fa-solid fa-arrow-right"></i>
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
                            <a href="/services/endoscopic-thyroid-surgery/" className="service-link">
                            View Details <i className="fa-solid fa-arrow-right"></i>
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
                            <a href="/services/sleep-apnea-snoring-treatment/" className="service-link">
                            View Details <i className="fa-solid fa-arrow-right"></i>
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
                            <a href="/services/voice-laryngeal-surgery/" className="service-link">
                            View Details <i className="fa-solid fa-arrow-right"></i>
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
                            <a href="/services/rhinoplasty-nasal-surgery/" className="service-link">
                            View Details <i className="fa-solid fa-arrow-right"></i>
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
                            <a href="/services/general-ent-vertigo-care/" className="service-link">
                            View Details <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="education-area">
            <div className="container">
                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
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
                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="timeline-tabs text-center">
                            <button className="tab-btn active" data-tab="experience-panel">Work Experience</button>
                            <button className="tab-btn" data-tab="education-panel">Education &amp; Training</button>
                            <button className="tab-btn" data-tab="awards-panel">Areas of Expertise</button>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 col-sm-12">
                        <div className="tab-panel active" id="experience-panel">
                            <div className="timeline">
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-user-tie"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">Since 2023</div>
                                        <h2>Chief Executive Officer</h2>
                                        <div className="timeline-institution">Masina iMISS Center, South Mumbai</div>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-chalkboard-user"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">Since 2022</div>
                                        <h2>Faculty Member (Part-time)</h2>
                                        <div className="timeline-institution">IMMAST</div>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-hospital"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">Since 2022</div>
                                        <h2>Skull-Base Cancer &amp; ENT Surgeon</h2>
                                        <div className="timeline-institution">Breach Candy Hospital Trust, Saifee Hospital &amp; S. L. Raheja Hospital (Fortis Associate)</div>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-hospital"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">Since 2019</div>
                                        <h2>Skull-Base Cancer &amp; ENT Surgeon</h2>
                                        <div className="timeline-institution">Apollo Spectra Hospitals</div>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-hospital"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">Since 2018</div>
                                        <h2>Skull-Base Cancer &amp; ENT Surgeon</h2>
                                        <div className="timeline-institution">Prince Aly Khan Hospital</div>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-hospital"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">Since 2017</div>
                                        <h2>Skull-Base Cancer &amp; ENT Surgeon</h2>
                                        <div className="timeline-institution">Wockhardt Hospitals</div>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-hospital"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">Since 2016</div>
                                        <h2>Consultant</h2>
                                        <div className="timeline-institution">Global Hospital, Parel</div>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-hospital"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">Since 2015</div>
                                        <h2>Consultant, ENT &amp; Skull-Base Endoscopic Surgeon</h2>
                                        <div className="timeline-institution">Masina Hospital, Byculla</div>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-user-doctor"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">Since 2011</div>
                                        <h2>ENT, Head-Neck &amp; Endoscopic Surgeon (Consultant)</h2>
                                        <div className="timeline-institution">Private Practice, Mumbai Metropolitan Region</div>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
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
                        <div className="tab-panel" id="education-panel">
                            <div className="timeline">
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-graduation-cap"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">Degree</div>
                                        <h2>MBBS</h2>
                                        <p>Bachelor of Medicine, Bachelor of Surgery.</p>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-flask"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">Postgraduate</div>
                                        <h2>MS (ENT)</h2>
                                        <p>Master of Surgery in Otorhinolaryngology, Maharashtra University of Health Sciences, Nashik.</p>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-award"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">Diploma</div>
                                        <h2>DORL</h2>
                                        <p>Diploma in Otorhinolaryngology.</p>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-certificate"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">International Training</div>
                                        <h2>Skull-Base Surgery</h2>
                                        <div className="timeline-institution">Pittsburgh, USA</div>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-certificate"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <div className="timeline-period">International Training</div>
                                        <h2>Robotic Head &amp; Neck Surgery</h2>
                                        <div className="timeline-institution">Newcastle, UK</div>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
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
                        <div className="tab-panel" id="awards-panel">
                            <div className="timeline">
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-brain"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <h2>Head &amp; Neck / Skull-Base Surgery</h2>
                                        <p>Surgical management of head &amp; neck and skull-base tumours.</p>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-bolt"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <h2>Endoscopic Thyroid Surgery</h2>
                                        <p>Scarless thyroidectomy using advanced endoscopic techniques.</p>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-moon"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <h2>Sleep Apnea &amp; Snoring Treatment</h2>
                                        <p>Diagnosis and management of obstructive sleep apnea and chronic snoring.</p>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-microphone"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <h2>Voice &amp; Laryngeal Surgery</h2>
                                        <p>Evaluation and surgical treatment of voice and vocal cord disorders.</p>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                                    <div className="timeline-dot">
                                        <i className="fa-solid fa-wave-square"></i>
                                    </div>
                                    <div className="timeline-content">
                                        <h2>Rhinoplasty &amp; Nasal Surgery</h2>
                                        <p>Functional and aesthetic nasal surgery, including septoplasty.</p>
                                    </div>
                                </div>
                                <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
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
                    <div className="col-lg-5 col-md-10 col-sm-12 timeline-photos-col">
                        <div className="timeline-photos" data-aos="fade-left" data-aos-delay="200">
                            <figure className="tl-photo">
                                <img src="/assets/img/award-handover.jpg" alt="Dr. Maqsood Ali Khan receiving his recognition at the Great Indian Healthcare Leaders Summit and Awards 2024" loading="lazy" />
                                <figcaption>Recognised at the Great Indian Healthcare Leaders Summit &amp; Awards 2024</figcaption>
                            </figure>
                            <div className="tl-photo-row">
                                <figure className="tl-photo">
                                    <img src="/assets/img/award-panel-1.jpg" alt="Dr. Maqsood Ali Khan speaking on the panel at the Great Indian Healthcare Leaders Summit 2024" loading="lazy" />
                                </figure>
                                <figure className="tl-photo">
                                    <img src="/assets/img/award-panel-2.jpg" alt="Dr. Maqsood Ali Khan during the panel discussion on patient experience, 2024" loading="lazy" />
                                </figure>
                            </div>
                            <p className="tl-photo-note">Panel discussion: &ldquo;Transforming Patient Experience: The Future of Personalized Healthcare&rdquo;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <section id="blog" className="blog-area">
            <div className="container">
                <div className="row justify-content-center text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="section-label">
                            <span>Insights</span>
                        </div>
                        <h2 className="section-heading">Latest <em>Articles</em></h2>
                        <p>
                            Evidence-based health insights, research summaries, and wellness guidance from my practice.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    {articles.slice(0, 3).map((a, i) => (
                        <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay={300 + i * 100} key={a.slug}>
                            <article className="blog-card">
                                <div className="blog-thumb">
                                    <a href={articleHref(a)}><img src={a.image} alt={a.title} /></a>
                                    <div className="blog-category">
                                        <span>{a.category}</span>
                                    </div>
                                </div>
                                <div className="blog-body">
                                    <div className="blog-meta">
                                        <span><i className="fa-regular fa-clock"></i> {a.readTime}</span>
                                    </div>
                                    <h3><a href={articleHref(a)}>{a.title}</a></h3>
                                    <p>{a.excerpt}</p>
                                    <div className="blog-read-more">
                                        <a href={articleHref(a)}>
                                            Read Articles <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
                <div className="row mt-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="col-12 text-center">
                        <a href="/blog/" className="btn btn-primary">
                            <i className="fa-solid fa-newspaper"></i> View All Articles
                        </a>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="testimonials-section">
            <div className="container">
                <div className="row justify-content-center text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="section-label">
                            <span>patient voices</span>
                        </div>
                        <h2 className="section-heading">What Patients <em>Say</em></h2>
                        <p>
                            Real Google reviews from patients — 5.0 average rating across 387 reviews.
                        </p>
                        <p>
                            <a href="https://www.google.com/search?q=Dr+Maqsood+Ali+Khan+iMISS+Masina+Hospital+Byculla+reviews" className="service-link" target="_blank" rel="noopener noreferrer">
                                See all reviews on Google <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="testimonial-box" data-aos="fade-up" data-aos-delay="300">
                    <div className="testimonial-card">
                        <div className="review-star justify-content-between">
                            <span>
                                <i className="fa-solid fa-quote-left"></i>
                            </span>
                            <div className="rating d-flex">
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled"></i>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="description">
                                <p>I recently underwent DCR endoscopy surgery under Dr. Maqsood Ali Khan. The entire experience was smooth and reassuring. The doctor was highly professional and caring. I am grateful for the excellent treatment and support provided throughout my recovery.</p>
                            </div>
                        </div>
                        <div className="testimonial-author">
                            <div className="avatar avatar-lg">
                                <i className="fa-solid fa-circle-user" style={{fontSize: '52px', lineHeight: '52px', color: '#a5a6f6', display: 'block'}}></i>
                            </div>
                            <div className="author-name">
                                <h2>Ghita Pereira</h2>
                                <p>Google review · DCR endoscopy</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="review-star justify-content-between">
                            <span>
                                <i className="fa-solid fa-quote-left"></i>
                            </span>
                            <div className="rating d-flex">
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled"></i>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="description">
                                <p>Excellent oncologist with great knowledge and a caring nature. The doctor explained everything clearly and provided the best possible care throughout the treatment. Highly recommended for anyone seeking cancer treatment.</p>
                            </div>
                        </div>
                        <div className="testimonial-author">
                            <div className="avatar avatar-lg">
                                <i className="fa-solid fa-circle-user" style={{fontSize: '52px', lineHeight: '52px', color: '#a5a6f6', display: 'block'}}></i>
                            </div>
                            <div className="author-name">
                                <h2>Afreen Mansuri</h2>
                                <p>Google review · Cancer treatment</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="review-star justify-content-between">
                            <span>
                                <i className="fa-solid fa-quote-left"></i>
                            </span>
                            <div className="rating d-flex">
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled"></i>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="description">
                                <p>I was diagnosed with a thyroid knot and my baby was just a year old, and I happened to meet Dr. Maqsood Ali Khan. He was so humble and made me worry less about the surgery, and I felt so relieved after meeting him. He is the best dr — thank you so much Dr.</p>
                            </div>
                        </div>
                        <div className="testimonial-author">
                            <div className="avatar avatar-lg">
                                <i className="fa-solid fa-circle-user" style={{fontSize: '52px', lineHeight: '52px', color: '#a5a6f6', display: 'block'}}></i>
                            </div>
                            <div className="author-name">
                                <h2>Arwa Udaypurwala</h2>
                                <p>Google review · Thyroid surgery</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="review-star justify-content-between">
                            <span>
                                <i className="fa-solid fa-quote-left"></i>
                            </span>
                            <div className="rating d-flex">
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled"></i>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="description">
                                <p>Dr Maqsood Ali Khan is an excellent ENT specialist. He listens to patients carefully, explains the treatment clearly, and provides effective care. I had a very positive experience and felt much better after the treatment. Highly recommended.</p>
                            </div>
                        </div>
                        <div className="testimonial-author">
                            <div className="avatar avatar-lg">
                                <i className="fa-solid fa-circle-user" style={{fontSize: '52px', lineHeight: '52px', color: '#a5a6f6', display: 'block'}}></i>
                            </div>
                            <div className="author-name">
                                <h2>Amit Pandey</h2>
                                <p>Google review · ENT specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="review-star justify-content-between">
                            <span>
                                <i className="fa-solid fa-quote-left"></i>
                            </span>
                            <div className="rating d-flex">
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled"></i>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="description">
                                <p>I had a very good experience with sir's consultation. He listened patiently to all my concerns, explained the problem clearly, and suggested the right treatment. The clinic is well maintained and the staff is also very supportive. Highly recommend for anyone looking for an ENT specialist.</p>
                            </div>
                        </div>
                        <div className="testimonial-author">
                            <div className="avatar avatar-lg">
                                <i className="fa-solid fa-circle-user" style={{fontSize: '52px', lineHeight: '52px', color: '#a5a6f6', display: 'block'}}></i>
                            </div>
                            <div className="author-name">
                                <h2>Nisreen Jetpurwala</h2>
                                <p>Google review · Consultation</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="review-star justify-content-between">
                            <span>
                                <i className="fa-solid fa-quote-left"></i>
                            </span>
                            <div className="rating d-flex">
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled me-1"></i>
                                <i className="fa-solid fa-star filled"></i>
                            </div>
                        </div>
                        <div className="testimonial-content">
                            <div className="description">
                                <p>Very good doctor and his team too. The tonsillectomy was handled so well by the full team. Alhamdulillah for the shifa granted in his hands.</p>
                            </div>
                        </div>
                        <div className="testimonial-author">
                            <div className="avatar avatar-lg">
                                <i className="fa-solid fa-circle-user" style={{fontSize: '52px', lineHeight: '52px', color: '#a5a6f6', display: 'block'}}></i>
                            </div>
                            <div className="author-name">
                                <h2>Naaz Faiz</h2>
                                <p>Google review · Tonsillectomy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        {/* <section className="medical-shop-section">
            <div className="container">
                <div className="row justify-content-center text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="section-label">
                            <span>Shop</span>
                        </div>
                        <h2 className="section-heading">Clinic <em>Essentials</em></h2>
                        <p>
                            Everyday medical essentials available for patient convenience.
                        </p>
                    </div>
                </div>
                <div className="row g-4">
                    <div className="col-md-3 col-6 " data-aos="fade-up" data-aos-delay="100">
                        <div className="product-item">
                            <div className="product-image">
                                <figure>
                                    <a href="/product-details/">
                                        <img src="/assets/img/pic-1.jpg" alt="product 1" />
                                    </a>
                                    <ul className="shop-item-controls">
                                        <li>
                                            <a href="javascript:;" title="Quick View">
                                                <i className="fa fa-eye"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" title="Add to Wishlist">
                                                <i className="fa-solid fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/shopping-cart/" title="Add to Cart">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </figure>
                            </div>
                            <div className="product-text">
                                <div className="product-title">
                                    <h3><a href="javascript:;">N-95 Mask</a></h3>
                                    <p>$180.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 " data-aos="fade-up" data-aos-delay="200">
                        <div className="product-item">
                            <div className="product-image">
                                <figure>
                                    <a href="/product-details/">
                                        <img src="/assets/img/pic-2.jpg" alt="Medical Gloves" />
                                    </a>
                                    <ul className="shop-item-controls">
                                        <li>
                                            <a href="javascript:;" title="Quick View">
                                                <i className="fa fa-eye"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" title="Add to Wishlist">
                                                <i className="fa-solid fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/shopping-cart/" title="Add to Cart">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </figure>
                            </div>
                            <div className="product-text">
                                <div className="product-title">
                                    <h3>
                                        <a href="javascript:;">Medical Gloves</a>
                                    </h3>
                                    <p>$80.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 " data-aos="fade-up" data-aos-delay="300">
                        <div className="product-item">
                            <div className="product-image">
                                <figure>
                                    <a href="/product-details/">
                                        <img src="/assets/img/pic-3.jpg" alt="product 1" />
                                    </a>
                                    <ul className="shop-item-controls">
                                        <li>
                                            <a href="javascript:;" title="Quick View">
                                                <i className="fa fa-eye"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" title="Add to Wishlist">
                                                <i className="fa-solid fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/shopping-cart/" title="Add to Cart">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </figure>
                            </div>
                            <div className="product-text">
                                <div className="product-title">
                                    <h3><a href="javascript:;">Vaccine</a></h3>
                                    <p>$132.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 aos-init" data-aos="fade-up" data-aos-delay="100">
                        <div className="product-item">
                            <div className="product-image">
                                <figure>
                                    <a href="/product-details/">
                                        <img src="/assets/img/pic-4.jpg" alt="product 1" />
                                    </a>
                                    <ul className="shop-item-controls">
                                        <li>
                                            <a href="javascript:;" title="Quick View">
                                                <i className="fa fa-eye"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" title="Add to Wishlist">
                                                <i className="fa-solid fa-heart"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/shopping-cart/" title="Add to Cart">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </figure>
                            </div>
                            <div className="product-text">
                                <div className="product-title">
                                    <h3><a href="javascript:;">Sanitizer</a></h3>
                                    <p>$90.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <a href="/products/" className="btn btn-primary">
                        View All Products
                    </a>
                </div>
            </div>
        </section> */}
        

        
        
        
          <Footer />
    </div>
  );
}
