import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Clinic Essentials | Dr. Maqsood Ali Khan",
};

export default function Products() {
  return (
    <div className="main-wrapper">
      <Header />

           
    
    


    
    <section className="page-header">
        <div className="page-header-bg">
            <img src="/assets/img/page-header-bg.jpg" alt="img" />
        </div>
        <div className="container">
            <div className="page-header-inner">
                <h1>Products</h1>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span>/</span></li>
                    <li>Products</li>
                </ul>
            </div>
        </div>
    </section>
    

    
    <section className="products">
        <div className="container">
            <div className="row align-items-lg-center mb-4">
                <div className="col-md-6">
                    <span>Showing 1–8 of 24 medical products</span>
                </div>
                <div className="col-md-6 text-md-end">
                    <form method="get">
                        <select className="form-select d-inline-block">
                            <option>Default sorting</option>
                            <option>Sort by popularity</option>
                            <option>Sort by rating</option>
                            <option>Sort by latest</option>
                            <option>Price: low to high</option>
                            <option>Price: high to low</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-5 order-lg-1 order-md-1 order-2 mb-30">
                    <div className="products-list">
                        <div className="search-bx">
                            <form role="search" method="post">
                                <div className="input-group">
                                    <input name="news-letter" type="text" className="form-control" placeholder="Write your text" />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn"><i className="fa fa-search"></i></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <div className="products-widget">
                            <h2 className="widget-title">Categories</h2>
                            <ul className="products-menu">
                                <li>
                                    <a href="javascript:;">ENT Care <span>(120)</span></a>
                                </li>
                                <li>
                                    <a href="javascript:;">Diabetes Care <span>(86)</span></a>
                                </li>
                                <li>
                                    <a href="javascript:;">Medical Equipment <span>(42)</span></a>
                                </li>
                                <li>
                                    <a href="javascript:;">Vitamins &amp; Supplements<span>(98)</span></a>
                                </li>
                                <li>
                                    <a href="javascript:;">Personal Care<span>(64)</span></a>
                                </li>
                            </ul>
                        </div>
                        <div className="products-widget">
                            <h2 className="widget-title">top selling</h2>
                            <ul className="products-top">
                                <li>
                                    <div className="products-img">
                                        <a href="javascript:;">
                                            <img src="/assets/img/pic-1.jpg" alt="recent image" />
                                        </a>
                                    </div>
                                    <div className="products-text">
                                        <h2>
                                            <a href="javascript:;">N-95 Mask</a>
                                        </h2>
                                        <p>$78.60</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="products-img">
                                        <a href="javascript:;">
                                            <img src="/assets/img/pic-2.jpg" alt="recent image" />
                                        </a>
                                    </div>
                                    <div className="products-text">
                                        <h2>
                                            <a href="javascript:;">Glubs</a>
                                        </h2>
                                        <p>$39.40</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="products-img">
                                        <a href="javascript:;">
                                            <img src="/assets/img/pic-3.jpg" alt="recent image" />
                                        </a>
                                    </div>
                                    <div className="products-text">
                                        <h2>
                                            <a href="javascript:;">Vaccine</a>
                                        </h2>
                                        <p>$52.50</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="products-img">
                                        <a href="javascript:;">
                                            <img src="/assets/img/pic-4.jpg" alt="recent image" />
                                        </a>
                                    </div>
                                    <div className="products-text">
                                        <h2>
                                            <a href="javascript:;">Sanitizer</a>
                                        </h2>
                                        <p>$78.60</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="products-img">
                                        <a href="javascript:;">
                                            <img src="/assets/img/pic-7.jpg" alt="recent image" />
                                        </a>
                                    </div>
                                    <div className="products-text">
                                        <h2>
                                            <a href="javascript:;">Medical Kit</a>
                                        </h2>
                                        <p>$39.40</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-7 order-lg-2 order-md-2 order-1">
                    <div className="product-page-right">
                        <div className="row g-4">
                            <div className="col-lg-4 col-6 " data-aos="fade-up" data-aos-delay="100">
                                <div className="product-item">
                                    <div className="product-image">
                                        <figure>
                                            <a href="javascript:;">
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
                            <div className="col-lg-4 col-6 " data-aos="fade-up" data-aos-delay="200">
                                <div className="product-item">
                                    <div className="product-image">
                                        <figure>
                                            <a href="javascript:;">
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
                            <div className="col-lg-4 col-6 " data-aos="fade-up" data-aos-delay="300">
                                <div className="product-item">
                                    <div className="product-image">
                                        <figure>
                                            <a href="javascript:;">
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
                            <div className="col-lg-4 col-6 " data-aos="fade-up" data-aos-delay="100">
                                <div className="product-item">
                                    <div className="product-image">
                                        <figure>
                                            <a href="javascript:;">
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
                            <div className="col-lg-4 col-6 " data-aos="fade-up" data-aos-delay="200">
                                <div className="product-item">
                                    <div className="product-image">
                                        <figure>
                                            <a href="javascript:;">
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
                            <div className="col-lg-4 col-6 " data-aos="fade-up" data-aos-delay="300">
                                <div className="product-item">
                                    <div className="product-image">
                                        <figure>
                                            <a href="javascript:;">
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
                            <div className="col-lg-4 col-6 " data-aos="fade-up" data-aos-delay="100">
                                <div className="product-item">
                                    <div className="product-image">
                                        <figure>
                                            <a href="javascript:;">
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
                            <div className="col-lg-4 col-6 " data-aos="fade-up" data-aos-delay="200">
                                <div className="product-item">
                                    <div className="product-image">
                                        <figure>
                                            <a href="javascript:;">
                                                <img src="/assets/img/pic-8.jpg" alt="product 1" />
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
                                            <h3><a href="javascript:;">OT Dress</a></h3>
                                            <p>$180.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-6 " data-aos="fade-up" data-aos-delay="200">
                                <div className="product-item">
                                    <div className="product-image">
                                        <figure>
                                            <a href="javascript:;">
                                                <img src="/assets/img/pic-9.jpg" alt="product 1" />
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
                                            <h3><a href="javascript:;">DR. Chair</a></h3>
                                            <p>$400.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12 text-center">
                                <ul className="pagination-wrap">
                                    <li>
                                        <a href="/products" aria-label="Previous">
                                            <i className="fa-solid fa-angle-left"></i>
                                        </a>
                                    </li>
                                    <li><a href="/products">1</a></li>
                                    <li><a href="/products">2</a></li>
                                    <li><a href="/products">3</a></li>
                                    <li>
                                        <a href="/products" aria-label="Next">
                                            <i className="fa-solid fa-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
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
