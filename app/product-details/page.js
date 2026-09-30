import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Product Details | Dr. Maqsood Ali Khan",
};

export default function ProductDetails() {
  return (
    <div className="main-wrapper">
      <Header />

        
        
        



        
        <section className="page-header">
            <div className="page-header-bg">
                <img src="/assets/img/page-header-bg.jpg" alt="img" />
            </div>
            <div className="container">
                <div className="page-header-inner">
                    <h1>Product Details</h1>
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><span>/</span></li>
                        <li>Product details</li>
                    </ul>
                </div>
            </div>
        </section>
        

        
        <section className="product-details">
            <div className="container">
                <div className="row ">
                    <div className="col-sm-6">
                        <div className="product-image-gallery">
                            <a href="/assets/img/pic-1.png" className="zoom-icon zoom-img">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <div className="main-image">
                                <img id="mainProductImage" src="/assets/img/pic-1.jpg" alt="Product Image" />
                            </div>
                            <div className="thumbnail-list">
                                <div className="thumb active" data-img="assets/img/pic-1.jpg" data-title="Medical Face Mask" data-price="$180.00" data-desc="Disposable medical face mask with 3 layers protection.">
                                    <img src="/assets/img/pic-1.jpg" alt="" />
                                </div>
                                <div className="thumb" data-img="assets/img/pic-5.jpg" data-title="Stethoscope" data-price="$320.00" data-desc="Professional-grade stethoscope for accurate heart and lung sound diagnosis.">
                                    <img src="/assets/img/pic-5.jpg" alt="" />
                                </div>
                                <div className="thumb" data-img="assets/img/pic-2.jpg" data-title="Surgical Gloves" data-price="$180.00" data-desc="Latex free disposable surgical gloves for safety.">
                                    <img src="/assets/img/pic-2.jpg" alt="" />
                                </div>

                                <div className="thumb" data-img="assets/img/pic-3.jpg" data-title="Hand Sanitizer" data-price="$132.00" data-desc="Alcohol based hand sanitizer kills 99.9% germs.">
                                    <img src="/assets/img/pic-3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 aos-init aos-animate" data-aos="fade-left">
                        <div className="product-details-text">
                            <h2 id="productTitle">N-95 Mask</h2>
                            <div className="doctor-rating">
                                <ul>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                    <li><i className="fa fa-star"></i></li>
                                </ul>
                                <p>(123 rating)</p>
                            </div>
                            <div className="single-pro-page-para">
                                <p>
                                    Disposable medical face mask with 3-layer protection, suitable for
                                    everyday clinical and personal use.
                                </p>
                                <p>
                                    Latex-free, breathable material designed for comfortable, extended wear.
                                </p>
                            </div>
                            <div className="single-shop-price">
                                <p>Price:<span id="productPrice">$180.00</span></p>
                                <p className="qnt">Quantity:<input value="1" type="number" /></p>
                            </div>

                            <div className="single-shop-page-btn">
                                <a href="/shopping-cart" className="btn btn-primary">
                                    <i className="fa fa-shopping-cart"></i>
                                    add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <section className="related-products">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <div className="site-heading aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="widget-title">related products</h3>
                        </div>
                    </div>
                </div>
                <div className="row g-lg-4 g-3">
                    <div className="col-md-3 col-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="product-item">
                            <div className="product-image">
                                <figure>
                                    <a href="/product-details">
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
                                            <a href="/shopping-cart" title="Add to Cart">
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
                    <div className="col-md-3 col-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <div className="product-item">
                            <div className="product-image">
                                <figure>
                                    <a href="/product-details">
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
                                            <a href="/shopping-cart" title="Add to Cart">
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
                    <div className="col-md-3 col-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                        <div className="product-item">
                            <div className="product-image">
                                <figure>
                                    <a href="/product-details">
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
                                            <a href="/shopping-cart" title="Add to Cart">
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
                    <div className="col-md-3 col-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                        <div className="product-item">
                            <div className="product-image">
                                <figure>
                                    <a href="/product-details">
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
                                            <a href="/shopping-cart" title="Add to Cart">
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
                    <div className="col-md-3 col-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="product-item">
                            <div className="product-image">
                                <figure>
                                    <a href="/product-details">
                                        <img src="/assets/img/pic-5.jpg" alt="product 1" />
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
                                            <a href="/shopping-cart" title="Add to Cart">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </figure>
                            </div>
                            <div className="product-text">
                                <div className="product-title">
                                    <h3><a href="javascript:;">Stethoscope</a></h3>
                                    <p>$320.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <div className="product-item">
                            <div className="product-image">
                                <figure>
                                    <a href="/product-details">
                                        <img src="/assets/img/pic-6.jpg" alt="product 1" />
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
                                            <a href="/shopping-cart" title="Add to Cart">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </figure>
                            </div>
                            <div className="product-text">
                                <div className="product-title">
                                    <h3><a href="javascript:;">Oximeter</a></h3>
                                    <p>$132.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                        <div className="product-item">
                            <div className="product-image">
                                <figure>
                                    <a href="/product-details">
                                        <img src="/assets/img/pic-7.jpg" alt="product 1" />
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
                                            <a href="/shopping-cart" title="Add to Cart">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </figure>
                            </div>
                            <div className="product-text">
                                <div className="product-title">
                                    <h3><a href="javascript:;">Medical Kit</a></h3>
                                    <p>$132.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                        <div className="product-item">
                            <div className="product-image">
                                <figure>
                                    <a href="/product-details">
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
                                            <a href="/shopping-cart" title="Add to Cart">
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
            </div>
        </section>
        

        
        
        
          <Footer />
    </div>
  );
}
