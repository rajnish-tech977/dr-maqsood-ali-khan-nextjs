import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFoundDemo() {
  return (
    <div className="main-wrapper">
      <Header />

      
    
    



    
    <section className="page-header">
        <div className="page-header-bg">
            <img src="/assets/img/page-header-bg.jpg" alt="" />
        </div>
        <div className="container">
            <div className="page-header-inner">
                <h1>404 PAGE</h1>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span>/</span></li>
                    <li>404 page</li>
                </ul>
            </div>
        </div>
    </section>
    

    
    <section className="page-notfound-outer">
        <div className="container">
            <div className="section-content">
                <div className="page-notfound">
                    <div className="row align-items-lg-center">
                        <div className="col-md-6">
                            <div className="page-notfound-media">
                                <img src="/assets/img/404.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="page-notfound-content">
                                <h2 className="error-comment">The Page You Are Looking For Doesn't Exist...</h2>
                                <p>The page you are looking for might have been removed had its name changed or temporarily unavailable.</p>
                                <a href="/" className="btn btn-primary">Back to Home</a>
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
