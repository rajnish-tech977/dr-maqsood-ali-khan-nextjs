import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Checkout | Dr. Maqsood Ali Khan",
};

export default function Checkout() {
  return (
    <div className="main-wrapper">
      <Header />

               
    
    


    
    <section className="page-header">
        <div className="page-header-bg">
            <img src="/assets/img/page-header-bg.jpg" alt="img" />
        </div>
        <div className="container">
            <div className="page-header-inner">
                <h1>Checkout</h1>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span>/</span></li>
                    <li>Checkout</li>
                </ul>
            </div>
        </div>
    </section>
    

    
    <section className="checkout-area section-70 aos-init aos-animate" data-aos="fade-up">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-7">
                    <div className="billing-box">
                        <div className="billing-title">
                            <h2>Billing Details</h2>
                        </div>
                        <form className="billing-form">
                            <div className="row g-3">
                                <div className="col-md-6 col-sm-6">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control billing-input" />
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control billing-input" />
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <label className="form-label">Country</label>
                                    <input type="text" className="form-control  billing-input" />
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control billing-input" />
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label">Town / City *</label>
                                    <input type="text" className="form-control billing-input" />
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <label className="form-label">Email Address *</label>
                                    <input type="email" className="form-control billing-input" />
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <label className="form-label">Mobile Number *</label>
                                    <input type="tel" className="form-control billing-input" />
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <label className="form-label">Order Note *</label>
                                    <textarea rows="4" className="form-control billing-input"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="billing-box">
                        <div className="billing-title">
                            <h2>Shipping Address</h2>
                        </div>
                        <form className="billing-form">
                            <div className="row g-3">
                                <div className="col-md-6 col-sm-6">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control billing-input" />
                                </div>

                                <div className="col-md-6 col-sm-6">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control billing-input" />
                                </div>

                                <div className="coll-md-12 col-sm-12">
                                    <label className="form-label">Country</label>
                                    <input type="text" className="form-control billing-input" />
                                </div>

                                <div className="coll-md-12 col-sm-12">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control billing-input" />
                                </div>

                                <div className="coll-md-12 col-sm-12">
                                    <label className="form-label">Town / City *</label>
                                    <input type="text" className="form-control billing-input" />
                                </div>

                                <div className="col-md-6 col-sm-6">
                                    <label className="form-label">Email Address *</label>
                                    <input type="email" className="form-control billing-input" />
                                </div>

                                <div className="col-md-6 col-sm-6">
                                    <label className="form-label">Mobile Number *</label>
                                    <input type="tel" className="form-control billing-input" />
                                </div>

                                <div className="coll-md-12 col-sm-12">
                                    <label className="form-label">Order Note *</label>
                                    <textarea rows="4" className="form-control billing-input"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 col-md-5">
                    <div className="order-summury-box">
                        <h2>Order Summury</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Cart Subtotal</td>
                                    <td>$270</td>
                                </tr>
                                <tr>
                                    <td>Shipping and Handling</td>
                                    <td>Free Shipping</td>
                                </tr>
                                <tr>
                                    <td>Order Total</td>
                                    <td>$270</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="payment-info">
                       <h2>Payment Information</h2>
                        <div className="payment-field">
                            <input type="text" name="cardNumber" placeholder="XXXX XXXX XXXX XXXX" required />
                            <i className="fa-solid fa-credit-card"></i>
                        </div>

                        <p className="payment-note">
                            Your personal data will be used to process your order and support your experience.
                            Read our <a href="javascript:;">privacy policy</a>.
                        </p>
                        <div className="checkout-action">
                            <a href="javascript:;" className="btn btn-primary">
                                Place Order
                            </a>
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
