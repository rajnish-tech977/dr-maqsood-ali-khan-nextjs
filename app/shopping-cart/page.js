import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Shopping Cart",
  robots: { index: false, follow: false },
};

export default function ShoppingCart() {
  return (
    <div className="main-wrapper">
      <Header />

           
    
    


    
    <section className="page-header">
        <div className="page-header-bg">
            <img src="/assets/img/page-header-bg.jpg" alt="" />
        </div>
        <div className="container">
            <div className="page-header-inner">
                <h1>Shopping Cart</h1>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span>/</span></li>
                    <li>Shopping Cart</li>
                </ul>
            </div>
        </div>
    </section>
    

    
    <section className="cart-page-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="cart-table-left">
                        <h2>Shopping Cart</h2>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Preview</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   <tr className="shop-cart-item">
                                        <td className="cart-preview">
                                            <a href="javascript:;">
                                                <img src="/assets/img/pic-1.jpg" alt="cart-2" />
                                            </a>
                                        </td>
                                        <td className="cart-product">
                                            <a href="javascript:;">
                                                <p>N-95 Mask</p>
                                            </a>
                                        </td>
                                        <td className="cart-price">
                                            <p>$180</p>
                                        </td>
                                        <td className="cart-quantity">
                                            <input type="number" value="1" />
                                        </td>
                                        <td className="cart-total">
                                            <p>$180</p>
                                        </td>
                                        <td className="cart-close">
                                            <a href="javascript:;"><i className="fa fa-times"></i></a>
                                        </td>
                                    </tr>
                                    <tr className="shop-cart-item">
                                        <td className="cart-preview">
                                            <a href="javascript:;">
                                                <img src="/assets/img/pic-2.jpg" alt="cart-1" />
                                            </a>
                                        </td>
                                        <td className="cart-product">
                                            <a href="javascript:;">
                                                <p>Medical Gloves</p>
                                            </a>
                                        </td>
                                        <td className="cart-price">
                                            <p>$150</p>
                                        </td>
                                        <td className="cart-quantity">
                                            <input type="number" value="1" />
                                        </td>
                                        <td className="cart-total">
                                            <p>$150</p>
                                        </td>
                                        <td className="cart-close">
                                            <a href="javascript:;"><i className="fa fa-times"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="cart-clear">
                            <a href="javascript:;">clear cart</a>
                            <a href="javascript:;">update cart</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
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
                    <div className="checkout-action">
                        <a href="/checkout/" className="btn btn-primary">
                            Proceed to checkout
                            <i className="fa-solid fa-arrow-right btn-arrow"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    
        
        
          <Footer />
    </div>
  );
}
