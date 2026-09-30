import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Login | Dr. Maqsood Ali Khan",
};

export default function Login() {
  return (
    <div className="main-wrapper">
      <Header />

           
    
    



    
    <section className="page-header">
        <div className="page-header-bg">
            <img src="/assets/img/page-header-bg.jpg" alt="img" />
        </div>
        <div className="container">
            <div className="page-header-inner">
                <h1>Login Page</h1>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span>/</span></li>
                    <li>login page</li>
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
                            <h2>sign in</h2>
                        </div>
                        <form>
                            <div className="account-form-group">
                                <input type="text" placeholder="Username or Email" name="username" />
                                <i className="fa fa-user"></i>
                            </div>
                            <div className="account-form-group">
                                <input type="password" placeholder="Password" name="password" />
                                <i className="fa fa-lock"></i>
                            </div>
                            <div className="remember-row">
                                <div className="lost-pass">
                                    <p>
                                        <a href="javascript:;">forgot password?</a>
                                    </p>
                                </div>
                                <div className="checkbox remember">
                                    <p>
                                        <input className="checkbox-spin" type="checkbox" id="Freelance" />
                                        <label htmlFor="Freelance">
                                            <a href="javascript:;">Keep Me Signed In</a>
                                        </label>
                                    </p>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary">
                                Login Now
                            </button>
                        </form>
                        <div className="login-sign-up">
                            <a href="/register">Do you need an account?</a>
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
