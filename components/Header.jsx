export default function Header() {
  return (
    <header className="header-area header-box">
      <div className="container wide">
        <div className="header-inn d-flex align-items-lg-center justify-content-between">
          <div className="header-left  d-flex align-items-lg-center ">
            <a href="/" className="site-logo">
              <img src="/assets/img/logo.webp" alt="logo" />
              Dr. Maqsood Ali Khan
            </a>
            <div className="mainmenu">
              <nav id="menu">
                <ul className="menu-list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li>
                    <a href="/services">Services</a>
                    <ul>
                      <li><a href="/services">All Services</a></li>
                      <li><a href="/service-details">Service Details</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:;">Pages</a>
                    <ul>
                      <li><a href="/blog">Blog</a></li>
                      <li><a href="/blog-details">Blog Details</a></li>
                      <li><a href="/book-appointment">Book Appointment</a></li>
                      <li><a href="/login">Login</a></li>
                      <li><a href="/register">Register</a></li>
                      <li><a href="/404">404 Not Found</a></li>
                      <li><a href="/coming-soon">Coming Soon</a></li>
                    </ul>
                  </li>
                  {/* Shop tab hidden for now — uncomment to restore
                  <li>
                    <a href="javascript:;">Shop</a>
                    <ul>
                      <li><a href="/products">Products</a></li>
                      <li><a href="/product-details">Product Details</a></li>
                      <li><a href="/shopping-cart">Shopping Cart</a></li>
                      <li><a href="/checkout">Checkout</a></li>
                    </ul>
                  </li>
                  */}
                  <li><a href="/contact">Contact</a></li>
                </ul>
                <div className="mobile-btn d-lg-none">
                  <a href="/book-appointment" className="btn btn-primary">Book Appointment</a>
                </div>
              </nav>
            </div>
          </div>
          <div className="header-right  d-flex align-items-lg-center justify-content-end">
            <a href="tel:18002660711" className="phone-call"><em className="fa fa-phone"></em>1800-266-0711</a>
            <div className="d-none d-lg-block">
              <a href="/book-appointment" className="btn btn-primary">Book Appointment</a>
            </div>
            <div id="menu-toggle">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
