import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Coming Soon | Dr. Maqsood Ali Khan",
};

export default function ComingSoon() {
  return (
    <div className="main-wrapper">
      <Header />

        
    <section className="cooming-soon-area">
        <img src="/assets/img/commin-soon.jpg" alt="Coming Soon" className="cs-bg" />
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-8">
                    <div className="comsoon-wrap">
                        <h1 className="comsoon-title">We are coming soon</h1>
                        <p>Our website is under construction. We'll be here soon with our new awesome site.</p>
                        <div id="clockdiv" className="row comsoon-time">
                            <div className="col-md-3 col-sm-6 col-6 mb-3">
                                <div className="comsoon-col">
                                    <strong className="days">23</strong>
                                    <span className="smalltext">Days</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 mb-3">
                                <div className="comsoon-col">
                                    <strong className="hours">02</strong>
                                    <span className="smalltext">Hours</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 mb-3">
                                <div className="comsoon-col">
                                    <strong className="minutes">10</strong>
                                    <span className="smalltext">Minutes</span>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-6 mb-3">
                                <div className="comsoon-col">
                                    <strong className="seconds">59</strong>
                                    <span className="smalltext">Seconds</span>
                                </div>
                            </div>
                        </div>
                        <div className="news-letter">
                            <h2>Subscribe Our Newsletter</h2>
                            <form>
                                <div className="news-cosoon">
                                    <input type="text" className="form-control" placeholder="Enter Your Email" />
                                    <button type="button" className="sb-btn">
                                        <i className="fa fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>
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
