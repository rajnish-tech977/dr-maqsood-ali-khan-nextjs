import { site } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema } from "@/data/seo";
import { articles, articleHref } from "@/data/articles";

export const metadata = pageMeta({
  title: "Dr. Maqsood Ali Khan | ENT & Head-Neck Health Articles",
  description: "Patient-friendly articles on head and neck cancer, robotic and skull-base surgery, thyroid recovery, diagnostics and vertigo from Dr. Maqsood Ali Khan, Mumbai.",
  path: "/blog/",
  keywords: site.keywordSets.blog,
});

export default function Blog() {
  return (
    <div className="main-wrapper">
      <JsonLd data={breadcrumbSchema([{name:"Home",path:"/"},{name:"Blog",path:"/blog/"}])} />
      <Header />

            
    
    



    
    <section className="page-header">
        <div className="page-header-bg">
            <img src="/assets/img/page-header-bg.jpg" alt="" />
        </div>
        <div className="container">
            <div className="page-header-inner">
                <h1>Blog</h1>
                <ul className="thm-breadcrumb list-unstyled">
                    <li><a href="/">Home</a></li>
                    <li><span>/</span></li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
    </section>
    

    
    <section id="blog" className="blog-area">
        <div className="container">
            <div className="row justify-content-center text-center mb-5" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="section-label">
                        <span>Insights</span>
                    </div>
                    <h2 className="section-heading">Latest <em>Articles</em></h2>
                    <p>
                        Evidence-based health insights, research summaries, and wellness guidance from my practice.
                    </p>
                </div>
            </div>
            <div className="row g-4">
                {articles.map((a, i) => (
                    <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay={200 + (i % 3) * 100} key={a.slug}>
                        <article className="blog-card">
                            <div className="blog-thumb">
                                <a href={articleHref(a)}><img src={a.image} alt={a.title} /></a>
                                <div className="blog-category">
                                    <span>{a.category}</span>
                                </div>
                            </div>
                            <div className="blog-body">
                                <div className="blog-meta">
                                    <span><i className="fa-regular fa-clock"></i> {a.readTime}</span>
                                </div>
                                <h3><a href={articleHref(a)}>{a.title}</a></h3>
                                <p>{a.excerpt}</p>
                                <div className="blog-read-more">
                                    <a href={articleHref(a)}>
                                        Read Articles <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    </section>
    

    
        
        
          <Footer />
    </div>
  );
}
