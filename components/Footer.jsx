import { articles, articleHref } from "@/data/articles";
import { site, telHref, whatsappHref, opdSchedule, opdNote } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-dark">
        <div className="footer-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="footer-newsletter">
                  <h3 className="footer-title">Book Your Consultation</h3>
                  <p>Message or call us directly. Available for urgent consultations.</p>
                  <div className="d-flex flex-wrap gap-2">
                    <a href={whatsappHref()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href={telHref} className="btn btn-primary">
                      <i className="fa-solid fa-phone"></i> Call {site.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-md-0">
                <div className="row align-items-center g-4">
                  <div className="col-md-7 col-sm-12">
                    <div className="hospital-info">
                      <div className="info-box">
                        <p>Consultant ENT, Head-Neck &amp; Skull-Base Surgeon</p>
                        <p>Masina, Saifee &amp; Gramy Hospitals, Mumbai</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12">
                    <div className="hospital-side">
                      <div className="hospital-count">
                        <span>17+</span>
                        <span>Years Experience</span>
                      </div>
                      <div className="hospital-btn">
                        <a href="/contact/" className="btn btn-primary">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-box">
                  <h3 className="footer-title">About Me</h3>
                  <p>
                    Dr. Maqsood Ali Khan is an Otorhinolaryngologist (ENT), Head-Neck Surgeon
                    and Skull-Base Endoscopic Surgeon with 17+ years of clinical practice,
                    consulting at Masina Hospital (Byculla), Saifee Hospital (Charni Road) and Gramy Hospital
                    in Mumbai.
                  </p>
                  <div className="social-links mt-4">
                    <a href="https://www.facebook.com/" className="social-link">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://www.youtube.com/" className="social-link">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://in.linkedin.com/in/dr-maqsood-ali-khan-10224953" className="social-link">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://x.com/" className="social-link">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-box">
                  <h3 className="footer-title">Useful Links</h3>
                  <div className="footer-links d-flex gap-4">
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/about/">About</a></li>
                      <li><a href="/services/">Services</a></li>
                      <li><a href="/book-appointment/">Appointment</a></li>
                    </ul>
                    <ul>
                      <li><a href="/blog/">Blog</a></li>
                      <li><a href={telHref}>Book Appointment</a></li>
                      <li><a href="/contact/">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-box footer-box-2">
                  <h3 className="footer-title">Popular Posts</h3>
                  <div className="footer-post d-flex align-items-lg-center gap-3 mb-3">
                    <img src="/assets/img/footer-post-01.jpg" alt={articles[0].shortTitle} />
                    <div>
                      <span>{articles[0].category}</span>
                      <a href={articleHref(articles[0])}>{articles[0].shortTitle}</a>
                    </div>
                  </div>
                  <div className="footer-post d-flex align-items-lg-center gap-3">
                    <img src="/assets/img/footer-post-02.jpg" alt={articles[1].shortTitle} />
                    <div>
                      <span>{articles[1].category}</span>
                      <a href={articleHref(articles[1])}>{articles[1].shortTitle}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-box footer-box-1">
                  <h3 className="footer-title">Get In Touch</h3>
                  <ul className="footer-contact">
                    <li>Call : <a href={telHref}>{site.phone}</a></li>
                    <li>WhatsApp : <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">{site.phone}</a></li>
                    {opdSchedule.map((o) => (
                      <li key={o.id}>OPD : <a href="javascript:;">{o.daysShort}, {o.time} ({o.shortPlace})</a></li>
                    ))}
                    <li>Location : <a href="javascript:;">Byculla &amp; Charni Road, Mumbai</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-lg-center">
            <div className="col-lg-6 col-md-6 col-sm-6 text-center text-lg-start mb-2 mb-lg-0">
              <p>&copy; 2026 Dr. Maqsood Ali Khan. All rights reserved</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 text-center text-lg-end">
              <div className="copyright">
                <p>ENT, Head-Neck &amp; Skull-Base Surgeon, Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
