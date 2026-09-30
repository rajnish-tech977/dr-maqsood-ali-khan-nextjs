export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-dark">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="footer-newsletter">
                  <h3 className="footer-title">Subscribe Now</h3>
                  <p>For any help mail us. Available for urgent consultations.</p>
                  <form className="newsletter-form d-flex gap-2">
                    <input type="email" placeholder="Enter Your Email" required />
                    <button type="button" className="btn btn-primary">Message</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 mt-lg-0">
                <div className="row align-items-lg-center">
                  <div className="col-md-6 col-sm-12">
                    <div className="hospital-info">
                      <div className="info-box">
                        <p>Consultant ENT, Head-Neck &amp; Skull-Base Surgeon</p>
                        <p>Masina Hospital &amp; Saifee Hospital, Mumbai</p>
                      </div>
                      <div className="hospital-divider"></div>
                      <div className="hospital-count">
                        <span>17+</span>
                        <span>Years Experience</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 text-md-end mt-3 mt-md-0">
                    <div className="hospital-btn">
                      <a href="/contact" className="btn btn-primary">
                        Contact Us
                      </a>
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
                    consulting at Masina Hospital (Byculla) and Saifee Hospital (Charni Road)
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
                      <li><a href="/about">About</a></li>
                      <li><a href="/services">Services</a></li>
                      <li><a href="/book-appointment">Appointment</a></li>
                    </ul>
                    <ul>
                      <li><a href="/blog">Blog</a></li>
                      <li><a href="/book-appointment">Book Appointment</a></li>
                      <li><a href="/contact">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-box footer-box-2">
                  <h3 className="footer-title">Popular Posts</h3>
                  <div className="footer-post d-flex align-items-lg-center gap-3 mb-3">
                    <img src="/assets/img/footer-post-01.jpg" alt="image" />
                    <div>
                      <span>April 17, 2026</span>
                      <a href="/blog-details">Warning Signs of Head &amp; Neck Cancer</a>
                    </div>
                  </div>
                  <div className="footer-post d-flex align-items-lg-center gap-3">
                    <img src="/assets/img/footer-post-02.jpg" alt="image" />
                    <div>
                      <span>April 17, 2026</span>
                      <a href="/blog-details">Recovering After Robotic Neck Surgery</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-box footer-box-1">
                  <h3 className="footer-title">Get In Touch</h3>
                  <ul className="footer-contact">
                    <li>Phone : <a href="tel:18002660711">1800-266-0711</a></li>
                    <li>OPD : <a href="javascript:;">Tue, Wed &amp; Thu, 7–9 PM (Masina Hospital)</a></li>
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
