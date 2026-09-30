import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Register | Dr. Maqsood Ali Khan",
};

export default function Register() {
  return (
    <div className="main-wrapper">
      <Header />

          
    
    


    
    <section className="page-header">
        <div className="page-header-bg">
            <img src="/assets/img/page-header-bg.jpg" alt="img" />
        </div>
        <div className="container">
            <div className="page-header-inner">
                <h1>Register</h1>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span>/</span></li>
                    <li>Register</li>
                </ul>
            </div>
        </div>
    </section>
    

    
    <section className="login-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="login-box aos-init aos-animate" data-aos="fade-up">
                        <div className="login-page-heading">
                            <i className="fa fa-key"></i>
                            <h2>sign up</h2>
                        </div>
                        <form>
                            <div className="account-form-group">
                                <input type="text" placeholder="First Name" name="First Name" />
                                <i className="fa fa-user"></i>
                            </div>
                            <div className="account-form-group">
                                <input type="text" placeholder="Last Name" name="Last Name" />
                                <i className="fa fa-user"></i>
                            </div>
                            <div className="account-form-group">
                                <input type="text" placeholder="Mobile Number" name="Mobile" />
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <div className="account-form-group">
                                <input type="text" placeholder="Email" name="Email" />
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="account-form-group">
                                <input type="password" placeholder="Password" name="password" />
                                <i className="fa fa-lock"></i>
                            </div>
                            <div className="account-form-group">
                                <input type="password" placeholder="Confirm Password" name="password" />
                                <i className="fa fa-lock"></i>
                            </div>
                            <div className="remember-row">
                                <div className="checkbox remember signup">
                                    <p>
                                        <input className="checkbox-spin" type="checkbox" id="Freelance" />
                                        <label htmlFor="Freelance">
                                            <span>accept terms &amp; condition</span>
                                        </label>
                                    </p>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary">
                                <span>Sign Up Now</span>
                            </button>
                        </form>
                        <div className="login-sign-up">
                            <a href="/login">Already have an account?</a>
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
